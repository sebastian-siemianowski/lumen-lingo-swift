import { test, expect } from '@playwright/test';

/**
 * Story 20.1 AC 7 — Visual regression baseline.
 *
 * Captures full-page screenshots at desktop (1440×900) and mobile (375×812)
 * for every major page. Playwright's toHaveScreenshot will create baseline
 * images on the first run and compare against them on subsequent runs.
 */

const PAGES = [
  { name: 'homepage', path: '/en' },
  { name: 'features', path: '/en/features' },
  { name: 'pricing', path: '/en/pricing' },
  { name: 'blog', path: '/en/blog' },
  { name: 'download', path: '/en/download' },
  { name: 'about', path: '/en/about' },
  { name: 'contact', path: '/en/contact' },
  { name: 'demo', path: '/en/demo' },
  { name: 'privacy', path: '/en/privacy' },
  { name: 'terms', path: '/en/terms' },
] as const;

const VIEWPORTS = [
  { label: 'desktop', width: 1440, height: 900 },
  { label: 'mobile', width: 375, height: 812 },
] as const;

for (const viewport of VIEWPORTS) {
  test.describe(`Visual regression — ${viewport.label} (${viewport.width}px)`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const page of PAGES) {
      test(`${page.name} — full page screenshot`, async ({ page: p }) => {
        await p.goto(page.path, { waitUntil: 'networkidle' });

        // Wait for animations to settle
        await p.waitForTimeout(1500);

        // Dismiss cookie banner if visible
        const cookieDismiss = p.locator('[data-testid="cookie-accept"]');
        if (await cookieDismiss.isVisible({ timeout: 2000 }).catch(() => false)) {
          await cookieDismiss.click();
          await p.waitForTimeout(500);
        }

        await expect(p).toHaveScreenshot(
          `${viewport.label}-${page.name}.png`,
          {
            fullPage: true,
            maxDiffPixelRatio: 0.01,
            animations: 'disabled',
          },
        );
      });
    }
  });
}
