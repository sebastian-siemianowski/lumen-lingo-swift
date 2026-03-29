import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useBotDetection, MouseRingBuffer, arePointsCollinear, isSuperhumanSpeed, evaluateEnvironment, computeEnvironmentWeight, analyseCadence } from '@/hooks/use-bot-detection';
import type { EnvironmentResult } from '@/hooks/use-bot-detection';
import { _resetBotFlag } from '@/components/contact/email-honeypot';

// ── Mocks ────────────────────────────────────────────────────────────

// Mock isBotDetected from honeypot module
let mockBotDetected = false;
vi.mock('@/components/contact/email-honeypot', () => ({
  isBotDetected: () => mockBotDetected,
  _resetBotFlag: vi.fn(),
}));

// Mock email-config to control threshold
vi.mock('@/lib/email-config', () => ({
  BOT_DETECTION_THRESHOLD: 50,
}));

// Helper: create a fake container ref
function createContainerRef() {
  const el = document.createElement('div');
  return { current: el };
}

// Helper: create a MouseEvent with coordinates
function mouseMove(x: number, y: number): MouseEvent {
  return new MouseEvent('mousemove', { clientX: x, clientY: y, bubbles: true });
}

// Track a fake clock for performance.now() that increments independently of fake timers
let perfNowValue = 0;
const originalPerfNow = performance.now.bind(performance);

// Human-like curved path points (not collinear)
const CURVED_POINTS: [number, number][] = [
  [100, 100], [150, 130], [200, 110], [250, 150], [300, 120],
  [320, 180], [350, 140], [380, 200], [400, 160], [450, 190],
];

// Helper: dispatch N human-like curved mouse moves (each 100ms apart via perfNow)
function dispatchHumanMouseMoves(count: number = 3) {
  for (let i = 0; i < count; i++) {
    const [x, y] = CURVED_POINTS[i % CURVED_POINTS.length];
    perfNowValue += 100;
    window.dispatchEvent(mouseMove(x, y));
  }
}

// Helper: dispatch N collinear (straight-line) mouse moves (each 100ms apart)
function dispatchStraightMouseMoves(count: number = 10) {
  for (let i = 0; i < count; i++) {
    perfNowValue += 100;
    window.dispatchEvent(mouseMove(100 + i * 10, 200));
  }
}

// ── IntersectionObserver mock ────────────────────────────────────────
let ioCallback: IntersectionObserverCallback;

class MockIntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    ioCallback = callback;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

function triggerIntersection(isIntersecting: boolean) {
  ioCallback(
    [{ isIntersecting } as IntersectionObserverEntry],
    {} as IntersectionObserver,
  );
}

// ── matchMedia mock ──────────────────────────────────────────────────
let matchMediaResult = true;

describe('useBotDetection', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockBotDetected = false;
    matchMediaResult = true;
    perfNowValue = 0;

    // Mock performance.now() to use our controlled counter
    vi.spyOn(performance, 'now').mockImplementation(() => perfNowValue);

    Object.defineProperty(navigator, 'webdriver', {
      value: false,
      configurable: true,
      writable: true,
    });

    // Mock navigator.languages to simulate a real browser
    Object.defineProperty(navigator, 'languages', {
      value: ['en-US', 'en'],
      configurable: true,
      writable: true,
    });

    // Mock navigator.plugins to simulate a real desktop browser
    Object.defineProperty(navigator, 'plugins', {
      value: [{ name: 'Chrome PDF Plugin' }],
      configurable: true,
      writable: true,
    });

    globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(pointer: fine)' ? matchMediaResult : false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      onchange: null,
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('returns initial score of 0 before viewport entry', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    expect(result.current.score).toBe(0);
    expect(result.current.isHuman).toBe(false);
  });

  it('returns { score, signals, isHuman } shape', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    expect(result.current).toHaveProperty('score');
    expect(result.current).toHaveProperty('signals');
    expect(result.current).toHaveProperty('isHuman');
    expect(typeof result.current.score).toBe('number');
    expect(typeof result.current.isHuman).toBe('boolean');
  });

  it('evaluates static signals on viewport entry (pointerFine, noWebDriver, honeypotClean)', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    // Trigger viewport intersection
    act(() => {
      triggerIntersection(true);
    });

    // Static signals should be evaluated immediately (pointer fine +10, no webdriver +10, honeypot clean +10 = 30)
    expect(result.current.signals.pointerFine).toBe(true);
    expect(result.current.signals.noWebDriver).toBe(true);
    expect(result.current.signals.honeypotClean).toBe(true);
    expect(result.current.score).toBe(30);
    expect(result.current.isHuman).toBe(false); // 30 < 70
  });

  it('updates score reactively as signals arrive', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => {
      triggerIntersection(true);
    });

    // Simulate 3 human-like mouse moves to trigger signal
    act(() => {
      dispatchHumanMouseMoves(3);
    });

    // Wait for debounce (500ms)
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.signals.mouseMoved).toBe(true);
    // 30 (static) + 15 (mouse) = 45
    expect(result.current.score).toBe(45);
  });

  it('triggers scroll signal on scroll event', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => {
      triggerIntersection(true);
    });

    // Advance past the 500ms suspicious-scroll window
    perfNowValue += 600;

    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.signals.scrollDetected).toBe(true);
    // 30 + 15 = 45
    expect(result.current.score).toBe(45);
  });

  it('triggers touch signal on touchstart event', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => {
      triggerIntersection(true);
    });

    act(() => {
      window.dispatchEvent(new Event('touchstart'));
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.signals.touchInteraction).toBe(true);
  });

  it('triggers keyboard signal on keydown event', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => {
      triggerIntersection(true);
    });

    act(() => {
      window.dispatchEvent(new Event('keydown'));
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.signals.keyboardActivity).toBe(true);
  });

  it('triggers timeOnPage signal after 3 seconds', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => {
      triggerIntersection(true);
    });

    expect(result.current.signals.timeOnPage).toBe(false);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    // Wait for debounce
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.signals.timeOnPage).toBe(true);
  });

  it('becomes isHuman when score reaches threshold (50)', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => {
      triggerIntersection(true);
    });

    // Static: 30 (pointerFine + noWebDriver + honeypotClean) — not yet ≥ 50
    expect(result.current.score).toBe(30);
    expect(result.current.isHuman).toBe(false);

    // Advance past suspicious-scroll window and give natural cadence timing
    perfNowValue += 600;

    act(() => {
      // Mouse moves (each advances perfNow by 100ms)
      dispatchHumanMouseMoves(3);
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    // 30 + 15 (mouse) = 45, not yet ≥ 50
    expect(result.current.score).toBe(45);
    expect(result.current.isHuman).toBe(false);

    // Time on page (3s)
    act(() => {
      vi.advanceTimersByTime(3000);
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    // 45 + 15 = 60 ≥ 50
    expect(result.current.score).toBe(60);
    expect(result.current.isHuman).toBe(true);
  });

  it('locks score at 0 when honeypot is triggered', () => {
    mockBotDetected = true;
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => {
      triggerIntersection(true);
    });

    // Simulate all interactions
    act(() => {
      dispatchHumanMouseMoves(3);
      window.dispatchEvent(new Event('scroll'));
      window.dispatchEvent(new Event('touchstart'));
      window.dispatchEvent(new Event('keydown'));
    });

    act(() => {
      vi.advanceTimersByTime(3500);
    });

    expect(result.current.score).toBe(0);
    expect(result.current.isHuman).toBe(false);
    expect(result.current.signals.honeypotClean).toBe(false);
  });

  it('does not collect signals before viewport entry', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    // Dispatch events WITHOUT triggering intersection
    act(() => {
      dispatchHumanMouseMoves(3);
      window.dispatchEvent(new Event('scroll'));
    });

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    // No signals should have been collected
    expect(result.current.score).toBe(0);
  });

  it('cleans up event listeners on unmount', () => {
    const removeListenerSpy = vi.spyOn(window, 'removeEventListener');
    const ref = createContainerRef();
    const { unmount } = renderHook(() => useBotDetection(ref));

    act(() => {
      triggerIntersection(true);
    });

    unmount();

    // Should have removed event listeners
    const removedEvents = removeListenerSpy.mock.calls.map((c) => c[0]);
    expect(removedEvents).toContain('mousemove');
    expect(removedEvents).toContain('scroll');
    expect(removedEvents).toContain('touchstart');
    expect(removedEvents).toContain('keydown');
  });

  it('detects webdriver = true and does not set noWebDriver signal', () => {
    Object.defineProperty(navigator, 'webdriver', {
      value: true,
      configurable: true,
      writable: true,
    });

    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => {
      triggerIntersection(true);
    });

    expect(result.current.signals.noWebDriver).toBe(false);
    // pointerFine(10) + honeypotClean(10) = 20
    expect(result.current.score).toBe(20);
  });

  it('handles no pointer:fine match (e.g. touch device)', () => {
    matchMediaResult = false;

    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => {
      triggerIntersection(true);
    });

    expect(result.current.signals.pointerFine).toBe(false);
    // noWebDriver(10) + honeypotClean(10) = 20
    expect(result.current.score).toBe(20);
  });

  it('debounces recalculation — multiple signals within 500ms cause only one recalc', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => {
      triggerIntersection(true);
    });

    // Initial score from static signals
    const scoreAfterStatic = result.current.score;
    expect(scoreAfterStatic).toBe(30);

    // Advance past suspicious-scroll window; give natural cadence timing
    perfNowValue += 600;

    // Fire multiple events with natural human-like gaps
    act(() => {
      dispatchHumanMouseMoves(3); // advances perfNow by 300
      perfNowValue += 200;
      window.dispatchEvent(new Event('scroll'));
      perfNowValue += 300;
      window.dispatchEvent(new Event('keydown'));
    });

    // Before debounce fires — score should still be 30
    expect(result.current.score).toBe(30);

    // After debounce
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Now all signals should be reflected in one update
    // 30 (static) + 15 (mouse) + 15 (scroll) + 10 (keyboard) = 70
    expect(result.current.score).toBe(70);
    expect(result.current.isHuman).toBe(true);
  });
});

// ─── Story 3.2: Mouse Movement Analysis ─────────────────────────────

describe('MouseRingBuffer', () => {
  it('stores positions up to capacity', () => {
    const buf = new MouseRingBuffer(5);
    for (let i = 0; i < 5; i++) {
      buf.push({ x: i, y: i, timestamp: i * 100 });
    }
    expect(buf.count).toBe(5);
    expect(buf.getAll()).toHaveLength(5);
  });

  it('overwrites oldest entries when exceeding capacity', () => {
    const buf = new MouseRingBuffer(3);
    buf.push({ x: 1, y: 1, timestamp: 100 });
    buf.push({ x: 2, y: 2, timestamp: 200 });
    buf.push({ x: 3, y: 3, timestamp: 300 });
    buf.push({ x: 4, y: 4, timestamp: 400 }); // overwrites first

    expect(buf.count).toBe(3);
    const all = buf.getAll();
    expect(all[0].x).toBe(2);
    expect(all[1].x).toBe(3);
    expect(all[2].x).toBe(4);
  });

  it('returns chronological order after wrap-around', () => {
    const buf = new MouseRingBuffer(3);
    for (let i = 1; i <= 7; i++) {
      buf.push({ x: i, y: i, timestamp: i * 100 });
    }
    const all = buf.getAll();
    expect(all.map((p) => p.x)).toEqual([5, 6, 7]);
  });
});

describe('arePointsCollinear', () => {
  it('returns false for fewer than 3 points', () => {
    expect(arePointsCollinear([
      { x: 0, y: 0, timestamp: 0 },
      { x: 1, y: 1, timestamp: 100 },
    ])).toBe(false);
  });

  it('returns true for perfectly straight horizontal line', () => {
    const points = Array.from({ length: 5 }, (_, i) => ({
      x: i * 10,
      y: 100,
      timestamp: i * 100,
    }));
    expect(arePointsCollinear(points)).toBe(true);
  });

  it('returns true for diagonal line within tolerance', () => {
    const points = [
      { x: 0, y: 0, timestamp: 0 },
      { x: 10, y: 10, timestamp: 100 },
      { x: 20, y: 20, timestamp: 200 },
    ];
    expect(arePointsCollinear(points)).toBe(true);
  });

  it('returns false for a curved human-like path', () => {
    const points = [
      { x: 100, y: 100, timestamp: 0 },
      { x: 150, y: 130, timestamp: 100 },
      { x: 200, y: 110, timestamp: 200 },
      { x: 250, y: 150, timestamp: 300 },
      { x: 300, y: 120, timestamp: 400 },
    ];
    expect(arePointsCollinear(points)).toBe(false);
  });
});

describe('isSuperhumanSpeed', () => {
  it('returns false for fewer than 2 points', () => {
    expect(isSuperhumanSpeed([{ x: 0, y: 0, timestamp: 0 }])).toBe(false);
  });

  it('returns true when all movement happens in under 50ms', () => {
    const points = [
      { x: 0, y: 0, timestamp: 1000 },
      { x: 100, y: 100, timestamp: 1010 },
      { x: 200, y: 200, timestamp: 1020 },
      { x: 300, y: 300, timestamp: 1030 },
    ];
    expect(isSuperhumanSpeed(points)).toBe(true);
  });

  it('returns false when movements span normal human time', () => {
    const points = [
      { x: 0, y: 0, timestamp: 0 },
      { x: 100, y: 100, timestamp: 100 },
      { x: 200, y: 200, timestamp: 200 },
    ];
    expect(isSuperhumanSpeed(points)).toBe(false);
  });
});

describe('useBotDetection – mouse quality analysis', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockBotDetected = false;
    matchMediaResult = true;
    perfNowValue = 0;

    vi.spyOn(performance, 'now').mockImplementation(() => perfNowValue);

    Object.defineProperty(navigator, 'webdriver', {
      value: false,
      configurable: true,
      writable: true,
    });

    Object.defineProperty(navigator, 'languages', {
      value: ['en-US', 'en'],
      configurable: true,
      writable: true,
    });

    Object.defineProperty(navigator, 'plugins', {
      value: [{ name: 'Chrome PDF Plugin' }],
      configurable: true,
      writable: true,
    });

    globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(pointer: fine)' ? matchMediaResult : false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      onchange: null,
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('awards full 15 points for curved human-like mouse movements', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    act(() => { dispatchHumanMouseMoves(3); });

    act(() => { vi.advanceTimersByTime(500); });

    expect(result.current.signals.mouseMoved).toBe(true);
    // 30 (static) + 15 (mouse) = 45
    expect(result.current.score).toBe(45);
  });

  it('awards only 7 points for straight-line robotic movement (full buffer)', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // Dispatch exactly 10 collinear moves to fill the ring buffer
    act(() => { dispatchStraightMouseMoves(10); });

    act(() => { vi.advanceTimersByTime(500); });

    expect(result.current.signals.mouseMoved).toBe(true);
    // 30 (static) + 7 (halved mouse) = 37
    expect(result.current.score).toBe(37);
  });

  it('awards 0 points for superhuman-speed mouse movements', () => {
    // performance.now() returns the same value (0) in fake timers by default,
    // so all positions have timestamp 0 → total span = 0 < 50ms
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // Dispatch moves that will all have the same timestamp (superhuman speed)
    act(() => {
      for (let i = 0; i < 3; i++) {
        window.dispatchEvent(mouseMove(100 + i * 50, 200 + i * 30));
      }
    });

    act(() => { vi.advanceTimersByTime(500); });

    expect(result.current.signals.mouseMoved).toBe(true);
    // 30 (static) + 0 (superhuman speed) = 30
    expect(result.current.score).toBe(30);
  });
});

// ─── Story 3.3: Navigator & Environment Fingerprinting ──────────────

describe('evaluateEnvironment & computeEnvironmentWeight', () => {
  it('returns full weight (10) when all environment checks pass', () => {
    const env: EnvironmentResult = {
      webdriverClean: true,
      noPhantom: true,
      hasLanguages: true,
      hasPlugins: true,
    };
    expect(computeEnvironmentWeight(env)).toBe(10);
  });

  it('returns 0 when webdriver is detected (hard fail)', () => {
    const env: EnvironmentResult = {
      webdriverClean: false,
      noPhantom: true,
      hasLanguages: true,
      hasPlugins: true,
    };
    expect(computeEnvironmentWeight(env)).toBe(0);
  });

  it('returns partial weight when phantom is detected', () => {
    const env: EnvironmentResult = {
      webdriverClean: true,
      noPhantom: false,
      hasLanguages: true,
      hasPlugins: true,
    };
    // 4 equal shares of 10: webdriver(2.5) + phantom(0) + languages(2.5) + plugins(2.5) = 7.5 → 8
    expect(computeEnvironmentWeight(env)).toBe(8);
  });

  it('returns partial weight when languages are empty', () => {
    const env: EnvironmentResult = {
      webdriverClean: true,
      noPhantom: true,
      hasLanguages: false,
      hasPlugins: true,
    };
    expect(computeEnvironmentWeight(env)).toBe(8);
  });

  it('redistributes weight when plugins check is inapplicable (mobile)', () => {
    const env: EnvironmentResult = {
      webdriverClean: true,
      noPhantom: true,
      hasLanguages: true,
      hasPlugins: null, // mobile — inapplicable
    };
    // 3 equal shares of 10: webdriver(3.33) + phantom(3.33) + languages(3.33) = 10 → 10
    expect(computeEnvironmentWeight(env)).toBe(10);
  });

  it('returns 0 for webdriver even when plugins is inapplicable', () => {
    const env: EnvironmentResult = {
      webdriverClean: false,
      noPhantom: true,
      hasLanguages: true,
      hasPlugins: null,
    };
    expect(computeEnvironmentWeight(env)).toBe(0);
  });
});

describe('useBotDetection – environment fingerprinting', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockBotDetected = false;
    matchMediaResult = true;
    perfNowValue = 0;

    vi.spyOn(performance, 'now').mockImplementation(() => perfNowValue);

    Object.defineProperty(navigator, 'webdriver', {
      value: false,
      configurable: true,
      writable: true,
    });

    Object.defineProperty(navigator, 'languages', {
      value: ['en-US', 'en'],
      configurable: true,
      writable: true,
    });

    Object.defineProperty(navigator, 'plugins', {
      value: [{ name: 'Chrome PDF Plugin' }],
      configurable: true,
      writable: true,
    });

    globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(pointer: fine)' ? matchMediaResult : false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      onchange: null,
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('detects PhantomJS globals and reduces score', () => {
    // Simulate PhantomJS by adding window._phantom
    (window as Record<string, unknown>)._phantom = true;

    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // noWebDriver signal marked true (partial credit) but weight reduced
    // pointerFine(10) + env(8) + honeypot(10) = 28
    expect(result.current.signals.noWebDriver).toBe(true);
    expect(result.current.score).toBe(28);

    // Clean up
    delete (window as Record<string, unknown>)._phantom;
  });

  it('detects empty navigator.languages and reduces score', () => {
    Object.defineProperty(navigator, 'languages', {
      value: [],
      configurable: true,
      writable: true,
    });

    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // pointerFine(10) + env(8) + honeypot(10) = 28
    expect(result.current.score).toBe(28);
  });

  it('detects zero plugins on desktop and reduces score', () => {
    Object.defineProperty(navigator, 'plugins', {
      value: [],
      configurable: true,
      writable: true,
    });

    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // pointerFine(10) + env(8) + honeypot(10) = 28
    expect(result.current.score).toBe(28);
  });

  it('skips plugins check on touch-only device and redistributes weight', () => {
    matchMediaResult = false; // pointer:fine is false
    // Mock pointer:coarse as true for mobile detection
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(pointer: coarse)',
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      onchange: null,
      dispatchEvent: vi.fn(),
    }));

    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // pointerFine(0) + env(10, plugins skipped & redistributed) + honeypot(10) = 20
    expect(result.current.signals.pointerFine).toBe(false);
    expect(result.current.signals.noWebDriver).toBe(true);
    expect(result.current.score).toBe(20);
  });
});

// ────────────────────────────────────────────────────────────────────────────
// Story 3.4 – analyseCadence (unit)
// ────────────────────────────────────────────────────────────────────────────
describe('analyseCadence', () => {
  it('returns 1 (full credit) for fewer than 3 timestamps', () => {
    expect(analyseCadence([])).toBe(1);
    expect(analyseCadence([100])).toBe(1);
    expect(analyseCadence([100, 200])).toBe(1);
  });

  it('returns 1 for natural varied cadence (50–2000ms gaps)', () => {
    // Timestamps: 0, 150, 600, 1800, 2100
    expect(analyseCadence([0, 150, 600, 1800, 2100])).toBe(1);
  });

  it('returns 0.5 for robotic cadence (all gaps < 100ms, low stddev)', () => {
    // Perfectly uniform 50ms gaps
    expect(analyseCadence([0, 50, 100, 150, 200])).toBe(0.5);
  });

  it('returns 1 when gaps are fast but stddev is high', () => {
    // Gaps: 10, 90, 10, 90, 10 → mean 42, stddev ~38 > 20
    expect(analyseCadence([0, 10, 99, 10, 99, 10])).toBe(1);
  });
});

// ────────────────────────────────────────────────────────────────────────────
// Story 3.4 – Timing & Interaction Cadence (integration)
// ────────────────────────────────────────────────────────────────────────────
describe('useBotDetection – timing & cadence analysis', () => {
  let ioCallback: (entries: Partial<IntersectionObserverEntry>[]) => void;
  let perfNowValue: number;
  let matchMediaResult: boolean;

  function triggerIntersection(isIntersecting: boolean) {
    ioCallback([{ isIntersecting }]);
  }

  function createContainerRef() {
    const el = document.createElement('div');
    return { current: el };
  }

  beforeEach(() => {
    vi.useFakeTimers();
    perfNowValue = 0;
    matchMediaResult = true;
    vi.spyOn(performance, 'now').mockImplementation(() => perfNowValue);

    Object.defineProperty(navigator, 'webdriver', {
      value: false, configurable: true, writable: true,
    });
    Object.defineProperty(navigator, 'languages', {
      value: ['en-US', 'en'], configurable: true, writable: true,
    });
    Object.defineProperty(navigator, 'plugins', {
      value: [{ name: 'Chrome PDF Plugin' }], configurable: true, writable: true,
    });

    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(pointer: fine)' ? matchMediaResult : false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      onchange: null,
      dispatchEvent: vi.fn(),
    }));

    window.IntersectionObserver = vi.fn().mockImplementation(
      function (this: unknown, cb: IntersectionObserverCallback) {
        ioCallback = cb as unknown as typeof ioCallback;
        return { observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() };
      },
    ) as unknown as typeof IntersectionObserver;

    _resetBotFlag();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('assigns scrollWeight = 0 when scroll happens < 500ms after viewport entry', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // Scroll immediately at t=100 (< 500ms after viewport entry at t=0)
    perfNowValue = 100;
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    act(() => { vi.advanceTimersByTime(500); });

    // Scroll signal recorded but gets 0 weight
    expect(result.current.signals.scrollDetected).toBe(true);
    // Static: pointerFine(10) + env(10) + honeypot(10) = 30, scroll = 0
    expect(result.current.score).toBe(30);
  });

  it('assigns full scrollWeight when scroll happens >= 500ms after viewport entry', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // Scroll at t=600ms (>= 500ms)
    perfNowValue = 600;
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    act(() => { vi.advanceTimersByTime(500); });

    expect(result.current.signals.scrollDetected).toBe(true);
    // Static 30 + scroll 15 = 45
    expect(result.current.score).toBe(45);
  });

  it('halves interaction weights when events fire with robotic cadence', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // Fire events in tight robotic cadence (all gaps < 100ms, uniform)
    perfNowValue = 600; // past suspicious-scroll window
    act(() => {
      // 3 mouse moves 10ms apart (robotic)
      for (let i = 0; i < 3; i++) {
        perfNowValue += 10;
        window.dispatchEvent(new MouseEvent('mousemove', {
          clientX: 100 + i * 20,
          clientY: 100 + i * 15 + (i % 2 === 0 ? 5 : -5),
        }));
      }
      perfNowValue += 10;
      window.dispatchEvent(new Event('scroll'));
      perfNowValue += 10;
      window.dispatchEvent(new Event('keydown'));
    });

    act(() => { vi.advanceTimersByTime(500); });

    // Cadence multiplier should be 0.5 → halves interaction weights
    // Static: pointerFine(10) + env(10) + honeypot(10) = 30
    // Mouse: round(15 * 0.5) = 8 (but with only 3 moves, quality check may give 7 or 15)
    // Scroll: round(15 * 0.5) = 8
    // Keyboard: round(10 * 0.5) = 5
    // With robotic cadence, total should be < 70 (not isHuman)
    expect(result.current.isHuman).toBe(false);
    // Verify interaction signals are all there
    expect(result.current.signals.scrollDetected).toBe(true);
    expect(result.current.signals.keyboardActivity).toBe(true);
  });

  it('allows full score with natural cadence timing', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // Natural timing: varied gaps well above 100ms
    perfNowValue = 600;
    act(() => {
      // Mouse moves with natural timing (100ms+ apart)
      for (let i = 0; i < 3; i++) {
        perfNowValue += 200; // 200ms between moves
        window.dispatchEvent(new MouseEvent('mousemove', {
          clientX: 100 + i * 30,
          clientY: 100 + i * 20 + (i % 2 === 0 ? 10 : -10),
        }));
      }
      perfNowValue += 500; // 500ms pause
      window.dispatchEvent(new Event('scroll'));
      perfNowValue += 800; // 800ms pause
      window.dispatchEvent(new Event('keydown'));
    });

    act(() => { vi.advanceTimersByTime(500); });

    // Natural cadence → multiplier = 1
    // Static 30 + mouse(15) + scroll(15) + keyboard(10) = 70
    expect(result.current.score).toBe(70);
    expect(result.current.isHuman).toBe(true);
  });
});

// ────────────────────────────────────────────────────────────────────────────
// Story 3.5 – Rate Limiting Reveal Attempts
// ────────────────────────────────────────────────────────────────────────────
describe('useBotDetection – rate limiting', () => {
  let ioCallback: (entries: Partial<IntersectionObserverEntry>[]) => void;
  let perfNowValue: number;

  function triggerIntersection(isIntersecting: boolean) {
    ioCallback([{ isIntersecting }]);
  }

  function createContainerRef() {
    const el = document.createElement('div');
    return { current: el };
  }

  beforeEach(() => {
    vi.useFakeTimers();
    perfNowValue = 0;
    vi.spyOn(performance, 'now').mockImplementation(() => perfNowValue);

    Object.defineProperty(navigator, 'webdriver', {
      value: false, configurable: true, writable: true,
    });
    Object.defineProperty(navigator, 'languages', {
      value: ['en-US', 'en'], configurable: true, writable: true,
    });
    Object.defineProperty(navigator, 'plugins', {
      value: [{ name: 'Chrome PDF Plugin' }], configurable: true, writable: true,
    });

    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(pointer: fine)',
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      onchange: null,
      dispatchEvent: vi.fn(),
    }));

    window.IntersectionObserver = vi.fn().mockImplementation(
      function (this: unknown, cb: IntersectionObserverCallback) {
        ioCallback = cb as unknown as typeof ioCallback;
        return { observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() };
      },
    ) as unknown as typeof IntersectionObserver;

    _resetBotFlag();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('exposes rateLimited, cooldownRemaining, and recordFailedAttempt', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    expect(result.current.rateLimited).toBe(false);
    expect(result.current.cooldownRemaining).toBe(0);
    expect(typeof result.current.recordFailedAttempt).toBe('function');
  });

  it('does not rate-limit before 5 failed attempts', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // Record 4 failed attempts — should not trigger cooldown
    for (let i = 0; i < 4; i++) {
      act(() => { result.current.recordFailedAttempt(); });
    }

    expect(result.current.rateLimited).toBe(false);
    expect(result.current.cooldownRemaining).toBe(0);
  });

  it('triggers rate limiting after 5 failed attempts', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // Record 5 failed attempts
    for (let i = 0; i < 5; i++) {
      act(() => { result.current.recordFailedAttempt(); });
    }

    expect(result.current.rateLimited).toBe(true);
    expect(result.current.cooldownRemaining).toBe(60);
  });

  it('counts down cooldown seconds', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    for (let i = 0; i < 5; i++) {
      act(() => { result.current.recordFailedAttempt(); });
    }

    expect(result.current.cooldownRemaining).toBe(60);

    // Advance 15 seconds
    perfNowValue += 15000;
    act(() => { vi.advanceTimersByTime(15000); });

    expect(result.current.cooldownRemaining).toBe(45);
    expect(result.current.rateLimited).toBe(true);
  });

  it('resets after cooldown expires', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    for (let i = 0; i < 5; i++) {
      act(() => { result.current.recordFailedAttempt(); });
    }

    expect(result.current.rateLimited).toBe(true);

    // Advance past cooldown
    perfNowValue += 61000;
    act(() => { vi.advanceTimersByTime(61000); });

    expect(result.current.rateLimited).toBe(false);
    expect(result.current.cooldownRemaining).toBe(0);
  });

  it('allows 5 more attempts after cooldown reset', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    // First round of failures
    for (let i = 0; i < 5; i++) {
      act(() => { result.current.recordFailedAttempt(); });
    }
    expect(result.current.rateLimited).toBe(true);

    // Wait out cooldown
    perfNowValue += 61000;
    act(() => { vi.advanceTimersByTime(61000); });
    expect(result.current.rateLimited).toBe(false);

    // 4 more failures — still not limited
    for (let i = 0; i < 4; i++) {
      act(() => { result.current.recordFailedAttempt(); });
    }
    expect(result.current.rateLimited).toBe(false);

    // 5th triggers new cooldown
    act(() => { result.current.recordFailedAttempt(); });
    expect(result.current.rateLimited).toBe(true);
    expect(result.current.cooldownRemaining).toBe(60);
  });

  it('ignores additional attempts during cooldown', () => {
    const ref = createContainerRef();
    const { result } = renderHook(() => useBotDetection(ref));

    act(() => { triggerIntersection(true); });

    for (let i = 0; i < 5; i++) {
      act(() => { result.current.recordFailedAttempt(); });
    }
    expect(result.current.rateLimited).toBe(true);

    // Try recording more failures during cooldown — should be ignored
    perfNowValue += 5000;
    act(() => { vi.advanceTimersByTime(5000); });

    act(() => { result.current.recordFailedAttempt(); });
    act(() => { result.current.recordFailedAttempt(); });
    act(() => { result.current.recordFailedAttempt(); });

    // Still same cooldown, counter not further incremented
    expect(result.current.rateLimited).toBe(true);
    expect(result.current.cooldownRemaining).toBe(55);
  });
});

// Story 5.2 – Signal Snapshot
describe('useBotDetection – signal snapshot', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockBotDetected = false;
    vi.spyOn(performance, 'now').mockReturnValue(1000);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('exposes getSignalSnapshot that returns a snapshot object', () => {
    const containerRef = createContainerRef();
    const { result } = renderHook(() => useBotDetection(containerRef));
    const snapshot = result.current.getSignalSnapshot();
    expect(snapshot).toBeDefined();
    expect(snapshot).toHaveProperty('score');
    expect(snapshot).toHaveProperty('signals');
    expect(snapshot).toHaveProperty('timing');
  });

  it('snapshot contains no user-identifying data', () => {
    const containerRef = createContainerRef();
    const { result } = renderHook(() => useBotDetection(containerRef));
    const snapshot = result.current.getSignalSnapshot();
    const json = JSON.stringify(snapshot);
    // No IP, fingerprint, cookie, email, or user ID
    expect(json).not.toMatch(/ip|fingerprint|cookie|email|userId/i);
  });

  it('caps snapshots at 50 per session', () => {
    const containerRef = createContainerRef();
    const { result } = renderHook(() => useBotDetection(containerRef));
    // Take 50 snapshots
    for (let i = 0; i < 50; i++) {
      expect(result.current.getSignalSnapshot()).not.toBeNull();
    }
    // 51st should be null
    expect(result.current.getSignalSnapshot()).toBeNull();
  });
});
