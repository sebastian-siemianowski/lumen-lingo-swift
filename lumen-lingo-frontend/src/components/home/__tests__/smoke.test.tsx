/**
 * Smoke tests for every homepage component that uses useTranslations.
 *
 * Each component is rendered inside NextIntlClientProvider with real EN
 * messages.  If any inner component (or child function-component) forgets
 * to call useTranslations — or references `t` from an outer closure it
 * doesn't have access to — the render will throw and the test will fail.
 *
 * This suite exists because QRPlaceholder inside CTABanner once referenced
 * a `t` variable that was only defined in the parent CTABanner scope, causing
 * "t is not defined" at runtime.
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';

// ── Mocks ──────────────────────────────────────────────────────────────────
vi.mock('@/lib/analytics', () => ({
  trackEvent: vi.fn(),
  getPersistedUtmParams: vi.fn(() => ({})),
}));

vi.mock('@/lib/appStoreUrl', () => ({
  getAppStoreUrl: vi.fn(() => 'https://apps.apple.com/test'),
  CAMPAIGNS: {},
}));

vi.mock('@/components/background', () => ({
  CosmicGradient: () => <div data-testid="cosmic-gradient" />,
}));

afterEach(cleanup);

// ── Test helper ────────────────────────────────────────────────────────────
function renderWithIntl(ui: React.ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {ui}
    </NextIntlClientProvider>,
  );
}

// ── Tests ──────────────────────────────────────────────────────────────────
describe('Homepage components smoke tests', () => {
  it('HeroSection renders without crashing', async () => {
    const { HeroSection } = await import('../hero-section');
    renderWithIntl(<HeroSection />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('FeatureShowcase renders without crashing', async () => {
    const { FeatureShowcase } = await import('../feature-showcase');
    renderWithIntl(<FeatureShowcase />);
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('ScreenshotGallery renders without crashing', async () => {
    const { ScreenshotGallery } = await import('../screenshot-gallery');
    renderWithIntl(<ScreenshotGallery />);
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('DifferentiatorSection renders without crashing', async () => {
    const { DifferentiatorSection } = await import('../differentiator-section');
    renderWithIntl(<DifferentiatorSection />);
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('CTABanner renders without crashing (catches missing useTranslations in children)', async () => {
    const { CTABanner } = await import('../cta-banner');
    renderWithIntl(<CTABanner />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});
