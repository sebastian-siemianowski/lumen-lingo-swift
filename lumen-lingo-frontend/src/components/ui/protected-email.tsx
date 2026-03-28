'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { type EmailKey, getProtectedEmail } from '@/lib/email-registry';
import { isLikelyHuman, ensureInitialized } from '@/lib/inline-bot-detection';

const AUTO_HIDE_MS = 60_000;
const HOLD_DURATION_MS = 1500;
const MIN_HOLD_MS = 200;

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

/* ── Progress ring (matches contact page pattern) ──────────────── */

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
        strokeWidth={RING_STROKE}
        strokeDasharray={RING_CIRCUMFERENCE}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-[stroke-dashoffset] duration-75"
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

/**
 * Hold-to-reveal email component with anti-bot protection.
 *
 * Matches the Contact page UX:
 * - "Almost ready…" when bot detection is pending
 * - "Hold to reveal email" when ready
 * - "Keep holding…" with progress ring during hold
 * - Email + copy button after reveal, auto-hides after 60s
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

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const holdStartRef = useRef<number>(0);

  // Start passive signal collection + poll readiness
  useEffect(() => {
    ensureInitialized();

    // Poll until human signals accumulate (matches "Almost ready…" → "Hold to reveal" transition)
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
        // Reject if hold was impossibly fast (bot)
        if (elapsed < MIN_HOLD_MS) {
          cancelHold();
          return;
        }
        setHolding(false);
        setProgress(0);
        setEmail(getProtectedEmail(emailKey));
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

  // Keyboard hold: Space/Enter
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.repeat) return; // ignore auto-repeat
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

  // ── Placeholder / hold state ──────────────────────────────────
  if (!email) {
    const isDisabled = !ready;
    const label = holding
      ? 'Keep holding…'
      : isDisabled
        ? 'Almost ready…'
        : fallback ?? 'Hold to reveal email';

    const pillBase =
      'inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-sm font-medium ' +
      'transition-all duration-200 select-none ' +
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400';

    const pillState = isDisabled
      ? 'border-white/10 bg-white/5 text-white/30 cursor-not-allowed'
      : holding
        ? 'border-violet-400/50 bg-violet-500/20 text-violet-300 cursor-grabbing'
        : 'border-violet-500/30 bg-violet-500/10 text-violet-400 cursor-pointer ' +
          'hover:border-violet-400/50 hover:bg-violet-500/20 hover:text-violet-300 ' +
          'hover:shadow-[0_0_12px_rgba(139,92,246,0.15)] active:scale-[0.97]';

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
          {holding ? (
            <ProgressRing progress={progress} />
          ) : (
            <EnvelopeIcon className={isDisabled ? 'opacity-40' : 'opacity-70'} />
          )}
          {label}
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
          'inline-flex items-center gap-1.5 text-violet-400 animate-[fadeIn_300ms_ease-out]'
        }
      >
        {email}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 animate-[fadeIn_300ms_ease-out]">
      <a
        href={`mailto:${email}`}
        className={
          className ??
          'inline-flex items-center gap-1.5 rounded-full border border-violet-500/25 ' +
          'bg-violet-500/10 px-3 py-0.5 text-sm font-medium text-violet-400 ' +
          'underline underline-offset-2 decoration-violet-500/40 ' +
          'transition-colors hover:text-violet-300 hover:border-violet-400/40'
        }
      >
        <EnvelopeIcon className="opacity-60" />
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center justify-center rounded-full p-1
          text-white/40 transition-colors hover:text-violet-400 hover:bg-violet-500/10
          focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-violet-400
          cursor-pointer"
        aria-label={copied ? 'Copied to clipboard' : 'Copy email address'}
      >
        {copied ? (
          <CheckIcon className="text-emerald-400" />
        ) : (
          <CopyIcon />
        )}
      </button>
      {copied && (
        <span
          className="text-[10px] font-medium text-emerald-400 animate-[fadeIn_150ms_ease-out]"
          aria-live="polite"
        >
          Copied!
        </span>
      )}
    </span>
  );
}
