import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useEmailRevealTimer } from '@/hooks/use-email-reveal-timer';

// Mock performance.now with controllable time
let mockNow = 0;
const originalPerformanceNow = performance.now;
const originalRAF = globalThis.requestAnimationFrame;
const originalCAF = globalThis.cancelAnimationFrame;

describe('useEmailRevealTimer', () => {
  let rafCallbacks: Map<number, FrameRequestCallback>;
  let rafId: number;

  beforeEach(() => {
    mockNow = 0;
    rafId = 0;
    rafCallbacks = new Map();

    vi.spyOn(performance, 'now').mockImplementation(() => mockNow);

    globalThis.requestAnimationFrame = vi.fn((cb: FrameRequestCallback) => {
      const id = ++rafId;
      rafCallbacks.set(id, cb);
      return id;
    }) as unknown as typeof requestAnimationFrame;

    globalThis.cancelAnimationFrame = vi.fn((id: number) => {
      rafCallbacks.delete(id);
    }) as unknown as typeof cancelAnimationFrame;
  });

  afterEach(() => {
    performance.now = originalPerformanceNow;
    globalThis.requestAnimationFrame = originalRAF;
    globalThis.cancelAnimationFrame = originalCAF;
    vi.restoreAllMocks();
  });

  function flushRAF() {
    // Process all pending RAF callbacks
    const callbacks = Array.from(rafCallbacks.entries());
    rafCallbacks.clear();
    for (const [, cb] of callbacks) {
      cb(mockNow);
    }
  }

  it('starts in unrevealed state', () => {
    const { result } = renderHook(() => useEmailRevealTimer(30_000));
    expect(result.current.isRevealed).toBe(false);
    expect(result.current.timeRemaining).toBe(0);
    expect(result.current.hasExpired).toBe(false);
  });

  it('transitions to revealed on reveal()', () => {
    const { result } = renderHook(() => useEmailRevealTimer(30_000));

    act(() => {
      result.current.reveal();
    });

    expect(result.current.isRevealed).toBe(true);
    expect(result.current.timeRemaining).toBe(30_000);
  });

  it('counts down over time', () => {
    const { result } = renderHook(() => useEmailRevealTimer(30_000));

    act(() => {
      result.current.reveal();
    });

    // Simulate 10s passing
    mockNow = 10_000;
    act(() => flushRAF());

    expect(result.current.isRevealed).toBe(true);
    expect(result.current.timeRemaining).toBeLessThanOrEqual(20_000);
    expect(result.current.timeRemaining).toBeGreaterThan(0);
  });

  it('expires after duration', () => {
    const { result } = renderHook(() => useEmailRevealTimer(30_000));

    act(() => {
      result.current.reveal();
    });

    // Simulate full duration
    mockNow = 31_000;
    act(() => flushRAF());

    expect(result.current.isRevealed).toBe(false);
    expect(result.current.hasExpired).toBe(true);
    expect(result.current.timeRemaining).toBe(0);
  });

  it('reset() returns to initial state', () => {
    const { result } = renderHook(() => useEmailRevealTimer(30_000));

    act(() => {
      result.current.reveal();
    });
    expect(result.current.isRevealed).toBe(true);

    act(() => {
      result.current.reset();
    });

    expect(result.current.isRevealed).toBe(false);
    expect(result.current.timeRemaining).toBe(0);
    expect(result.current.hasExpired).toBe(false);
  });

  it('can re-reveal after expiry', () => {
    const { result } = renderHook(() => useEmailRevealTimer(5_000));

    // Reveal and expire
    act(() => {
      result.current.reveal();
    });
    mockNow = 6_000;
    act(() => flushRAF());
    expect(result.current.hasExpired).toBe(true);

    // Re-reveal
    mockNow = 7_000;
    act(() => {
      result.current.reveal();
    });
    expect(result.current.isRevealed).toBe(true);
    expect(result.current.hasExpired).toBe(false);
  });

  it('cleans up RAF on unmount', () => {
    const { result, unmount } = renderHook(() => useEmailRevealTimer(30_000));

    act(() => {
      result.current.reveal();
    });

    unmount();
    expect(globalThis.cancelAnimationFrame).toHaveBeenCalled();
  });
});
