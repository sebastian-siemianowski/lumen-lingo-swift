import { test, expect } from '@playwright/test';

/**
 * Story 13.3 — i18n visual regression snapshots.
 *
 * Uses Playwright's toHaveScreenshot() for pixel-level comparison.
 * Covers 4 pages × 3 locales = 12 baselines, including RTL (ar).
 *
 * Run:  npx playwright test e2e/i18n-visual-snapshots.spec.ts --update-snapshots
 * to generate initial baselines.
 */

const MATRIX: { page: string; path: string; locales: string[] }[] = [
  { page: 'home', path: '', locales: ['en', 'ar', 'ja'] },
  { page: 'pricing', path: '/pricing', locales: ['en', 'de', 'ja'] },
  { page: 'features', path: '/features', locales: ['en', 'ar', 'zh'] },
  { page: 'blog', path: '/blog', locales: ['en', 'es', 'uk'] },
];

for (const { page: pageName, path, locales } of MATRIX) {
  for (const locale of locales) {
    test(`${pageName} — ${locale} visual snapshot`, async ({ page }) => {
      await page.goto(`/${locale}${path}`, { waitUntil: 'networkidle' });
      await page.waitForSelector('main', { timeout: 10_000 });

      // Disable animations for deterministic snapshots
      await page.addStyleTag({
        content: `*, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }`,
      });

      // Wait for any fonts/images
      await page.waitForTimeout(500);

      await expect(page).toHaveScreenshot(`${pageName}-${locale}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });
  }
}
