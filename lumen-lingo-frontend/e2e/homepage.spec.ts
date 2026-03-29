import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads and shows hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/LumenLingo/i);
    // Hero heading should be visible
    const hero = page.locator('h1').first();
    await expect(hero).toBeVisible();
  });

  test('renders navigation links', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation')).toBeVisible();
    // Nav links exist — check by href since text is localised
    await expect(page.locator('nav a[href*="/pricing"]').first()).toBeVisible();
    await expect(page.locator('nav a[href*="/blog"]').first()).toBeVisible();
  });

  test('hero CTA links to App Store or share page', async ({ page }) => {
    await page.goto('/');
    const cta = page.getByRole('link', { name: /download|get started|app store|coming soon|launching soon/i }).first();
    await expect(cta).toBeVisible();
    // Pre-launch: CTA may link to /share or /launching-soon; post-launch: apps.apple.com
    await expect(cta).toHaveAttribute('href', /apps\.apple\.com|\/share|\/launching-soon/);
  });

  test('navigates to pricing page', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav a[href*="/pricing"]').first().click();
    await expect(page).toHaveURL(/pricing/, { timeout: 15_000 });
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('navigates to blog page', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav a[href*="/blog"]').first().click();
    await expect(page).toHaveURL(/blog/, { timeout: 15_000 });
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('footer is present with copyright', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText(/LumenLingo|©/);
  });

  test('Smart App Banner meta tag is present', async ({ page }) => {
    await page.goto('/');
    const meta = page.locator('meta[name="apple-itunes-app"]');
    await expect(meta).toHaveCount(1);
  });
});
