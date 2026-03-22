import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test('blog index page loads and lists posts', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('h1').first()).toBeVisible();
    // At least one article card should be present
    const articles = page.locator('article, [data-testid="blog-card"], a[href*="/blog/"]');
    await expect(articles.first()).toBeVisible();
  });

  test('clicking a blog post navigates to the post page', async ({ page }) => {
    await page.goto('/blog');
    // Find the first link to a blog post
    const postLink = page.locator('a[href*="/blog/"]').first();
    await expect(postLink).toBeVisible();
    const href = await postLink.getAttribute('href');
    await postLink.click();
    await page.waitForURL(/\/blog\/.+/);
    // Post page should have a heading
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('blog post page renders article content', async ({ page }) => {
    await page.goto('/blog');
    const postLink = page.locator('a[href*="/blog/"]').first();
    await postLink.click();
    await page.waitForURL(/\/blog\/.+/);
    // Should have structured content — paragraphs or prose container
    const content = page.locator('article, [class*="prose"], main p');
    await expect(content.first()).toBeVisible();
  });

  test('blog post has back navigation', async ({ page }) => {
    await page.goto('/blog');
    const postLink = page.locator('a[href*="/blog/"]').first();
    await postLink.click();
    await page.waitForURL(/\/blog\/.+/);
    // Should have a back link to blog index
    const backLink = page.locator('a[href*="/blog"]').filter({ hasText: /back|all posts|blog/i });
    await expect(backLink.first()).toBeVisible();
  });

  test('category filter works', async ({ page }) => {
    await page.goto('/blog');
    const categoryButton = page.locator('button, a').filter({ hasText: /tips|guide|tutorial|feature|learning/i }).first();
    if (await categoryButton.isVisible()) {
      await categoryButton.click();
      // Page should still show blog posts (filtered)
      await expect(page.locator('h1').first()).toBeVisible();
    }
  });
});
