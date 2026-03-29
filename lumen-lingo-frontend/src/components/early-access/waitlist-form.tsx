'use client';

import { useState, useRef, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';
import { useLocale } from 'next-intl';
import { getConsentAge } from '@/lib/consent-age';
import { spring } from '@/lib/motion';
import { cn } from '@/lib/utils';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface WaitlistResult {
  referralCode: string;
  position: number;
  total: number;
}

const LANGUAGES = [
  'Spanish',
  'French',
  'German',
  'Italian',
  'Japanese',
  'Korean',
  'Mandarin Chinese',
  'Other',
] as const;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface WaitlistFormProps {
  onSuccess?: (result: WaitlistResult) => void;
  referrer?: string;
}

export function WaitlistForm({ onSuccess, referrer }: WaitlistFormProps) {
  const locale = useLocale();
  const consentAge = getConsentAge(locale);
  const [email, setEmail] = useState('');
  const [languages, setLanguages] = useState<string[]>([]);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function toggleLanguage(lang: string) {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang],
    );
    if (state === 'error') { setState('idle'); setErrorMsg(''); }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed || !isValidEmail(trimmed)) {
      setErrorMsg('Please enter a valid email address.');
      setState('error');
      inputRef.current?.focus();
      return;
    }

    if (languages.length === 0) {
      setErrorMsg('Please select at least one language.');
      setState('error');
      return;
    }

    if (!ageConfirmed) {
      setErrorMsg('Please confirm you meet the age requirement.');
      setState('error');
      return;
    }

    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, language: languages.join(', '), referrer }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setState('success');
        trackEvent('newsletter_signup', { source: 'early_access' });
        onSuccess?.({
          referralCode: data.referralCode,
          position: data.position,
          total: data.total,
        });
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setState('error');
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.');
      setState('error');
    }
  }

  const isIdle = state === 'idle' || state === 'error';

  return (
    <AnimatePresence mode="wait">
      {state === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={spring.smooth}
          className="text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
            <motion.svg
              className="h-7 w-7 text-emerald-400"
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
          <p className="mt-4 text-lg font-semibold">
            <span className="bg-gradient-to-r from-violet via-cyan to-violet bg-clip-text text-transparent">
              You&apos;re on the list!
            </span>
          </p>
          <p className="mt-1 text-sm text-foreground-muted">We&apos;ll let you know as soon as early access opens.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={false}
          onSubmit={handleSubmit}
          className="space-y-4"
          noValidate
        >
          {/* Email */}
          <div>
            <label htmlFor="waitlist-email" className="mb-1.5 block text-sm font-medium text-foreground">
              Email address
            </label>
            <input
              ref={inputRef}
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (state === 'error') { setState('idle'); setErrorMsg(''); }
              }}
              placeholder="your@email.com"
              aria-invalid={state === 'error'}
              aria-required="true"
              disabled={state === 'loading'}
              data-sentry-mask
              className="h-12 w-full rounded-[--radius-button] border border-glass-border bg-white/5 px-4 text-sm text-foreground placeholder:text-foreground-muted/60 transition-all duration-300 focus:border-violet/50 focus-visible:outline-none focus:ring-2 focus:ring-violet/40 focus:shadow-[0_0_16px_rgba(139,92,246,0.1)] disabled:opacity-50"
            />
          </div>

          {/* Language chips (multi-select) */}
          <fieldset>
            <legend className="mb-2 text-sm font-medium text-foreground">
              Which languages interest you?
            </legend>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Language selection">
              {LANGUAGES.map((lang) => {
                const selected = languages.includes(lang);
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => toggleLanguage(lang)}
                    disabled={state === 'loading'}
                    className={cn(
                      'rounded-full border px-3 py-1.5 text-xs font-medium transition-all',
                      selected
                        ? 'border-violet/40 bg-violet/15 text-violet'
                        : 'border-glass-border bg-[--color-glass] text-foreground-muted hover:bg-[--color-glass-hover]',
                    )}
                    aria-pressed={selected}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Age confirmation — COPPA compliance */}
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={ageConfirmed}
              onChange={(e) => {
                setAgeConfirmed(e.target.checked);
                if (state === 'error') { setState('idle'); setErrorMsg(''); }
              }}
              aria-required="true"
              disabled={state === 'loading'}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-glass-border accent-violet"
            />
            <span className="text-xs leading-relaxed text-foreground-muted/70">
              I confirm I am at least {consentAge} years old (or have parental consent if under 18).
            </span>
          </label>

          {/* Error */}
          <AnimatePresence>
            {state === 'error' && errorMsg && (
              <motion.p
                role="alert"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-red-400"
              >
                {errorMsg}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={state === 'loading'}
            whileHover={isIdle ? { scale: 1.02 } : undefined}
            whileTap={isIdle ? { scale: 0.97 } : undefined}
            transition={spring.snappy}
            className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-[--radius-button] bg-violet px-6 text-sm font-semibold text-white transition-all hover:bg-violet-hover hover:shadow-[0_0_24px_rgba(139,92,246,0.3)] focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 glow-violet"
          >
            {state === 'loading' ? (
              <motion.div
                className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
              />
            ) : (
              'Join the Waitlist'
            )}
          </motion.button>

          <p className="text-center text-[11px] text-foreground-muted/70">
            We&apos;ll only email you about launch updates. Unsubscribe anytime.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
