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
    await expect(page.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /blog/i })).toBeVisible();
  });

  test('hero CTA links to App Store', async ({ page }) => {
    await page.goto('/');
    const cta = page.getByRole('link', { name: /download|get started|app store/i }).first();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute('href', /apps\.apple\.com/);
  });

  test('navigates to pricing page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /pricing/i }).first().click();
    await page.waitForURL(/pricing/);
    await expect(page.locator('h1, h2').filter({ hasText: /pricing/i }).first()).toBeVisible();
  });

  test('navigates to blog page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /blog/i }).first().click();
    await page.waitForURL(/blog/);
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
