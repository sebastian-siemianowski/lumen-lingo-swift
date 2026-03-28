import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { ContactSection } from '../contact-section';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/contact',
}));

// Mock framer-motion
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual<typeof import('framer-motion')>('framer-motion');
  return {
    ...actual,
    useMotionValue: () => ({
      set: vi.fn(),
      get: () => 0,
      on: vi.fn(() => vi.fn()),
    }),
    useTransform: () => '0%',
    animate: vi.fn((_mv, _to, opts) => {
      if (opts?.onUpdate) opts.onUpdate(0);
      return { stop: vi.fn() };
    }),
  };
});

// Mock email assembler
vi.mock('@/lib/email-assembler', () => ({
  assembleEmail: () => 'support@lumenlingo.com',
}));

// Mock email honeypot
vi.mock('../email-honeypot', () => ({
  EmailHoneypot: () => null,
  isBotDetected: () => false,
}));

// Mock bot detection — always human for integration tests
vi.mock('@/hooks/use-bot-detection', () => ({
  useBotDetection: () => ({
    score: 100,
    signals: {
      mouseMoved: true,
      scrollDetected: true,
      timeOnPage: true,
      touchInteraction: true,
      keyboardActivity: true,
      pointerFine: true,
      noWebDriver: true,
      honeypotClean: true,
    },
    isHuman: true,
    rateLimited: false,
    cooldownRemaining: 0,
    recordFailedAttempt: vi.fn(),
    getSignalSnapshot: vi.fn(() => ({ score: 80, signals: {}, environment: null, timing: { dwellMs: 5000, cadenceStdDev: null } })),
  }),
}));

// Mock clipboard
const writeTextMock = vi.fn().mockResolvedValue(undefined);

describe('ContactSection — Copy & Send buttons', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(performance, 'now').mockReturnValue(0);
    Object.assign(navigator, {
      clipboard: { writeText: writeTextMock },
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    writeTextMock.mockClear();
  });

  function revealEmail() {
    const button = screen.getByRole('button', {
      name: /press and hold to reveal/i,
    });

    // Start hold
    (performance.now as ReturnType<typeof vi.fn>).mockReturnValue(0);
    fireEvent.pointerDown(button, { pointerId: 1 });

    // Advance past hold duration (1500ms)
    (performance.now as ReturnType<typeof vi.fn>).mockReturnValue(1600);
    act(() => {
      vi.advanceTimersByTime(20);
    });
  }

  it('shows Copy and Send Email buttons after reveal', () => {
    render(<ContactSection />);
    revealEmail();
    expect(screen.getByLabelText('Copy email address')).toBeTruthy();
    expect(screen.getByLabelText('Send email')).toBeTruthy();
  });

  it('copies email to clipboard on Copy button click', () => {
    render(<ContactSection />);
    revealEmail();
    fireEvent.click(screen.getByLabelText('Copy email address'));
    expect(writeTextMock).toHaveBeenCalledWith('support@lumenlingo.com');
  });

  it('shows "Copied!" state after copying', async () => {
    render(<ContactSection />);
    revealEmail();
    fireEvent.click(screen.getByLabelText('Copy email address'));
    // clipboard.writeText is async — flush the microtask
    await act(async () => {
      await Promise.resolve();
    });
    expect(screen.getByText('Copied!')).toBeTruthy();
  });

  it('shows "Opening…" state when Send Email is clicked', () => {
    render(<ContactSection />);
    revealEmail();
    fireEvent.click(screen.getByLabelText('Send email'));
    expect(screen.getByText('Opening…')).toBeTruthy();
  });

  it('shows countdown timer after reveal', () => {
    render(<ContactSection />);
    revealEmail();
    const timer = screen.getByRole('timer');
    expect(timer).toBeTruthy();
  });
});

// ── Story 4.2 — Screen Reader Announcements ──────────────────────────
describe('ContactSection — Screen Reader Announcements', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(performance, 'now').mockReturnValue(0);
    Object.assign(navigator, {
      clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  function getAnnouncementRegion() {
    return document.querySelector('[aria-live="assertive"]');
  }

  function revealEmail() {
    const button = screen.getByRole('button', {
      name: /press and hold to reveal/i,
    });
    (performance.now as ReturnType<typeof vi.fn>).mockReturnValue(0);
    fireEvent.pointerDown(button, { pointerId: 1 });
    (performance.now as ReturnType<typeof vi.fn>).mockReturnValue(1600);
    act(() => {
      vi.advanceTimersByTime(20);
    });
  }

  it('has a visually-hidden aria-live assertive region', () => {
    render(<ContactSection />);
    const region = getAnnouncementRegion();
    expect(region).toBeTruthy();
    expect(region?.classList.contains('sr-only')).toBe(true);
  });

  it('announces "Revealing…" when hold starts', () => {
    render(<ContactSection />);
    const button = screen.getByRole('button', {
      name: /press and hold to reveal/i,
    });
    fireEvent.pointerDown(button, { pointerId: 1 });
    expect(getAnnouncementRegion()?.textContent).toBe('Revealing…');
  });

  it('announces email revealed with address after successful reveal', () => {
    render(<ContactSection />);
    revealEmail();
    expect(getAnnouncementRegion()?.textContent).toBe(
      'Email address revealed: support@lumenlingo.com. Visible for 30 seconds.',
    );
  });

  it('announces email hidden when timer expires', () => {
    render(<ContactSection />);
    revealEmail();
    // Timer started at perf.now()=1600 (set during reveal). Need 1600+30001 to expire.
    (performance.now as ReturnType<typeof vi.fn>).mockReturnValue(32_000);
    act(() => {
      vi.advanceTimersByTime(31_000);
    });
    expect(getAnnouncementRegion()?.textContent).toBe(
      'Email hidden. Press the button to reveal again.',
    );
  });

  it('announces copy success on clipboard write', async () => {
    render(<ContactSection />);
    revealEmail();
    fireEvent.click(screen.getByLabelText('Copy email address'));
    await act(async () => {
      await Promise.resolve();
    });
    expect(getAnnouncementRegion()?.textContent).toBe(
      'Email address copied to clipboard.',
    );
  });
});
