import { test, expect } from '@playwright/test';

test.describe('Pricing Page', () => {
  test('loads and displays pricing heading', async ({ page }) => {
    await page.goto('/pricing');
    await expect(page.locator('h1, h2').filter({ hasText: /pricing/i }).first()).toBeVisible();
  });

  test('shows all tier cards', async ({ page }) => {
    await page.goto('/pricing');
    // Should have at least 3 pricing tiers visible
    await expect(page.getByText(/free/i).first()).toBeVisible();
    await expect(page.getByText(/pro/i).first()).toBeVisible();
    await expect(page.getByText(/elite/i).first()).toBeVisible();
  });

  test('pricing CTA links to App Store', async ({ page }) => {
    await page.goto('/pricing');
    const ctaLinks = page.locator('a[href*="apps.apple.com"]');
    const count = await ctaLinks.count();
    expect(count).toBeGreaterThanOrEqual(3);
    for (let i = 0; i < count; i++) {
      await expect(ctaLinks.nth(i)).toHaveAttribute('target', '_blank');
      await expect(ctaLinks.nth(i)).toHaveAttribute('rel', /noopener/);
    }
  });

  test('FAQ section is present', async ({ page }) => {
    await page.goto('/pricing');
    await expect(page.getByText(/frequently asked/i)).toBeVisible();
  });

  test('FAQ accordion expands on click', async ({ page }) => {
    await page.goto('/pricing');
    const faqButton = page.locator('button[aria-expanded]').first();
    await expect(faqButton).toHaveAttribute('aria-expanded', 'false');
    await faqButton.click();
    await expect(faqButton).toHaveAttribute('aria-expanded', 'true');
  });

  test('"Most Popular" badge appears on one card', async ({ page }) => {
    await page.goto('/pricing');
    await expect(page.getByText('Most Popular')).toBeVisible();
  });
});
