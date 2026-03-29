import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// ── Helpers ──────────────────────────────────────────────────────
const captureMock = vi.fn();

function mountPostHog() {
  (window as unknown as Record<string, unknown>).posthog = { capture: captureMock };
}

function unmountPostHog() {
  delete (window as unknown as Record<string, unknown>).posthog;
}

// ── Dynamic import to respect NODE_ENV at import time ────────────
async function loadAnalytics() {
  // Clear module cache so each test gets a fresh module
  vi.resetModules();
  return import('../email-analytics');
}

describe('email-analytics', () => {
  beforeEach(() => {
    captureMock.mockClear();
    unmountPostHog();
  });

  afterEach(() => {
    unmountPostHog();
    vi.unstubAllEnvs();
  });

  describe('NODE_ENV guard', () => {
    it('does not fire capture in development (default)', async () => {
      vi.stubEnv('NODE_ENV', 'development');
      mountPostHog();
      const { trackGateStarted } = await loadAnalytics();
      trackGateStarted('mouse');
      expect(captureMock).not.toHaveBeenCalled();
    });

    it('fires capture in production when posthog is available', async () => {
      vi.stubEnv('NODE_ENV', 'production');
      mountPostHog();
      const { trackGateStarted } = await loadAnalytics();
      trackGateStarted('mouse');
      expect(captureMock).toHaveBeenCalledWith('email_protection_gate_started', { source: 'mouse' });
    });

    it('does not throw when posthog is missing in production', async () => {
      vi.stubEnv('NODE_ENV', 'production');
      // posthog NOT mounted
      const { trackEmailCopied } = await loadAnalytics();
      expect(() => trackEmailCopied()).not.toThrow();
      expect(captureMock).not.toHaveBeenCalled();
    });
  });

  describe('event functions send correct payloads', () => {
    beforeEach(() => {
      vi.stubEnv('NODE_ENV', 'production');
      mountPostHog();
    });

    it('trackGateStarted', async () => {
      const { trackGateStarted } = await loadAnalytics();
      trackGateStarted('keyboard');
      expect(captureMock).toHaveBeenCalledWith('email_protection_gate_started', { source: 'keyboard' });
    });

    it('trackGateAbandoned', async () => {
      const { trackGateAbandoned } = await loadAnalytics();
      trackGateAbandoned(800, 'touch');
      expect(captureMock).toHaveBeenCalledWith('email_protection_gate_abandoned', { holdDuration: 800, source: 'touch' });
    });

    it('trackGateSucceeded', async () => {
      const { trackGateSucceeded } = await loadAnalytics();
      trackGateSucceeded(1500, 85, { mouseMoved: true });
      expect(captureMock).toHaveBeenCalledWith('email_protection_gate_succeeded', {
        holdDuration: 1500, score: 85, signals: { mouseMoved: true },
      });
    });

    it('trackGateBlocked', async () => {
      const { trackGateBlocked } = await loadAnalytics();
      trackGateBlocked(1500, 30, { mouseMoved: false });
      expect(captureMock).toHaveBeenCalledWith('email_protection_gate_blocked', {
        holdDuration: 1500, score: 30, signals: { mouseMoved: false },
      });
    });

    it('trackEmailRevealed', async () => {
      const { trackEmailRevealed } = await loadAnalytics();
      trackEmailRevealed(90);
      expect(captureMock).toHaveBeenCalledWith('email_protection_email_revealed', { score: 90 });
    });

    it('trackEmailCopied', async () => {
      const { trackEmailCopied } = await loadAnalytics();
      trackEmailCopied();
      expect(captureMock).toHaveBeenCalledWith('email_protection_email_copied', undefined);
    });

    it('trackEmailSent', async () => {
      const { trackEmailSent } = await loadAnalytics();
      trackEmailSent();
      expect(captureMock).toHaveBeenCalledWith('email_protection_email_sent', undefined);
    });

    it('trackEmailTimeout', async () => {
      const { trackEmailTimeout } = await loadAnalytics();
      trackEmailTimeout(true);
      expect(captureMock).toHaveBeenCalledWith('email_protection_email_timeout', { wasInteracted: true });
    });

    it('trackHoneypotTriggered', async () => {
      const { trackHoneypotTriggered } = await loadAnalytics();
      trackHoneypotTriggered('focus');
      expect(captureMock).toHaveBeenCalledWith('email_protection_honeypot_triggered', { interactionType: 'focus' });
    });

    it('trackRateLimited', async () => {
      const { trackRateLimited } = await loadAnalytics();
      trackRateLimited(5);
      expect(captureMock).toHaveBeenCalledWith('email_protection_rate_limited', { attemptCount: 5 });
    });

    it('trackNoscriptFormSubmitted', async () => {
      const { trackNoscriptFormSubmitted } = await loadAnalytics();
      trackNoscriptFormSubmitted(false);
      expect(captureMock).toHaveBeenCalledWith('email_protection_noscript_form_submitted', { honeypotFilled: false });
    });
  });
});
