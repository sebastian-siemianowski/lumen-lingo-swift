'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StarField } from '@/components/background';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/* ------------------------------------------------------------------ */
/*  Offline illustration — signal waves fading out                    */
/* ------------------------------------------------------------------ */

function OfflineWaves({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="relative mx-auto mb-8 h-40 w-40 sm:h-48 sm:w-48"
      animate={reduced ? {} : { scale: [1, 1.02, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 rounded-full bg-amber/6 blur-3xl" />

      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-full w-full"
        aria-hidden="true"
      >
        {/* Base circle — device */}
        <circle cx="100" cy="130" r="16" fill="#1e1e2e" stroke="#f59e0b" strokeWidth="1.5" opacity="0.7" />
        <circle cx="100" cy="130" r="6" fill="#f59e0b" opacity="0.3" />

        {/* Signal arcs (fading out) */}
        <path d="M70 100 A42 42 0 0 1 130 100" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" strokeDasharray="6 4" />
        <path d="M58 80 A60 60 0 0 1 142 80" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" strokeDasharray="6 4" />
        <path d="M46 62 A78 78 0 0 1 154 62" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.15" strokeDasharray="6 4" />

        {/* X mark over signal */}
        <line x1="85" y1="55" x2="115" y2="85" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        <line x1="115" y1="55" x2="85" y2="85" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* ------------------------------------------------------------------ */
/*  Offline Page Content                                              */
/* ------------------------------------------------------------------ */

export function OfflineContent() {
  const prefersReduced = useReducedMotion();
  const [retrying, setRetrying] = useState(false);

  const handleRetry = () => {
    setRetrying(true);
    // Small delay so the user sees the state change
    setTimeout(() => {
      window.location.reload();
    }, 400);
  };

  // Auto-redirect when connection returns
  useEffect(() => {
    const onOnline = () => window.location.reload();
    window.addEventListener('online', onOnline);
    return () => window.removeEventListener('online', onOnline);
  }, []);

  return (
    <div className="relative flex min-h-[80dvh] flex-col items-center justify-center overflow-hidden px-4">
      <StarField />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(245,158,11,0.04) 0%, transparent 60%)',
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
          <OfflineWaves reduced={prefersReduced} />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          You&apos;re Offline
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mb-2 text-base leading-relaxed text-foreground-secondary sm:text-lg"
        >
          But LumenLingo Works Offline Too!
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mb-8 text-sm leading-relaxed text-foreground-muted"
        >
          The LumenLingo app works beautifully offline with a Pro
          subscription or higher. Download it and never miss a practice session.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={handleRetry}
            disabled={retrying}
            className="inline-flex items-center justify-center gap-2 rounded-[--radius-button] bg-violet px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] transition-all duration-200 hover:bg-violet-hover hover:shadow-[0_0_48px_rgba(139,92,246,0.5)] disabled:opacity-50"
          >
            {retrying ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" />
                  <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Reconnecting…
              </>
            ) : (
              'Retry Connection'
            )}
          </button>
          <Link
            href="/"
            className="glass-card inline-flex items-center justify-center rounded-[--radius-button] border border-glass-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-glass-hover"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
