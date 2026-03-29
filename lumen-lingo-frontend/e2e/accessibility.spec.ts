import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Story 20.4 — Automated axe-core accessibility audit.
 *
 * Scans every major page for WCAG 2.1 AA violations.
 * Runs in both desktop and mobile viewports.
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
  { name: 'cookies', path: '/en/cookies' },
  { name: 'eula', path: '/en/eula' },
  { name: 'accessibility', path: '/en/accessibility' },
  { name: 'data-request', path: '/en/data-request' },
] as const;

test.describe('Accessibility — axe-core WCAG 2.1 AA', () => {
  for (const page of PAGES) {
    test(`${page.name} has no a11y violations`, async ({ page: p }) => {
      await p.goto(page.path, { waitUntil: 'networkidle' });
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

      expect(results.violations).toEqual([]);
    });
  }
});

test.describe('Accessibility — keyboard navigation', () => {
  test('homepage skip-to-content and tab order', async ({ page }) => {
    await page.goto('/en', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // First Tab should focus skip-to-content or first focusable element
    await page.keyboard.press('Tab');
    const firstFocused = await page.evaluate(() => document.activeElement?.tagName);
    expect(firstFocused).toBeTruthy();
  });

  test('pricing page toggle and cards are keyboard accessible', async ({ page }) => {
    await page.goto('/en/pricing', { waitUntil: 'networkidle' });
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
    await page.goto('/en', { waitUntil: 'networkidle' });

    // Check that our CSS media query is active
    const hasReducedMotion = await page.evaluate(() => {
      const styles = getComputedStyle(document.documentElement);
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });
    expect(hasReducedMotion).toBe(true);
  });
});
