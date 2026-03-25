'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Sentry from '@sentry/nextjs';
import { StarField } from '@/components/background';
import { trackEvent } from '@/lib/analytics';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { spring } from '@/lib/motion';

/* ------------------------------------------------------------------ */
/*  Calming illustration — glitching orb with recovery particles      */
/* ------------------------------------------------------------------ */

function RecoveryOrb({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="relative mx-auto mb-8 h-40 w-40 sm:h-48 sm:w-48"
      animate={reduced ? {} : { scale: [1, 1.03, 1], rotate: [0, 1, -1, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-violet/8 blur-3xl" />

      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-full w-full"
        aria-hidden="true"
      >
        {/* Core orb */}
        <circle cx="100" cy="100" r="50" fill="url(#orbGrad)" opacity="0.9" />
        <circle cx="100" cy="100" r="50" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.4" />

        {/* Inner pulse ring */}
        <circle cx="100" cy="100" r="35" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />

        {/* Recovery particles — orbiting dots */}
        <circle cx="100" cy="36" r="3" fill="#8b5cf6" opacity="0.6">
          <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="100" r="2" fill="#06b6d4" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from="120 100 100" to="480 100 100" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="164" r="2.5" fill="#c4b5fd" opacity="0.4">
          <animateTransform attributeName="transform" type="rotate" from="240 100 100" to="600 100 100" dur="10s" repeatCount="indefinite" />
        </circle>

        {/* Glitch lines (decorative) */}
        <line x1="70" y1="85" x2="130" y2="85" stroke="#8b5cf6" strokeWidth="1" opacity="0.15" />
        <line x1="75" y1="115" x2="125" y2="115" stroke="#06b6d4" strokeWidth="0.5" opacity="0.1" />

        <defs>
          <radialGradient id="orbGrad" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#111118" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0a0a0f" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Animation variants                                                */
/* ------------------------------------------------------------------ */

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring.smooth,
  },
};

/* ------------------------------------------------------------------ */
/*  Error Page                                                        */
/* ------------------------------------------------------------------ */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const prefersReduced = useReducedMotion();
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    Sentry.captureException(error);
    trackEvent('error_page_view', {
      message: error.digest ?? 'client-error',
    });
  }, [error]);

  const handleReset = () => {
    setRetryCount((c) => c + 1);
    reset();
  };

  return (
    <div className="relative flex min-h-[80dvh] flex-col items-center justify-center overflow-hidden px-4">
      {/* Cosmic background */}
      <StarField />

      {/* Minimal logo header */}
      <div className="absolute top-0 inset-x-0 z-20 flex justify-center py-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-[--radius-sm] focus-visible:ring-2 focus-visible:ring-violet focus-visible:outline-none"
          aria-label="LumenLingo home"
        >
          <div className="relative flex h-9 w-9 items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet to-cyan opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="relative text-lg font-bold text-white">L</span>
          </div>
          <span className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-violet">
            LumenLingo
          </span>
        </Link>
      </div>

      {/* Subtle center glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.05) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-lg text-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <RecoveryOrb reduced={prefersReduced} />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Something Unexpected Happened
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mb-8 text-base leading-relaxed text-foreground-secondary sm:text-lg"
        >
          Don&apos;t worry — the cosmos is vast, and minor disruptions happen.
          <br className="hidden sm:inline" />
          Let&apos;s get you back on track.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-[--radius-button] bg-violet px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] transition-all duration-200 hover:bg-violet-hover hover:shadow-[0_0_48px_rgba(139,92,246,0.5)]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="glass-card inline-flex items-center justify-center rounded-[--radius-button] border border-glass-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-glass-hover"
          >
            Go Home
          </Link>
        </motion.div>

        {retryCount > 0 && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring.smooth}
            className="mt-6 text-sm text-foreground-muted"
          >
            Still having trouble?{' '}
            <a href="mailto:support@lumenlingo.com" className="text-violet underline underline-offset-2 hover:text-violet-hover">
              Contact us
            </a>
          </motion.p>
        )}

        {process.env.NODE_ENV === 'development' && error.stack && (
          <motion.details variants={fadeUp} className="mt-8 w-full max-w-lg text-start">
            <summary className="cursor-pointer text-xs text-foreground-muted hover:text-foreground-secondary">
              Error details (dev only)
            </summary>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-glass-border bg-surface/80 p-4 text-xs leading-relaxed text-foreground-muted">
              {error.stack}
            </pre>
          </motion.details>
        )}
      </motion.div>
    </div>
  );
}
