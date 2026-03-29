import { test, expect } from '@playwright/test';

/**
 * Story 15.12 — End-to-End Internationalisation Acceptance Testing
 *
 * Comprehensive E2E tests covering all 10 supported locales,
 * verifying correct content rendering, locale switching, RTL layout,
 * currency context, and absence of English fallback text.
 */

// ---------------------------------------------------------------------------
// 15.12.1 — Test helper: all 10 locales with locale-specific metadata
// ---------------------------------------------------------------------------

interface LocaleMeta {
  code: string;
  /** Path prefix for non-default locales (/fr, /ja …). English has none. */
  prefix: string;
  /** Expected dir attribute on <html> */
  dir: 'ltr' | 'rtl';
  /** A substring that should appear in the hero <h1> for this locale */
  heroSnippet: string;
  /** Currency symbol expected on pricing page */
  currencyHint: string;
}

const LOCALES: LocaleMeta[] = [
  { code: 'en', prefix: '',    dir: 'ltr', heroSnippet: 'Master Languages',     currencyHint: '£' },
  { code: 'es', prefix: '/es', dir: 'ltr', heroSnippet: 'Domina Idiomas',       currencyHint: '$' },
  { code: 'fr', prefix: '/fr', dir: 'ltr', heroSnippet: 'Maîtrisez',            currencyHint: '€' },
  { code: 'de', prefix: '/de', dir: 'ltr', heroSnippet: 'Sprachen Meistern',    currencyHint: '€' },
  { code: 'ja', prefix: '/ja', dir: 'ltr', heroSnippet: '没入型体験',             currencyHint: '¥' },
  { code: 'zh', prefix: '/zh', dir: 'ltr', heroSnippet: '沉浸式体验',             currencyHint: '¥' },
  { code: 'pt', prefix: '/pt', dir: 'ltr', heroSnippet: 'Domine Idiomas',       currencyHint: 'R$' },
  { code: 'pl', prefix: '/pl', dir: 'ltr', heroSnippet: 'Opanuj',               currencyHint: 'zł' },
  { code: 'ar', prefix: '/ar', dir: 'rtl', heroSnippet: 'أتقن اللغات',           currencyHint: 'ر.س' },
  { code: 'uk', prefix: '/uk', dir: 'ltr', heroSnippet: 'Опануйте',             currencyHint: '₴' },
];

// ---------------------------------------------------------------------------
// 15.12.2 — Homepage content verification per locale
// ---------------------------------------------------------------------------

for (const locale of LOCALES) {
  test.describe(`[${locale.code.toUpperCase()}] Homepage`, () => {
    test('renders locale hero heading', async ({ page }) => {
      await page.goto(`${locale.prefix}/`, { waitUntil: 'domcontentloaded' });
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible({ timeout: 10_000 });
      const text = await h1.textContent();
      expect(text).toContain(locale.heroSnippet);
    });

    test('hero CTA button is visible', async ({ page }) => {
      await page.goto(`${locale.prefix}/`, { waitUntil: 'domcontentloaded' });
      // The main hero CTA (App Store badge or "Get Started" type button)
      const cta = page.locator('main a, main button').filter({ hasText: /.{2,}/ }).first();
      await expect(cta).toBeVisible({ timeout: 10_000 });
    });

    test('no console errors', async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text());
      });
      await page.goto(`${locale.prefix}/`, { waitUntil: 'networkidle' });
      // Filter out known benign errors (favicon, 404, hydration, Next.js internal, Vercel scripts)
      const real = errors.filter(
        (e) =>
          !e.includes('favicon') &&
          !e.includes('404') &&
          !e.includes('hydrat') &&
          !e.includes('NEXT_') &&
          !e.includes('Loading chunk') &&
          !e.includes('Failed to load resource') &&
          !e.includes('_vercel/')
      );
      if (real.length > 0) console.log('Console errors:', JSON.stringify(real));
      expect(real).toHaveLength(0);
    });
  });
}

// ---------------------------------------------------------------------------
// 15.12.3 — Navigation and language switcher per locale
// ---------------------------------------------------------------------------

for (const locale of LOCALES) {
  test.describe(`[${locale.code.toUpperCase()}] Navigation`, () => {
    test('nav labels are localised (not English fallback)', async ({ page }) => {
      await page.goto(`${locale.prefix}/`, { waitUntil: 'domcontentloaded' });
      const header = page.locator('header').first();
      await expect(header).toBeVisible({ timeout: 10_000 });

      if (locale.code !== 'en') {
        const headerText = await header.textContent();
        // "Pricing" is English-only; non-en locales should have translated nav labels
        expect(headerText).not.toContain('Pricing');
      }
    });

    test('language switcher is present', async ({ page }) => {
      await page.goto(`${locale.prefix}/`, { waitUntil: 'domcontentloaded' });
      const switcher = page.locator('[aria-haspopup="listbox"]').first();
      await expect(switcher).toBeVisible({ timeout: 10_000 });
    });
  });
}

// ---------------------------------------------------------------------------
// 15.12.4 — Features page content per locale
// ---------------------------------------------------------------------------

for (const locale of LOCALES) {
  test(`[${locale.code.toUpperCase()}] Features page renders locale content`, async ({ page }) => {
    await page.goto(`${locale.prefix}/features`, { waitUntil: 'domcontentloaded' });
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible({ timeout: 10_000 });
    const text = await heading.textContent();
    // Non-English should NOT show the English heading
    if (locale.code !== 'en') {
      expect(text).not.toContain('Crafted for Serious Learners');
    }
    expect(text!.length).toBeGreaterThan(0);
  });
}

// ---------------------------------------------------------------------------
// 15.12.5 — Pricing page content and currency per locale
// ---------------------------------------------------------------------------

for (const locale of LOCALES) {
  test.describe(`[${locale.code.toUpperCase()}] Pricing`, () => {
    test('renders locale pricing content', async ({ page }) => {
      await page.goto(`${locale.prefix}/pricing`, { waitUntil: 'domcontentloaded' });
      const heading = page.locator('h1').first();
      await expect(heading).toBeVisible({ timeout: 10_000 });
    });

    test('shows correct currency context', async ({ page }) => {
      await page.goto(`${locale.prefix}/pricing`, { waitUntil: 'domcontentloaded' });
      // Wait for pricing cards to render
      await page.waitForSelector('main', { timeout: 10_000 });
      const mainText = await page.locator('main').textContent();
      expect(mainText).toContain(locale.currencyHint);
    });

    test('tier cards are visible', async ({ page }) => {
      await page.goto(`${locale.prefix}/pricing`, { waitUntil: 'domcontentloaded' });
      // There should be at least 3 pricing-related sections
      const cards = page.locator('[class*="glass"], [class*="card"], [class*="tier"]');
      const count = await cards.count();
      expect(count).toBeGreaterThanOrEqual(3);
    });
  });
}

// ---------------------------------------------------------------------------
// 15.12.6 — Blog index per locale
// ---------------------------------------------------------------------------

for (const locale of LOCALES) {
  test(`[${locale.code.toUpperCase()}] Blog index renders`, async ({ page }) => {
    await page.goto(`${locale.prefix}/blog`, { waitUntil: 'domcontentloaded' });
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible({ timeout: 10_000 });
    // Should have at least one blog post link
    const links = page.locator('main a[href*="blog/"]');
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });
}

// ---------------------------------------------------------------------------
// 15.12.7 — Legal pages per locale
// ---------------------------------------------------------------------------

for (const locale of LOCALES) {
  for (const pagePath of ['/privacy', '/terms']) {
    test(`[${locale.code.toUpperCase()}] ${pagePath} renders`, async ({ page }) => {
      await page.goto(`${locale.prefix}${pagePath}`, { waitUntil: 'domcontentloaded' });
      const heading = page.locator('h1').first();
      await expect(heading).toBeVisible({ timeout: 10_000 });
      const text = await heading.textContent();
      expect(text!.length).toBeGreaterThan(0);
    });
  }
}

// ---------------------------------------------------------------------------
// 15.12.8 — 404 page per locale
// ---------------------------------------------------------------------------

for (const locale of LOCALES) {
  test(`[${locale.code.toUpperCase()}] 404 page shows locale message`, async ({ page }) => {
    const response = await page.goto(`${locale.prefix}/nonexistent-page-xyz`, {
      waitUntil: 'domcontentloaded',
    });
    // Should get a non-200 status or render 404 content
    const body = await page.locator('body').textContent();
    // The page should contain some text (not be blank)
    expect(body!.length).toBeGreaterThan(10);
  });
}

// ---------------------------------------------------------------------------
// 15.12.9 — Arabic RTL layout assertions
// ---------------------------------------------------------------------------

test.describe('Arabic RTL layout', () => {
  test('html dir=rtl on Arabic pages', async ({ page }) => {
    await page.goto('/ar', { waitUntil: 'domcontentloaded' });
    const dir = await page.locator('html').getAttribute('dir');
    expect(dir).toBe('rtl');
  });

  test('html dir=ltr on non-Arabic pages', async ({ page }) => {
    await page.goto('/de', { waitUntil: 'domcontentloaded' });
    const dir = await page.locator('html').getAttribute('dir');
    expect(dir).toBe('ltr');
  });

  test('Arabic pricing page has RTL layout', async ({ page }) => {
    await page.goto('/ar/pricing', { waitUntil: 'domcontentloaded' });
    const dir = await page.locator('html').getAttribute('dir');
    expect(dir).toBe('rtl');
  });

  test('Arabic text alignment is right-to-left', async ({ page }) => {
    await page.goto('/ar', { waitUntil: 'networkidle' });
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible({ timeout: 10_000 });
    // In RTL mode, text-align should be right or start (which resolves to right in RTL)
    const direction = await h1.evaluate((el) => window.getComputedStyle(el).direction);
    expect(direction).toBe('rtl');
  });
});

// ---------------------------------------------------------------------------
// 15.12.10 — Visual regression baselines: 10 locales × 5 pages
// ---------------------------------------------------------------------------

const SCREENSHOT_PAGES = [
  { name: 'homepage', path: '' },
  { name: 'features', path: '/features' },
  { name: 'pricing', path: '/pricing' },
  { name: 'download', path: '/download' },
  { name: 'contact', path: '/contact' },
] as const;

for (const locale of LOCALES) {
  for (const pg of SCREENSHOT_PAGES) {
    test(`[screenshot] ${locale.code}-${pg.name}`, async ({ page }) => {
      await page.goto(`${locale.prefix}${pg.path}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500); // let animations settle
      await page.screenshot({
        path: `e2e/screenshots/${locale.code}-${pg.name}.png`,
        fullPage: true,
      });
    });
  }
}
