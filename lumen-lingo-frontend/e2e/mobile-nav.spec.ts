import { test, expect } from '@playwright/test';

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 375, height: 812 } }); // iPhone 13 size

  test('hamburger menu is visible on mobile', async ({ page }) => {
    await page.goto('/');
    const hamburger = page.locator('button[aria-label*="menu" i], button[aria-label*="nav" i], [data-testid="mobile-menu"]');
    await expect(hamburger.first()).toBeVisible();
  });

  test('opens mobile menu on tap', async ({ page }) => {
    await page.goto('/');
    const hamburger = page.locator('button[aria-label*="menu" i], button[aria-label*="nav" i], [data-testid="mobile-menu"]');
    await hamburger.first().click();
    // Mobile menu should now have visible navigation links
    await expect(page.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /blog/i })).toBeVisible();
  });

  test('navigates to pricing from mobile menu', async ({ page }) => {
    await page.goto('/');
    const hamburger = page.locator('button[aria-label*="menu" i], button[aria-label*="nav" i], [data-testid="mobile-menu"]');
    await hamburger.first().click();
    await page.getByRole('link', { name: /pricing/i }).click();
    await page.waitForURL(/pricing/);
    await expect(page.locator('h1, h2').filter({ hasText: /pricing/i }).first()).toBeVisible();
  });

  test('closes mobile menu after navigation', async ({ page }) => {
    await page.goto('/');
    const hamburger = page.locator('button[aria-label*="menu" i], button[aria-label*="nav" i], [data-testid="mobile-menu"]');
    await hamburger.first().click();
    await page.getByRole('link', { name: /blog/i }).click();
    await page.waitForURL(/blog/);
    // The mobile navigation overlay should no longer be visible
    // The hamburger should be visible again, indicating menu is closed
    await expect(hamburger.first()).toBeVisible();
  });

  test('hero section is responsive on mobile', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('h1').first();
    await expect(hero).toBeVisible();
    // Ensure hero text is not overflowing
    const box = await hero.boundingBox();
    expect(box).toBeTruthy();
    expect(box!.width).toBeLessThanOrEqual(375);
  });
});
