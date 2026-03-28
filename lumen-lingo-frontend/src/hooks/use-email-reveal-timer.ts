'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useEmailRevealTimer — Manages a countdown after email reveal.
 *
 * After the email is revealed, counts down from `durationMs` (default 30s).
 * When the timer expires, sets `isRevealed` to false so the email can
 * be unmounted from the DOM (not just hidden).
 */

interface UseEmailRevealTimerReturn {
  /** Whether the email is currently visible */
  isRevealed: boolean;
  /** Milliseconds remaining before auto-hide (0 when not revealed) */
  timeRemaining: number;
  /** Trigger the reveal — starts the countdown */
  reveal: () => void;
  /** Reset the timer (used for "Show again") */
  reset: () => void;
  /** Whether the email was previously revealed and timed out */
  hasExpired: boolean;
}

export function useEmailRevealTimer(
  durationMs = 30_000,
): UseEmailRevealTimerReturn {
  const [isRevealed, setIsRevealed] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [hasExpired, setHasExpired] = useState(false);
  const startTimeRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  const tick = useCallback(() => {
    const elapsed = performance.now() - startTimeRef.current;
    const remaining = Math.max(0, durationMs - elapsed);
    setTimeRemaining(remaining);

    if (remaining <= 0) {
      setIsRevealed(false);
      setHasExpired(true);
      return;
    }

    rafRef.current = requestAnimationFrame(tick);
  }, [durationMs]);

  const reveal = useCallback(() => {
    startTimeRef.current = performance.now();
    setIsRevealed(true);
    setHasExpired(false);
    setTimeRemaining(durationMs);
    rafRef.current = requestAnimationFrame(tick);
  }, [durationMs, tick]);

  const reset = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setIsRevealed(false);
    setTimeRemaining(0);
    setHasExpired(false);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return { isRevealed, timeRemaining, reveal, reset, hasExpired };
}
