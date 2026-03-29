import { test, expect, type Page } from '@playwright/test';

/**
 * Stories 15.1.8 & 15.2.9 — Visual regression test for all non-EN locales.
 * Checks every key page for horizontal overflow, text truncation,
 * and captures screenshots for manual comparison.
 */

const LOCALES = ['fr', 'ja', 'de', 'es', 'pl', 'ar', 'zh', 'uk'] as const;
const PAGES = [
  { name: 'homepage', path: '' },
  { name: 'features', path: '/features' },
  { name: 'pricing', path: '/pricing' },
  { name: 'blog', path: '/blog' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
] as const;

/**
 * Checks that no element on the page causes horizontal overflow beyond viewport.
 */
async function checkNoHorizontalOverflow(page: Page) {
  const overflowInfo = await page.evaluate(() => {
    const viewportWidth = document.documentElement.clientWidth;
    const allElements = document.querySelectorAll('*');
    const overflowing: string[] = [];

    for (const el of allElements) {
      const rect = el.getBoundingClientRect();
      // Element extends beyond viewport right edge by more than 2px (allow tiny rounding)
      if (rect.right > viewportWidth + 2 && rect.width > 0) {
        const tag = el.tagName.toLowerCase();
        const cls = el.className?.toString().slice(0, 80) || '';
        const id = el.id ? `#${el.id}` : '';
        overflowing.push(`<${tag}${id}> class="${cls}" right=${Math.round(rect.right)} viewport=${viewportWidth}`);
      }
    }

    return {
      hasOverflow: document.documentElement.scrollWidth > viewportWidth + 2,
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth,
      overflowingElements: overflowing.slice(0, 10),
    };
  });

  return overflowInfo;
}

/**
 * Checks for text that appears to be truncated with ellipsis
 * or overflowing its container.
 */
async function checkNoTextTruncation(page: Page) {
  const truncated = await page.evaluate(() => {
    const issues: string[] = [];
    const allElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, label');

    for (const el of allElements) {
      const style = window.getComputedStyle(el);
      // Check if text is clipped
      if (style.overflow === 'hidden' && style.textOverflow === 'ellipsis') {
        // If scrollWidth > clientWidth, text IS truncated
        if (el.scrollWidth > el.clientWidth + 1) {
          const text = el.textContent?.slice(0, 50) || '';
          const tag = el.tagName.toLowerCase();
          issues.push(`Truncated: <${tag}> "${text}..." (scroll=${el.scrollWidth} client=${el.clientWidth})`);
        }
      }
    }

    return issues.slice(0, 20);
  });

  return truncated;
}

for (const locale of LOCALES) {
  test.describe(`Visual regression — ${locale.toUpperCase()}`, () => {
    for (const { name, path } of PAGES) {
      test(`${name} — no layout overflow`, async ({ page }) => {
        const url = `/${locale}${path}`;
        await page.goto(url, { waitUntil: 'networkidle' });

        // Wait for content to be visible
        await page.waitForSelector('main', { timeout: 10_000 });

        // 1. Check no horizontal overflow
        const overflow = await checkNoHorizontalOverflow(page);
        if (overflow.hasOverflow) {
          console.warn(
            `[${locale}/${name}] Horizontal overflow detected:`,
            `scrollWidth=${overflow.scrollWidth} viewport=${overflow.viewportWidth}`,
            overflow.overflowingElements.join('\n  ')
          );
        }
        expect(overflow.hasOverflow, `Horizontal overflow on /${locale}${path}`).toBe(false);

        // 2. Check for text truncation
        const truncated = await checkNoTextTruncation(page);
        if (truncated.length > 0) {
          console.warn(`[${locale}/${name}] Text truncation detected:`, truncated.join('\n  '));
        }
        // Truncation is a warning, not a hard fail — some truncation may be intentional
        // We log it but don't assert on it

        // 3. Take full-page screenshot for manual review
        await page.screenshot({
          path: `e2e/screenshots/${locale}-${name}.png`,
          fullPage: true,
        });
      });
    }

    test('navigation renders correctly', async ({ page }) => {
      await page.goto(`/${locale}`, { waitUntil: 'networkidle' });

      // Header should be visible
      const header = page.locator('header').first();
      await expect(header).toBeVisible();

      // Footer should be visible
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();

      // Language switcher should exist
      const langSwitcher = page.locator('[aria-haspopup="listbox"]').first();
      await expect(langSwitcher).toBeVisible();
    });

    test('no English fallback text on homepage', async ({ page }) => {
      await page.goto(`/${locale}`, { waitUntil: 'networkidle' });

      // Check that the hero heading is NOT the English text
      const h1 = page.locator('h1').first();
      const h1Text = await h1.textContent();

      // The English headline — should NOT appear in translated pages
      expect(h1Text).not.toContain('Master Languages Through Immersive');
    });

    test(`mobile viewport — no overflow`, async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 }); // iPhone size
      await page.goto(`/${locale}`, { waitUntil: 'networkidle' });

      const overflow = await checkNoHorizontalOverflow(page);
      expect(overflow.hasOverflow, `Mobile horizontal overflow on /${locale}`).toBe(false);

      await page.screenshot({
        path: `e2e/screenshots/${locale}-mobile-homepage.png`,
        fullPage: true,
      });
    });
  });
}

test.describe('Arabic RTL layout', () => {
  test('html dir attribute is rtl', async ({ page }) => {
    await page.goto('/ar', { waitUntil: 'networkidle' });
    const dir = await page.locator('html').getAttribute('dir');
    expect(dir).toBe('rtl');
  });

  test('non-Arabic page is ltr', async ({ page }) => {
    await page.goto('/pl', { waitUntil: 'networkidle' });
    const dir = await page.locator('html').getAttribute('dir');
    expect(dir).toBe('ltr');
  });
});
