'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { assembleEmail } from '@/lib/email-assembler';
import { useEmailRevealTimer } from '@/hooks/use-email-reveal-timer';
import { useBotDetection } from '@/hooks/use-bot-detection';
import { EmailHoneypot, isBotDetected } from './email-honeypot';
import { EmailRevealButton } from './email-reveal-button';
import { RevealCountdown } from './reveal-countdown';
import { ContactFormFallback } from './contact-form-fallback';
import { trackEmailRevealed, trackEmailCopied, trackEmailTimeout, trackGateSucceeded, trackGateBlocked } from '@/lib/email-analytics';

function CopyButton({ copied, onCopy }: { copied: boolean; onCopy: () => void }) {
  return (
    <div className="relative">
      <motion.button
        onClick={onCopy}
        className={cn(
          'relative inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
          copied
            ? 'bg-emerald-500/10 text-emerald-400'
            : 'bg-white/[0.05] text-white/50 hover:bg-white/[0.08] hover:text-white/70',
        )}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        aria-label={copied ? 'Copied to clipboard' : 'Copy email address'}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.svg
              key="check"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: [1.3, 1] }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 500, damping: 15 }}
              viewBox="0 0 16 16"
              fill="none"
              className="h-3 w-3"
            >
              <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          ) : (
            <motion.svg
              key="clipboard"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20 }}
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
        <span>{copied ? 'Copied!' : 'Copy'}</span>
      </motion.button>

      {/* Floating "Copied!" toast */}
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400"
            aria-live="polite"
          >
            Copied to clipboard
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactSection() {
  const { isRevealed, timeRemaining, reveal, reset, hasExpired } = useEmailRevealTimer(30_000);
  const [copied, setCopied] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const emailRef = useRef<string | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const { isHuman, rateLimited, cooldownRemaining, recordFailedAttempt, getSignalSnapshot } = useBotDetection(containerRef);

  // Reset reveal when user navigates away — unmount email from DOM
  useEffect(() => {
    reset();
    emailRef.current = null;
  }, [pathname, reset]);

  const handleReveal = useCallback(() => {
    const snapshot = getSignalSnapshot();

    if (isBotDetected()) {
      if (snapshot) {
        if (process.env.NODE_ENV !== 'production') {
          console.info('[EmailProtection] gate_blocked', snapshot);
        }
        trackGateBlocked(0, snapshot.score as number, snapshot.signals as Record<string, boolean>);
      }
      return;
    }

    if (snapshot) {
      if (process.env.NODE_ENV !== 'production') {
        console.info('[EmailProtection] gate_succeeded', snapshot);
      }
      trackGateSucceeded(0, snapshot.score as number, snapshot.signals as Record<string, boolean>);
    }

    if (!emailRef.current) {
      emailRef.current = assembleEmail();
    }
    trackEmailRevealed(0);
    reveal();
  }, [reveal, getSignalSnapshot]);

  const handleHoldStart = useCallback(() => {
    setAnnouncement('Revealing…');
  }, []);

  // Announce reveal
  useEffect(() => {
    if (isRevealed && emailRef.current) {
      setAnnouncement(`Email address revealed: ${emailRef.current}. Visible for 30 seconds.`);
    }
  }, [isRevealed]);

  // Announce expiry
  useEffect(() => {
    if (hasExpired) {
      setAnnouncement('Email hidden. Press the button to reveal again.');
      trackEmailTimeout(copied);
    }
  }, [hasExpired]);

  // When timer expires, clear the in-memory email string too
  useEffect(() => {
    if (hasExpired) {
      emailRef.current = null;
    }
  }, [hasExpired]);

  const copyEmail = useCallback(async () => {
    if (!emailRef.current) {
      emailRef.current = assembleEmail();
    }
    const email = emailRef.current;
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = email;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setAnnouncement('Email address copied to clipboard.');
    trackEmailCopied();
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
  }, []);

  const secondsRemaining = Math.ceil(timeRemaining / 1000);

  return (
    <div
      ref={containerRef}
      data-contact="noreply@lumenlingo.example"
      className="relative overflow-hidden rounded-2xl border border-glass-border bg-surface-card/40 p-8 backdrop-blur-sm sm:p-10 before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-px before:w-px before:overflow-hidden before:opacity-0 before:content-['contact_[at]_lumenlingo-support_[dot]_fake'] after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-px after:w-px after:overflow-hidden after:opacity-0 after:content-[attr(data-contact)]"
    >
      {/* Honeypot — looks like mailto: to bots, invisible to humans */}
      <EmailHoneypot />

      {/* Screen reader announcement region (Story 4.2) */}
      <div className="sr-only" aria-live="assertive" role="log">
        {announcement}
      </div>

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

        {/* Email reveal — hold-to-reveal gate with delightful animations */}
        <div className="mt-6 space-y-3">
          <EmailRevealButton
            onReveal={handleReveal}
            onHoldStart={handleHoldStart}
            email={emailRef.current}
            isRevealed={isRevealed}
            hasExpired={hasExpired}
            onShowAgain={handleReveal}
            disabled={!isHuman || rateLimited}
            onFailedAttempt={recordFailedAttempt}
            cooldownRemaining={rateLimited ? cooldownRemaining : undefined}
          />

          {/* Action buttons — appear after email is revealed */}
          <AnimatePresence>
            {isRevealed && emailRef.current && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.15 }}
                className="flex items-center gap-3"
              >
                <CopyButton copied={copied} onCopy={copyEmail} />
                {secondsRemaining > 0 && (
                  <RevealCountdown timeRemaining={timeRemaining} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
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

        {/* No-JS fallback contact form (Story 4.3) */}
        <noscript>
          <div className="mt-8 rounded-xl border border-glass-border bg-surface-card/40 p-6">
            <h4 className="mb-4 text-sm font-medium text-white/70">
              JavaScript is disabled — use this form to reach us:
            </h4>
            <ContactFormFallback />
          </div>
        </noscript>
      </div>
    </div>
  );
}
