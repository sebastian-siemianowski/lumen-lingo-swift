'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

function CopyButton({ email, copied, onCopy }: { email: string; copied: string | null; onCopy: (email: string) => void }) {
  const isCopied = copied === email;
  const [flash, setFlash] = useState(false);

  const handleClick = () => {
    onCopy(email);
    setFlash(true);
    setTimeout(() => setFlash(false), 100);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={cn(
          'relative inline-flex items-center justify-center rounded-lg p-2 transition-all duration-150',
          flash && 'bg-emerald-400/10',
          isCopied ? 'text-emerald-400' : 'text-[--color-foreground-muted] hover:text-[--color-foreground-secondary]',
        )}
        aria-label={isCopied ? 'Copied' : 'Copy email address'}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isCopied ? (
            <motion.svg
              key="check"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              viewBox="0 0 16 16"
              fill="none"
              className="h-3 w-3"
            >
              <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          ) : (
            <motion.svg
              key="clipboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              viewBox="0 0 16 16"
              fill="none"
              className="h-3 w-3"
              aria-hidden
            >
              <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
              <path d="M3 10.5V3.5a.5.5 0 01.5-.5H11" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>

      {/* Tooltip */}
      <AnimatePresence>
        {isCopied && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-[--color-surface] px-2 py-1 text-xs text-[--color-foreground-secondary] shadow-[--shadow-card]"
            role="status"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const copyEmail = useCallback(async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = email;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(email);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(null), 2000);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-glass-border bg-surface-card/40 p-8 backdrop-blur-sm sm:p-10">
      {/* Subtle gradient accent */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-violet/5 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-cyan/5 blur-3xl" aria-hidden />

      <div className="relative">
        {/* Icon */}
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-violet/20 bg-violet/10">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-violet" aria-hidden>
            <path
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
          Have a question?
        </h3>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55 sm:text-[15px]">
          Can&apos;t find what you&apos;re looking for in the FAQ? We&apos;re here to help. Drop us a line and we&apos;ll get back to you as soon as we can.
        </p>

        {/* Email links */}
        <div className="mt-6 space-y-3">
          {/* Support email */}
          <div className="glass-card flex items-center justify-between px-4 py-3">
            <a
              href="mailto:support@lumenlingo.com"
              className={cn(
                'font-mono text-sm transition-colors duration-200',
                copied === 'support@lumenlingo.com' ? 'text-[--color-violet]' : 'text-[--color-foreground]',
              )}
            >
              support@lumenlingo.com
            </a>
            <CopyButton email="support@lumenlingo.com" copied={copied} onCopy={copyEmail} />
          </div>
        </div>

        {/* Response time badge */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/[0.03] px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs text-white/50">
            We usually respond within 48 hours — during busy periods it may take a little longer
          </span>
        </div>
      </div>
    </div>
  );
}
