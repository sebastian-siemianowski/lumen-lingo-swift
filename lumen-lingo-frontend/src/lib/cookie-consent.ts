/**
 * Cookie consent management — stores user preferences in localStorage
 * with a 13-month expiry per GDPR guidance.
 *
 * Categories:
 *  - essential:     Always on (session, locale, consent state itself)
 *  - analytics:     Vercel Analytics custom track() events
 *  - errorMonitoring: Sentry error reporting (not replay)
 *  - sessionReplay: Sentry session replay (captures user interactions)
 *
 * GPC/DNT override: when the browser sends a Global Privacy Control or
 * Do-Not-Track signal, all non-essential categories are suppressed at
 * runtime regardless of stored preferences (CPRA requirement).
 */

import { isPrivacySignalActive } from './gpc';

export type ConsentCategory = 'essential' | 'analytics' | 'errorMonitoring' | 'sessionReplay';

export interface ConsentPreferences {
  essential: true; // always true – cannot be disabled
  analytics: boolean;
  errorMonitoring: boolean;
  sessionReplay: boolean;
  /** ISO timestamp when consent was given/updated */
  timestamp: string;
  /** Consent banner version – bump when categories change */
  version: string;
}

const STORAGE_KEY = 'll_cookie_consent';
const CONSENT_VERSION = '1.0';
/** 13 months in ms (GDPR guidance) */
const EXPIRY_MS = 13 * 30 * 24 * 60 * 60 * 1000;

function isServer(): boolean {
  return typeof window === 'undefined';
}

/** Read stored consent. Returns null if not set or expired. */
export function getConsentPreferences(): ConsentPreferences | null {
  if (isServer()) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentPreferences & { _expiry?: number };
    // Check expiry
    if (parsed._expiry && Date.now() > parsed._expiry) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    // If version changed, re-prompt
    if (parsed.version !== CONSENT_VERSION) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

/** Save consent preferences with 13-month expiry. */
export function setConsentPreferences(prefs: Omit<ConsentPreferences, 'essential' | 'timestamp' | 'version'>): void {
  if (isServer()) return;
  const stored = {
    essential: true as const,
    analytics: prefs.analytics,
    errorMonitoring: prefs.errorMonitoring,
    sessionReplay: prefs.sessionReplay,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
    _expiry: Date.now() + EXPIRY_MS,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // localStorage unavailable — fail silently
  }
  // Dispatch event so other components can react to consent changes
  window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: stored }));

  // Log consent server-side for GDPR audit trail
  fetch('/api/consent/cookie', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      analytics: prefs.analytics,
      errorMonitoring: prefs.errorMonitoring,
      sessionReplay: prefs.sessionReplay,
      version: CONSENT_VERSION,
    }),
  }).catch(() => {
    // Non-blocking — consent is already stored locally
  });
}

/** Accept all non-essential categories. */
export function acceptAll(): void {
  setConsentPreferences({ analytics: true, errorMonitoring: true, sessionReplay: true });
}

/** Reject all non-essential categories. */
export function rejectAll(): void {
  setConsentPreferences({ analytics: false, errorMonitoring: false, sessionReplay: false });
}

/** Check if a specific category has consent. GPC/DNT overrides non-essential. */
export function hasConsent(category: ConsentCategory): boolean {
  if (category === 'essential') return true;
  // GPC/DNT signal overrides all non-essential consent (CPRA § 1798.135(e))
  if (isPrivacySignalActive()) return false;
  const prefs = getConsentPreferences();
  if (!prefs) return false;
  return prefs[category] === true;
}

/** Check if user has made any consent decision (banner was interacted with). */
export function hasConsentDecision(): boolean {
  if (isServer()) return false;
  return getConsentPreferences() !== null;
}
