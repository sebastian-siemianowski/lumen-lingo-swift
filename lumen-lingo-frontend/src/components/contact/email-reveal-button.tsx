'use client';

import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { spring, useReducedMotion } from '@/lib/motion';
import { trackGateStarted, trackGateAbandoned } from '@/lib/email-analytics';

// ─── Constants ─────────────────────────────────────────────────────
const HOLD_DURATION_MS = 1500;
const MIN_HOLD_MS = 200; // Reject bot-like instant holds
const RING_RADIUS = 22;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const PARTICLE_COUNT = 7;

// ─── Types ─────────────────────────────────────────────────────────
type ButtonState = 'idle' | 'holding' | 'completed';

interface EmailRevealButtonProps {
  /** Called when the hold interaction successfully completes */
  onReveal: () => void;
  /** The revealed email address (for morph transition) */
  email: string | null;
  /** Whether the email is currently revealed */
  isRevealed: boolean;
  /** Whether the email was previously revealed and timed out */
  hasExpired: boolean;
  /** Called when "Show again" is clicked (after expiry) */
  onShowAgain: () => void;
  /** Whether the button is disabled (e.g. bot detection not passed or rate-limited) */
  disabled?: boolean;
  /** Called when a reveal attempt fails (hold too short, pressed while disabled) */
  onFailedAttempt?: () => void;
  /** Called when the hold interaction starts (for screen reader announcements) */
  onHoldStart?: () => void;
  /** Seconds remaining in rate-limit cooldown */
  cooldownRemaining?: number;
  /** Additional class names */
  className?: string;
}

// ─── Particle burst sub-component ──────────────────────────────────
function ParticleBurst({ active }: { active: boolean }) {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const angle = (i / PARTICLE_COUNT) * 2 * Math.PI + (Math.random() - 0.5) * 0.6;
        const distance = 28 + Math.random() * 18;
        return {
          id: i,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          size: 3 + Math.random() * 3,
          delay: Math.random() * 0.06,
        };
      }),
    // Regenerate particles each time active toggles on
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [active],
  );

  return (
    <AnimatePresence>
      {active &&
        particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{
              opacity: 0,
              x: p.x,
              y: p.y,
              scale: 0.2,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.55,
              delay: p.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pointer-events-none absolute rounded-full bg-gradient-to-r from-violet to-cyan"
            style={{
              width: p.size,
              height: p.size,
              left: '50%',
              top: '50%',
              marginLeft: -p.size / 2,
              marginTop: -p.size / 2,
            }}
            aria-hidden
          />
        ))}
    </AnimatePresence>
  );
}

// ─── Radial progress ring ──────────────────────────────────────────
function ProgressRing({ progress }: { progress: number }) {
  const offset = RING_CIRCUMFERENCE * (1 - progress);

  return (
    <svg
      className="pointer-events-none absolute inset-0 -rotate-90"
      viewBox="0 0 48 48"
      aria-hidden
    >
      {/* Track */}
      <circle
        cx="24"
        cy="24"
        r={RING_RADIUS}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-white/[0.06]"
      />
      {/* Progress */}
      <motion.circle
        cx="24"
        cy="24"
        r={RING_RADIUS}
        fill="none"
        stroke="url(#ring-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={RING_CIRCUMFERENCE}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 60ms linear' }}
      />
      <defs>
        <linearGradient id="ring-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-violet)" />
          <stop offset="100%" stopColor="var(--color-cyan)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Main component ────────────────────────────────────────────────
export function EmailRevealButton({
  onReveal,
  email,
  isRevealed,
  hasExpired,
  onShowAgain,
  disabled = false,
  onFailedAttempt,
  onHoldStart,
  cooldownRemaining,
  className,
}: EmailRevealButtonProps) {
  const [state, setState] = useState<ButtonState>('idle');
  const [progress, setProgress] = useState(0);
  const [showBurst, setShowBurst] = useState(false);
  const holdStartRef = useRef<number>(0);
  const rafRef = useRef<number>(0);
  const isHoldingRef = useRef(false);
  const revealedRef = useRef<HTMLDivElement>(null);
  const sourceRef = useRef<'mouse' | 'touch' | 'keyboard'>('mouse');
  const progressMotion = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  // Gradient sweep position driven by progress
  const gradientX = useTransform(progressMotion, [0, 1], ['0%', '120%']);

  // ── Tick loop for hold progress ──────────────────────────────────
  const tickHold = useCallback(() => {
    if (!isHoldingRef.current) return;

    const elapsed = performance.now() - holdStartRef.current;
    const p = Math.min(1, elapsed / HOLD_DURATION_MS);
    setProgress(p);
    progressMotion.set(p);

    if (p >= 1) {
      // Validate timing — reject bot-like instant dispatch
      if (elapsed >= MIN_HOLD_MS) {
        setState('completed');
        isHoldingRef.current = false;
        setShowBurst(true);
        setTimeout(() => setShowBurst(false), 650);
        onReveal();
      } else {
        // Too fast — reset silently
        cancelHold();
      }
      return;
    }

    rafRef.current = requestAnimationFrame(tickHold);
  }, [onReveal, progressMotion]);

  // ── Start hold ───────────────────────────────────────────────────
  const startHold = useCallback(() => {
    if (isRevealed || state === 'completed') return;
    if (disabled) {
      onFailedAttempt?.();
      return;
    }
    holdStartRef.current = performance.now();
    isHoldingRef.current = true;
    setState('holding');
    setProgress(0);
    progressMotion.set(0);
    trackGateStarted(sourceRef.current);
    onHoldStart?.();
    rafRef.current = requestAnimationFrame(tickHold);
  }, [isRevealed, state, tickHold, progressMotion, disabled, onFailedAttempt, onHoldStart]);

  // ── Cancel hold (early release) ──────────────────────────────────
  const cancelHold = useCallback(() => {
    if (!isHoldingRef.current && state !== 'holding') return;
    cancelAnimationFrame(rafRef.current);
    const holdDuration = performance.now() - holdStartRef.current;
    isHoldingRef.current = false;
    setState('idle');
    onFailedAttempt?.(); // Hold was too short — record failed attempt
    trackGateAbandoned(holdDuration, sourceRef.current);
    // Animate progress back to zero with a gentle spring
    animate(progressMotion, 0, { ...spring.gentle, onUpdate: (v) => setProgress(v) });
  }, [state, progressMotion, onFailedAttempt]);

  // ── Pointer events ───────────────────────────────────────────────
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      sourceRef.current = e.pointerType === 'touch' ? 'touch' : 'mouse';
      try {
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
      } catch {
        // jsdom / older browsers may not support setPointerCapture
      }
      startHold();
    },
    [startHold],
  );

  const handlePointerUp = useCallback(() => {
    if (state === 'holding') cancelHold();
  }, [state, cancelHold]);

  const handlePointerCancel = useCallback(() => {
    cancelHold();
  }, [cancelHold]);

  // ── Keyboard events ──────────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.repeat) return; // Ignore auto-repeat
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        sourceRef.current = 'keyboard';
        startHold();
      }
      if (e.key === 'Escape' && state === 'holding') {
        cancelHold();
      }
    },
    [startHold, cancelHold, state],
  );

  const handleKeyUp = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        if (state === 'holding') cancelHold();
      }
    },
    [state, cancelHold],
  );

  // ── Reset when the reveal timer expires ──────────────────────────
  useEffect(() => {
    if (hasExpired) {
      setState('idle');
      setProgress(0);
      progressMotion.set(0);
    }
  }, [hasExpired, progressMotion]);

  // ── Cleanup on unmount ───────────────────────────────────────────
  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── Move focus to revealed email for screen reader users (Story 4.1) ──
  useEffect(() => {
    if (isRevealed && email && revealedRef.current) {
      revealedRef.current.focus();
    }
  }, [isRevealed, email]);

  // ── Render ───────────────────────────────────────────────────────

  // Revealed state — morph into email display
  if (isRevealed && email) {
    return (
      <motion.div
        ref={revealedRef}
        layoutId="email-reveal-pill"
        className={cn(
          'relative inline-flex items-center gap-3 rounded-full min-h-11',
          'border border-violet/20 bg-violet/[0.06] px-5 py-3',
          'outline-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan',
          'contrast-more:border-2 contrast-more:border-white/60',
          className,
        )}
        transition={reducedMotion ? { duration: 0.2 } : spring.smooth}
        tabIndex={-1}
        role="status"
        aria-live="polite"
      >
        <motion.span
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          transition={reducedMotion ? { duration: 0.2 } : { ...spring.bouncy, delay: 0.1 }}
          className="font-mono text-sm text-[--color-foreground] contrast-more:text-white sm:text-[15px]"
        >
          {email}
        </motion.span>
        {!reducedMotion && <ParticleBurst active={showBurst} />}
      </motion.div>
    );
  }

  // Expired — "Show again" state
  if (hasExpired) {
    return (
      <motion.button
        layoutId="email-reveal-pill"
        onClick={onShowAgain}
        className={cn(
          'relative inline-flex items-center gap-2 rounded-full min-h-11',
          'border border-violet/20 bg-violet/[0.06] px-5 py-3',
          'cursor-pointer transition-colors hover:bg-violet/[0.10]',
          'outline-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan',
          'contrast-more:border-2 contrast-more:border-white/60',
          className,
        )}
        whileHover={!reducedMotion ? { scale: 1.02 } : undefined}
        whileTap={!reducedMotion ? { scale: 0.98 } : undefined}
        transition={reducedMotion ? { duration: 0.2 } : spring.snappy}
        aria-label="Show email address again"
      >
        {/* Envelope icon */}
        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-violet" aria-hidden>
          <path
            d="M3.25 5.25L10 10.5l6.75-5.25M3.25 5.25A1.75 1.75 0 015 3.5h10a1.75 1.75 0 011.75 1.75m-13.5 0v9.5A1.75 1.75 0 005 16.5h10a1.75 1.75 0 001.75-1.75v-9.5"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm font-medium text-violet">Show again</span>
      </motion.button>
    );
  }

  // Idle / Holding state — the main CTA
  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        layoutId="email-reveal-pill"
        className={cn(
          'group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full',
          'border border-violet/25 px-6 py-3 min-h-11',
          'touch-action-none select-none',
          'outline-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan',
          'contrast-more:border-2 contrast-more:border-white/60 contrast-more:text-white',
          disabled && 'pointer-events-auto opacity-50 cursor-default',
          !disabled && (state === 'holding' ? 'cursor-grabbing' : 'cursor-grab'),
          className,
        )}
        style={{ touchAction: 'none' }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        whileHover={state === 'idle' && !reducedMotion ? { scale: 1.02 } : undefined}
        transition={reducedMotion ? { duration: 0.2 } : spring.snappy}
        aria-label="Press and hold to reveal contact email address"
        role="button"
        tabIndex={0}
      >
        {/* Breathing ambient glow — pauses during hold for focus */}
        {!reducedMotion && (
          <span
            className={cn(
              'pointer-events-none absolute -inset-1 rounded-full opacity-0',
              state === 'idle' && 'animate-[breathe_3s_ease-in-out_infinite]',
            )}
            style={{
              background: 'linear-gradient(135deg, var(--color-violet), var(--color-cyan))',
              filter: 'blur(12px)',
            }}
            aria-hidden
          />
        )}

        {/* Gradient sweep fill background */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet/15 via-violet/10 to-cyan/10"
          style={{ clipPath: `inset(0 ${100 - progress * 100}% 0 0)` }}
          aria-hidden
        />

        {/* Micro-vibration animation during hold */}
        <motion.div
          className="relative flex items-center gap-2.5"
          animate={
            state === 'holding' && !reducedMotion
              ? {
                  x: [0, 0.4, -0.4, 0.3, -0.3, 0],
                  y: [0, -0.3, 0.3, -0.2, 0.2, 0],
                }
              : { x: 0, y: 0 }
          }
          transition={
            state === 'holding'
              ? { duration: 0.35, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.15 }
          }
        >
          {/* Ring container + envelope icon */}
          <div className="relative h-5 w-5 flex-shrink-0">
            {state === 'holding' && (
              reducedMotion
                ? <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold tabular-nums text-violet" aria-hidden>{Math.round(progress * 100)}%</span>
                : <ProgressRing progress={progress} />
            )}
            {/* Envelope icon with breathing wobble */}
            <motion.svg
              viewBox="0 0 20 20"
              fill="none"
              className={cn(
                'h-5 w-5 transition-colors duration-200',
                state === 'holding' ? 'text-violet' : 'text-white/50 group-hover:text-violet/70',
              )}
              animate={
                state === 'idle' && !reducedMotion
                  ? { rotate: [0, 2, 0, -2, 0] }
                  : { rotate: 0 }
              }
              transition={
                state === 'idle' && !reducedMotion
                  ? { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                  : { duration: 0.2 }
              }
              aria-hidden
            >
              <path
                d="M3.25 5.25L10 10.5l6.75-5.25M3.25 5.25A1.75 1.75 0 015 3.5h10a1.75 1.75 0 011.75 1.75m-13.5 0v9.5A1.75 1.75 0 005 16.5h10a1.75 1.75 0 001.75-1.75v-9.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>

          <span
            className={cn(
              'text-sm font-medium transition-colors duration-200',
              state === 'holding' ? 'text-white' : 'text-white/60 group-hover:text-white/80',
            )}
          >
            {cooldownRemaining != null && cooldownRemaining > 0
              ? `Try again in ${cooldownRemaining}s`
              : disabled
                ? 'Almost ready…'
                : state === 'holding'
                  ? 'Keep holding…'
                  : 'Hold to reveal email'}
          </span>
        </motion.div>

        {/* Particle burst origin */}
        {!reducedMotion && <ParticleBurst active={showBurst} />}
      </motion.button>
    </motion.div>
  );
}
