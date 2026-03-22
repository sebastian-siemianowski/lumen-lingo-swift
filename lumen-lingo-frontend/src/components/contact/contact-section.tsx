'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@lumenshore.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
    }
  };

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

        {/* Email link */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@lumenshore.com"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-violet/25 bg-violet/10 px-5 py-3 text-sm font-medium text-violet transition-all duration-300 hover:border-violet/40 hover:bg-violet/15 hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 opacity-80" aria-hidden>
              <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
              <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
            </svg>
            hello@lumenshore.com
          </a>

          <button
            onClick={copyEmail}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-xs font-medium transition-all duration-300',
              copied
                ? 'text-emerald-400'
                : 'text-white/40 hover:text-white/60',
            )}
            aria-label="Copy email address"
          >
            {copied ? (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                viewBox="0 0 16 16"
                fill="none"
                className="h-3.5 w-3.5"
              >
                <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            ) : (
              <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden>
                <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
                <path d="M3 10.5V3.5a.5.5 0 01.5-.5H11" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
              </svg>
            )}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Response time badge */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/[0.03] px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs text-white/50">
            We usually respond within 48 hours
          </span>
        </div>
      </div>
    </div>
  );
}
