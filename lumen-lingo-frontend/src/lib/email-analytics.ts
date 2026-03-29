/**
 * Email Protection Analytics — PostHog event tracking.
 *
 * All functions are no-ops in development to avoid noise.
 * Events use the `email_protection_` prefix and never include PII.
 */

type PostHogLike = { capture: (event: string, properties?: Record<string, unknown>) => void };

function getPostHog(): PostHogLike | null {
  if (process.env.NODE_ENV !== 'production') return null;
  if (typeof window === 'undefined') return null;
  const ph = (window as unknown as Record<string, unknown>).posthog;
  if (ph && typeof ph === 'object' && typeof (ph as PostHogLike).capture === 'function') {
    return ph as PostHogLike;
  }
  return null;
}

function capture(event: string, properties?: Record<string, unknown>) {
  getPostHog()?.capture(event, properties);
}

// ── Public event functions ──────────────────────────────────────

export function trackGateStarted(source: 'mouse' | 'touch' | 'keyboard') {
  capture('email_protection_gate_started', { source });
}

export function trackGateAbandoned(holdDuration: number, source: 'mouse' | 'touch' | 'keyboard') {
  capture('email_protection_gate_abandoned', { holdDuration, source });
}

export function trackGateSucceeded(holdDuration: number, score: number, signals: Record<string, boolean>) {
  capture('email_protection_gate_succeeded', { holdDuration, score, signals });
}

export function trackGateBlocked(holdDuration: number, score: number, signals: Record<string, boolean>) {
  capture('email_protection_gate_blocked', { holdDuration, score, signals });
}

export function trackEmailRevealed(score: number) {
  capture('email_protection_email_revealed', { score });
}

export function trackEmailCopied() {
  capture('email_protection_email_copied');
}

export function trackEmailSent() {
  capture('email_protection_email_sent');
}

export function trackEmailTimeout(wasInteracted: boolean) {
  capture('email_protection_email_timeout', { wasInteracted });
}

export function trackHoneypotTriggered(interactionType: 'click' | 'focus') {
  capture('email_protection_honeypot_triggered', { interactionType });
}

export function trackRateLimited(attemptCount: number) {
  capture('email_protection_rate_limited', { attemptCount });
}

export function trackNoscriptFormSubmitted(honeypotFilled: boolean) {
  capture('email_protection_noscript_form_submitted', { honeypotFilled });
}
