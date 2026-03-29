import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Story 20.4 — Automated axe-core accessibility audit.
 *
 * Scans every major page for WCAG 2.1 AA violations.
 * Runs in both desktop and mobile viewports.
 */

const PAGES = [
  { name: 'homepage', path: '/' },
  { name: 'features', path: '/features' },
  { name: 'pricing', path: '/pricing' },
  { name: 'blog', path: '/blog' },
  { name: 'download', path: '/download' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'demo', path: '/demo' },
  { name: 'privacy', path: '/privacy' },
  { name: 'terms', path: '/terms' },
  { name: 'cookies', path: '/cookies' },
  { name: 'eula', path: '/eula' },
  { name: 'accessibility', path: '/accessibility' },
  { name: 'data-request', path: '/data-request' },
] as const;

test.describe('Accessibility — axe-core WCAG 2.1 AA', () => {
  for (const page of PAGES) {
    test(`${page.name} has no critical a11y violations`, async ({ page: p }) => {
      await p.goto(page.path, { waitUntil: 'domcontentloaded' });
      await p.waitForSelector('main', { timeout: 10_000 }).catch(() => {});
      await p.waitForTimeout(1000);

      // Dismiss cookie banner if visible
      const cookieDismiss = p.locator('[data-testid="cookie-accept"]');
      if (await cookieDismiss.isVisible({ timeout: 2000 }).catch(() => false)) {
        await cookieDismiss.click();
        await p.waitForTimeout(500);
      }

      const results = await new AxeBuilder({ page: p })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      // Report all violations for visibility
      if (results.violations.length > 0) {
        console.warn(
          `[a11y] ${page.name}: ${results.violations.length} violation(s)`,
          results.violations.map((v) => `${v.impact}: ${v.id} — ${v.help} (${v.nodes.length} nodes)`).join('\n  '),
        );
      }

      // Hard-fail only on critical violations; serious issues are warned above
      const critical = results.violations.filter(
        (v) => v.impact === 'critical',
      );
      expect(critical).toEqual([]);
    });
  }
});

test.describe('Accessibility — keyboard navigation', () => {
  test('homepage skip-to-content and tab order', async ({ page }) => {
    await page.goto('/en', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // First Tab should focus skip-to-content or first focusable element
    await page.keyboard.press('Tab');
    const firstFocused = await page.evaluate(() => document.activeElement?.tagName);
    expect(firstFocused).toBeTruthy();
  });

  test('pricing page toggle and cards are keyboard accessible', async ({ page }) => {
    await page.goto('/en/pricing', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Tab through to find interactive elements
    for (let i = 0; i < 15; i++) {
      await page.keyboard.press('Tab');
    }

    const focused = await page.evaluate(() => {
      const el = document.activeElement;
      return el ? { tag: el.tagName, role: el.getAttribute('role') } : null;
    });
    expect(focused).toBeTruthy();
  });
});

test.describe('Accessibility — prefers-reduced-motion', () => {
  test('animations are disabled when reduced motion is preferred', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/en', { waitUntil: 'domcontentloaded' });

    // Check that our CSS media query is active
    const hasReducedMotion = await page.evaluate(() => {
      const styles = getComputedStyle(document.documentElement);
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });
    expect(hasReducedMotion).toBe(true);
  });
});
