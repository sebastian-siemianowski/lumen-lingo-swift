'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LegalUpdateBannerProps {
  /** Current document version, e.g. "1.0" or "2.0" */
  version: string;
  /** Unique key for localStorage, e.g. "privacy" or "terms" */
  documentKey: string;
  /** Translated message text, e.g. "We've updated our Privacy Policy." */
  message: string;
  /** Translated link text, e.g. "View changes" */
  linkText: string;
  /** Anchor ID to scroll to, e.g. "policy-updates" or "changes" */
  changesAnchor: string;
  /** Translated dismiss label for a11y */
  dismissLabel?: string;
}

export function LegalUpdateBanner({
  version,
  documentKey,
  message,
  linkText,
  changesAnchor,
  dismissLabel = 'Dismiss',
}: LegalUpdateBannerProps) {
  const [visible, setVisible] = useState(false);
  const storageKey = `legal-update-seen-${documentKey}`;

  useEffect(() => {
    try {
      const seen = localStorage.getItem(storageKey);
      if (seen !== version) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (SSR, private browsing)
    }
  }, [storageKey, version]);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(storageKey, version);
    } catch {
      // ignore
    }
  };

  if (!visible) return null;

  return (
    <div
      role="status"
      className={cn(
        'mb-6 flex items-center gap-3 rounded-lg border border-violet/20 bg-violet/[0.06] px-4 py-3 text-sm text-white/70',
      )}
    >
      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-violet" aria-hidden>
        <path
          d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3v4m0 2.5V11"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex-1">
        {message}{' '}
        <a
          href={`#${changesAnchor}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(changesAnchor)?.scrollIntoView({ behavior: 'smooth' });
            dismiss();
          }}
          className="font-medium text-violet underline underline-offset-2 hover:text-violet/80"
        >
          {linkText}
        </a>
      </span>
      <button
        onClick={dismiss}
        aria-label={dismissLabel}
        className="shrink-0 rounded p-1 text-white/30 transition-colors hover:text-white/60"
      >
        <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden>
          <path d="M4 4l8 8m0-8l-8 8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
