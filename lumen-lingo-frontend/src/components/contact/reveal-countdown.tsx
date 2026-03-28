'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/lib/motion';

// ─── Constants ─────────────────────────────────────────────────────
const RING_SIZE = 28;
const RING_RADIUS = 10;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const TOTAL_DURATION_MS = 30_000;

interface RevealCountdownProps {
  /** Milliseconds remaining (from useEmailRevealTimer) */
  timeRemaining: number;
  /** Additional class names */
  className?: string;
}

export function RevealCountdown({ timeRemaining, className }: RevealCountdownProps) {
  const reducedMotion = useReducedMotion();
  const seconds = Math.ceil(timeRemaining / 1000);
  const fraction = timeRemaining / TOTAL_DURATION_MS;
  const offset = RING_CIRCUMFERENCE * (1 - fraction);

  // Colour thresholds
  const isUrgent = seconds <= 5;
  const isWarning = seconds <= 10;

  // Throttle aria-label to 10s intervals to avoid screen reader spam (Story 4.2 AC7)
  const ariaSeconds = seconds <= 10 ? seconds : Math.ceil(seconds / 10) * 10;
  const ariaLabel = `Email visible for ${ariaSeconds} seconds`;

  const ringColor = isUrgent
    ? 'var(--color-amber)'
    : isWarning
      ? 'var(--color-amber)'
      : 'var(--color-cyan)';

  // Reduced motion → text-only countdown
  if (reducedMotion) {
    return (
      <span
        className={cn(
          'text-xs tabular-nums',
          isUrgent ? 'text-amber-400' : 'text-white/40',
          className,
        )}
        role="timer"
        aria-live="polite"
        aria-label={ariaLabel}
      >
        Visible for {seconds}s
      </span>
    );
  }

  return (
    <div
      className={cn('inline-flex items-center gap-1.5', className)}
      role="timer"
      aria-live="polite"
      aria-label={ariaLabel}
    >
      {/* Circular SVG ring */}
      <motion.div
        animate={
          isUrgent
            ? { scale: [1, 1.08, 1] }
            : { scale: 1 }
        }
        transition={
          isUrgent
            ? { duration: 1, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.2 }
        }
        className="flex-shrink-0"
      >
        <svg
          width={RING_SIZE}
          height={RING_SIZE}
          viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
          className="-rotate-90"
          aria-hidden
        >
          {/* Background track */}
          <circle
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RING_RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white/[0.06]"
          />
          {/* Progress arc */}
          <circle
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RING_RADIUS}
            fill="none"
            stroke={ringColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={offset}
            style={{
              transition: 'stroke-dashoffset 100ms linear, stroke 300ms ease',
            }}
          />
        </svg>
      </motion.div>

      {/* Text label */}
      <span
        className={cn(
          'text-xs tabular-nums transition-colors duration-300',
          isUrgent ? 'text-amber-400' : isWarning ? 'text-amber-400/70' : 'text-white/25',
        )}
      >
        {seconds}s
      </span>
    </div>
  );
}
