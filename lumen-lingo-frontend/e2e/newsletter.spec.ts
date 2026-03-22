import { test, expect } from '@playwright/test';

test.describe('Newsletter Signup', () => {
  test('newsletter form is visible on homepage', async ({ page }) => {
    await page.goto('/');
    const emailInput = page.getByRole('textbox', { name: /email/i });
    await expect(emailInput).toBeVisible();
  });

  test('shows validation error for empty submit', async ({ page }) => {
    await page.goto('/');
    const subscribeButton = page.getByRole('button', { name: /subscribe/i });
    await subscribeButton.click();
    await expect(page.getByRole('alert')).toBeVisible();
  });

  test('shows validation error for invalid email', async ({ page }) => {
    await page.goto('/');
    const emailInput = page.getByRole('textbox', { name: /email/i });
    await emailInput.fill('not-an-email');
    await page.getByRole('button', { name: /subscribe/i }).click();
    await expect(page.getByRole('alert')).toBeVisible();
  });

  test('submits valid email via API', async ({ page }) => {
    // Intercept the API call
    await page.route('**/api/newsletter', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });

    await page.goto('/');
    const emailInput = page.getByRole('textbox', { name: /email/i });
    await emailInput.fill('test@example.com');
    await page.getByRole('button', { name: /subscribe/i }).click();
    // Should show success message
    await expect(page.getByText(/welcome|community|inbox|thank/i)).toBeVisible({ timeout: 5000 });
  });

  test('shows error on server failure', async ({ page }) => {
    await page.route('**/api/newsletter', async (route) => {
      await route.fulfill({
        status: 429,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Too many requests' }),
      });
    });

    await page.goto('/');
    const emailInput = page.getByRole('textbox', { name: /email/i });
    await emailInput.fill('test@example.com');
    await page.getByRole('button', { name: /subscribe/i }).click();
    await expect(page.getByRole('alert')).toBeVisible({ timeout: 5000 });
  });
});
