import { track } from '@vercel/analytics';
import { hasConsent } from '@/lib/cookie-consent';

/* ------------------------------------------------------------------ */
/*  Typed custom-event layer — keeps event names & payloads in one    */
/*  place so nothing drifts between components.                       */
/* ------------------------------------------------------------------ */

type AnalyticsEvents = {
  app_store_click: { location: string };
  pricing_view: Record<string, never>;
  pricing_cta_click: { tier: string };
  blog_post_read: { slug: string; title: string };
  feature_section_view: { section: string };
  newsletter_signup: { source: string };
  demo_started: { cards: string };
  demo_completed: { correct: string; total: string };
  demo_cta_click: { location: string };
  page_not_found: { path: string };
  error_page_view: { message: string };
};

export function trackEvent<K extends keyof AnalyticsEvents>(
  name: K,
  ...args: AnalyticsEvents[K] extends Record<string, never>
    ? []
    : [properties: AnalyticsEvents[K]]
) {
  if (!hasConsent('analytics')) return;
  const properties = args[0] as Record<string, string> | undefined;
  track(name, properties);
}

/* ------------------------------------------------------------------ */
/*  UTM parameter helpers — extract once, forward to first event      */
/* ------------------------------------------------------------------ */

export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

const UTM_KEYS: (keyof UtmParams)[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
];

/**
 * Extract UTM parameters from the current URL.
 * Safe to call on both server and client — returns empty object on server.
 */
export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utm: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

const UTM_STORAGE_KEY = 'll_utm';

/** Persist UTM params to sessionStorage so they survive page navigations. */
export function captureUtmParams(): void {
  if (typeof window === 'undefined') return;
  const utm = getUtmParams();
  if (Object.keys(utm).length > 0) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
    } catch {
      // sessionStorage unavailable — silently ignore
    }
  }
}

/** Retrieve persisted UTM params (from sessionStorage or current URL). */
export function getPersistedUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) return JSON.parse(stored) as UtmParams;
  } catch {
    // fall through
  }
  return getUtmParams();
}
