'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { type EmailKey, getProtectedEmail } from '@/lib/email-registry';
import { isLikelyHuman, ensureInitialized } from '@/lib/inline-bot-detection';

const AUTO_HIDE_MS = 60_000;
const HOLD_DURATION_MS = 1500;
const MIN_HOLD_MS = 200;
const PARTICLE_COUNT = 8;

interface ProtectedEmailProps {
  emailKey: EmailKey;
  className?: string;
  fallback?: string;
  plain?: boolean;
}

/* ── Inline SVG icons ──────────────────────────────────────────── */

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 16"
      width={14}
      height={11}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="1" y="1" width="18" height="14" rx="2" />
      <path d="M1 1l9 7 9-7" />
    </svg>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={13}
      height={13}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="5" y="5" width="9.5" height="9.5" rx="1.5" />
      <path d="M3 11V2.5A1.5 1.5 0 014.5 1H11" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={13}
      height={13}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M3 8.5l3.5 3.5 6.5-8" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={12}
      height={12}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="7" width="10" height="7" rx="1.5" />
      <path d="M5 7V5a3 3 0 016 0v2" />
    </svg>
  );
}

/* ── Sparkle particles (CSS-only burst on reveal) ──────────────── */

function ParticleBurst() {
  return (
    <span
      className="pointer-events-none absolute inset-0 overflow-visible"
      aria-hidden
    >
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const angle = (360 / PARTICLE_COUNT) * i;
        const distance = 18 + Math.random() * 14;
        const size = 2 + Math.random() * 2;
        const hue = i % 2 === 0 ? '263' : '186'; // violet / cyan
        return (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: `hsl(${hue}, 80%, 65%)`,
              animation: `email-particle 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ['--px' as any]: `${Math.cos((angle * Math.PI) / 180) * distance}px`,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ['--py' as any]: `${Math.sin((angle * Math.PI) / 180) * distance}px`,
            }}
          />
        );
      })}
    </span>
  );
}

/* ── Progress ring with glow ───────────────────────────────────── */

const RING_SIZE = 20;
const RING_STROKE = 2;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function ProgressRing({ progress }: { progress: number }) {
  const offset = RING_CIRCUMFERENCE * (1 - progress);
  return (
    <svg
      width={RING_SIZE}
      height={RING_SIZE}
      viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
      className="shrink-0 -rotate-90"
      style={{
        filter:
          progress > 0.3
            ? `drop-shadow(0 0 ${3 + progress * 4}px rgba(139,92,246,${0.3 + progress * 0.4}))`
            : undefined,
      }}
      aria-hidden
    >
      <circle
        cx={RING_SIZE / 2}
        cy={RING_SIZE / 2}
        r={RING_RADIUS}
        fill="none"
        stroke="currentColor"
        strokeWidth={RING_STROKE}
        className="text-violet-500/20"
      />
      <circle
        cx={RING_SIZE / 2}
        cy={RING_SIZE / 2}
        r={RING_RADIUS}
        fill="none"
        stroke="url(#inline-ring-grad)"
        strokeWidth={RING_STROKE + (progress > 0.7 ? 0.5 : 0)}
        strokeDasharray={RING_CIRCUMFERENCE}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="inline-ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── Animated dots for "Almost ready" state ────────────────────── */

function AnimatedDots() {
  return (
    <span className="inline-flex gap-[2px] ml-0.5" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="inline-block w-[3px] h-[3px] rounded-full bg-current"
          style={{
            animation: `email-dot-bounce 1.2s ease-in-out ${i * 0.15}s infinite`,
          }}
        />
      ))}
    </span>
  );
}

/* ── Inline styles (keyframes + shimmer) ───────────────────────── */

const inlineStyles = `
@keyframes email-particle {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: translate(calc(-50% + var(--px)), calc(-50% + var(--py))) scale(0); opacity: 0; }
}
@keyframes email-dot-bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-3px); opacity: 1; }
}
@keyframes email-shimmer {
  0% { transform: translateX(-200%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
}
@keyframes email-reveal-pop {
  0% { transform: scale(0.85); opacity: 0; filter: blur(4px); }
  50% { transform: scale(1.04); opacity: 1; filter: blur(0); }
  100% { transform: scale(1); opacity: 1; filter: blur(0); }
}
@keyframes email-glow-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0); }
  50% { box-shadow: 0 0 12px 2px rgba(139,92,246,0.15); }
}
@keyframes email-success-glow {
  0% { box-shadow: 0 0 0 0 rgba(139,92,246,0.4), 0 0 0 0 rgba(6,182,212,0.2); }
  60% { box-shadow: 0 0 20px 4px rgba(139,92,246,0.15), 0 0 30px 8px rgba(6,182,212,0.08); }
  100% { box-shadow: 0 0 0 0 rgba(139,92,246,0), 0 0 0 0 rgba(6,182,212,0); }
}
@keyframes email-checkmark-draw {
  0% { stroke-dashoffset: 20; }
  100% { stroke-dashoffset: 0; }
}
`;

/**
 * Hold-to-reveal email component with delightful micro-interactions.
 *
 * States:
 * - "Almost ready…" with animated dots when bot detection is pending
 * - "Hold to reveal email" with shimmer sweep & glow pulse when ready
 * - "Keep holding…" with glowing progress ring during hold
 * - Particle burst + pop animation on reveal
 * - Email pill with gradient hover + animated copy feedback
 */
export function ProtectedEmail({
  emailKey,
  className,
  fallback,
  plain,
}: ProtectedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [justRevealed, setJustRevealed] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const holdStartRef = useRef<number>(0);
  const revealTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Start passive signal collection + poll readiness
  useEffect(() => {
    ensureInitialized();

    if (ready) return;
    const id = setInterval(() => {
      if (isLikelyHuman()) {
        setReady(true);
        clearInterval(id);
      }
    }, 500);
    return () => clearInterval(id);
  }, [ready]);

  // Auto-hide timer
  useEffect(() => {
    if (!email) return;
    timerRef.current = setTimeout(() => {
      setEmail(null);
      setJustRevealed(false);
    }, AUTO_HIDE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [email]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (revealTimerRef.current) clearTimeout(revealTimerRef.current);
    };
  }, []);

  /* ── Hold-to-reveal mechanics ──────────────────────────────── */

  const startHold = useCallback(() => {
    if (email || !ready) return;
    holdStartRef.current = performance.now();
    setHolding(true);
    setProgress(0);

    const tick = () => {
      const elapsed = performance.now() - holdStartRef.current;
      const p = Math.min(elapsed / HOLD_DURATION_MS, 1);
      setProgress(p);

      if (p >= 1) {
        if (elapsed < MIN_HOLD_MS) {
          cancelHold();
          return;
        }
        setHolding(false);
        setProgress(0);
        setJustRevealed(true);
        setEmail(getProtectedEmail(emailKey));
        // Clear the "just revealed" burst after animation completes
        revealTimerRef.current = setTimeout(() => setJustRevealed(false), 800);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [email, ready, emailKey]);

  const cancelHold = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    setHolding(false);
    setProgress(0);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.repeat) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        startHold();
      }
    },
    [startHold],
  );

  const handleKeyUp = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'Escape') {
        cancelHold();
      }
    },
    [cancelHold],
  );

  const handleCopy = useCallback(() => {
    if (!email) return;
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      copiedTimerRef.current = setTimeout(() => setCopied(false), 2000);
    });
  }, [email]);

  // ── Inject keyframe styles once ───────────────────────────────
  useEffect(() => {
    const id = 'protected-email-styles';
    if (typeof document !== 'undefined' && !document.getElementById(id)) {
      const style = document.createElement('style');
      style.id = id;
      style.textContent = inlineStyles;
      document.head.appendChild(style);
    }
  }, []);

  // ── Placeholder / hold state ──────────────────────────────────
  if (!email) {
    const isDisabled = !ready;

    const pillBase =
      'relative inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 ' +
      'text-sm font-medium transition-all duration-200 select-none overflow-hidden ' +
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400';

    const pillState = isDisabled
      ? 'border-white/10 bg-white/5 text-white/30 cursor-not-allowed'
      : holding
        ? 'border-violet-400/60 bg-violet-500/25 text-violet-200 cursor-grabbing ' +
          'shadow-[0_0_16px_rgba(139,92,246,0.25)]'
        : 'border-violet-500/30 bg-violet-500/10 text-violet-400 cursor-pointer ' +
          'hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-violet-300 ' +
          'hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] active:scale-[0.97] ' +
          'animate-[email-glow-pulse_3s_ease-in-out_infinite]';

    return (
      <span className="inline-flex items-center gap-1">
        <button
          type="button"
          disabled={isDisabled}
          onPointerDown={startHold}
          onPointerUp={cancelHold}
          onPointerLeave={cancelHold}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          className={className ?? `${pillBase} ${pillState}`}
          aria-label={
            isDisabled
              ? `Almost ready to reveal ${emailKey} email`
              : `Hold to reveal ${emailKey} email address`
          }
        >
          {/* Shimmer sweep overlay (only on ready idle state) */}
          {!isDisabled && !holding && (
            <span
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.08) 40%, rgba(255,255,255,0.12) 50%, rgba(6,182,212,0.08) 60%, transparent 100%)',
                animation: 'email-shimmer 3s ease-in-out infinite',
              }}
              aria-hidden
            />
          )}

          <span className="relative z-10 inline-flex items-center gap-1.5">
            {holding ? (
              <ProgressRing progress={progress} />
            ) : isDisabled ? (
              <LockIcon className="opacity-40" />
            ) : (
              <EnvelopeIcon className="opacity-70 transition-transform duration-200 group-hover:scale-110" />
            )}

            {holding ? (
              <span>
                Keep holding
                <span
                  className="inline-block transition-all duration-150"
                  style={{ opacity: 0.5 + progress * 0.5 }}
                >
                  … {Math.round(progress * 100)}%
                </span>
              </span>
            ) : isDisabled ? (
              <span>
                Almost ready
                <AnimatedDots />
              </span>
            ) : (
              <span>{fallback ?? 'Hold to reveal email'}</span>
            )}
          </span>
        </button>
      </span>
    );
  }

  // ── Revealed state ────────────────────────────────────────────
  if (plain) {
    return (
      <span
        className={
          className ??
          'inline-flex items-center gap-1.5 text-violet-400'
        }
        style={{
          animation: justRevealed
            ? 'email-reveal-pop 400ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
            : 'fadeIn 300ms ease-out',
        }}
      >
        {email}
      </span>
    );
  }

  return (
    <span
      className="relative inline-flex items-center gap-1"
      style={{
        animation: justRevealed
          ? 'email-reveal-pop 400ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
          : 'fadeIn 300ms ease-out',
      }}
    >
      {justRevealed && <ParticleBurst />}
      <a
        href={`mailto:${email}`}
        className={
          className ??
          'inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 ' +
          'bg-gradient-to-r from-violet-500/10 via-violet-500/15 to-cyan-500/10 ' +
          'px-3 py-0.5 text-sm font-medium text-violet-400 no-underline ' +
          'transition-all duration-300 ' +
          'hover:text-violet-300 hover:border-violet-400/50 ' +
          'hover:from-violet-500/15 hover:via-violet-500/20 hover:to-cyan-500/15 ' +
          'hover:shadow-[0_0_20px_rgba(139,92,246,0.2),0_0_40px_rgba(6,182,212,0.08)]'
        }
        style={
          justRevealed
            ? { animation: 'email-success-glow 800ms ease-out forwards' }
            : undefined
        }
      >
        <EnvelopeIcon className="opacity-60" />
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className={`inline-flex items-center justify-center rounded-full p-1.5
          transition-all duration-200 cursor-pointer
          focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-violet-400
          ${
            copied
              ? 'text-emerald-400 bg-emerald-500/10 scale-110'
              : 'text-white/40 hover:text-violet-400 hover:bg-violet-500/10 active:scale-90'
          }`}
        aria-label={copied ? 'Copied to clipboard' : 'Copy email address'}
      >
        {copied ? (
          <svg
            viewBox="0 0 16 16"
            width={13}
            height={13}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path
              d="M3 8.5l3.5 3.5 6.5-8"
              strokeDasharray="20"
              style={{
                animation: 'email-checkmark-draw 300ms ease-out forwards',
              }}
            />
          </svg>
        ) : (
          <CopyIcon />
        )}
      </button>
      {copied && (
        <span
          className="text-[10px] font-medium text-emerald-400"
          style={{ animation: 'email-reveal-pop 250ms cubic-bezier(0.34,1.56,0.64,1) forwards' }}
          aria-live="polite"
        >
          Copied!
        </span>
      )}
    </span>
  );
}
