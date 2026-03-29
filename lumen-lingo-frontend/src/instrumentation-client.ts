import * as Sentry from '@sentry/nextjs';
import { getConsentPreferences } from '@/lib/cookie-consent';
import { isPrivacySignalActive } from '@/lib/gpc';

const gpcActive = isPrivacySignalActive();
const consent = getConsentPreferences();
const replayAllowed = !gpcActive && consent?.sessionReplay === true;

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 0.1,
  replaysSessionSampleRate: replayAllowed ? 0.1 : 0,
  replaysOnErrorSampleRate: replayAllowed ? 1.0 : 0,
  environment: process.env.NODE_ENV,
  integrations: replayAllowed ? [Sentry.replayIntegration({ maskAllText: true, blockAllMedia: true })] : [],
});

// When consent changes, dynamically toggle replay
if (typeof window !== 'undefined') {
  window.addEventListener('cookie-consent-change', () => {
    const updated = getConsentPreferences();
    const client = Sentry.getClient();
    if (!client) return;

    if (updated?.sessionReplay) {
      // Add replay integration if not already present
      if (!client.getIntegrationByName('Replay')) {
        client.addIntegration(Sentry.replayIntegration({ maskAllText: true, blockAllMedia: true }));
      }
    }
    // Note: Sentry SDK doesn't support removing integrations at runtime.
    // If user revokes consent, replay stops on next page load since
    // replaysSessionSampleRate will be 0 on re-init.
  });
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
