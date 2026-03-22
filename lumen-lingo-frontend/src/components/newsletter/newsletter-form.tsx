'use client';

import { useState, useRef, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface NewsletterFormProps {
  /** Identifies the placement for analytics. */
  source?: string;
  /** Render as a compact single-row layout (e.g. for footer). */
  compact?: boolean;
  className?: string;
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function NewsletterForm({ source = 'unknown', compact = false, className = '' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed || !isValidEmail(trimmed)) {
      setErrorMsg('Please enter a valid email address.');
      setState('error');
      inputRef.current?.focus();
      return;
    }

    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, source }),
      });

      if (res.ok) {
        setState('success');
        trackEvent('newsletter_signup', { source });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setState('error');
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.');
      setState('error');
    }
  }

  function handleRetry() {
    setState('idle');
    setErrorMsg('');
    inputRef.current?.focus();
  }

  const isIdle = state === 'idle' || state === 'error';

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {state === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease }}
            className="flex items-center gap-3"
          >
            {/* Animated checkmark */}
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
              <motion.svg
                className="h-5 w-5 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M5 13l4 4L19 7"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4, ease: 'easeOut' }}
                />
              </motion.svg>
            </div>
            <p className="text-sm text-foreground-secondary">
              Welcome to the LumenShore community! Check your inbox.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={false}
            onSubmit={handleSubmit}
            className={`flex ${compact ? 'flex-row' : 'flex-col sm:flex-row'} gap-2`}
            noValidate
          >
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state === 'error') {
                    setState('idle');
                    setErrorMsg('');
                  }
                }}
                placeholder="your@email.com"
                aria-label="Email address"
                aria-invalid={state === 'error'}
                aria-describedby={errorMsg ? 'newsletter-error' : undefined}
                disabled={state === 'loading'}
                className="h-11 w-full rounded-[--radius-button] border border-glass-border bg-white/5 px-4 text-sm text-foreground placeholder:text-foreground-muted/60 transition-colors focus:border-violet/50 focus:outline-none focus:ring-2 focus:ring-violet/20 disabled:opacity-50"
              />
              {/* Error badge on input */}
              {state === 'error' && (
                <motion.div
                  initial={{ opacity: 0, x: 4 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <svg className="h-4 w-4 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={state === 'loading'}
              whileHover={isIdle ? { scale: 1.02 } : undefined}
              whileTap={isIdle ? { scale: 0.97 } : undefined}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[--radius-button] bg-violet px-5 text-sm font-medium text-white transition-all hover:bg-violet-hover hover:shadow-[0_0_24px_rgba(139,92,246,0.3)] focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 glow-violet"
            >
              {state === 'loading' ? (
                <motion.div
                  className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                />
              ) : (
                'Subscribe'
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Error message */}
      <AnimatePresence>
        {state === 'error' && errorMsg && (
          <motion.p
            id="newsletter-error"
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 text-xs text-red-400"
          >
            {errorMsg}{' '}
            <button
              type="button"
              onClick={handleRetry}
              className="underline underline-offset-2 transition-colors hover:text-red-300"
            >
              Try again
            </button>
          </motion.p>
        )}
      </AnimatePresence>

      {/* GDPR notice */}
      {state !== 'success' && (
        <p className="mt-2.5 text-[11px] leading-relaxed text-foreground-muted/70">
          We respect your privacy. Unsubscribe anytime.
        </p>
      )}
    </div>
  );
}
