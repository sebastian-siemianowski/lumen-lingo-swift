'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { isPrivacySignalActive } from '@/lib/gpc';
import { hasConsent } from '@/lib/cookie-consent';

/**
 * Wraps Vercel Analytics & Speed Insights so that the tracking scripts
 * are never loaded when a privacy signal (GPC / DNT) is active or the
 * user has not consented to analytics cookies.
 */
export function ConsentAwareAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    function check() {
      setAllowed(!isPrivacySignalActive() && hasConsent('analytics'));
    }

    check();

    // Re-evaluate when the user updates their consent preferences
    window.addEventListener('cookie-consent-change', check);
    return () => {
      window.removeEventListener('cookie-consent-change', check);
    };
  }, []);

  if (!allowed) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
