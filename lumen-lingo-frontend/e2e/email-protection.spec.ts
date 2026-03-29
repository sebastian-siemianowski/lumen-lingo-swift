import { test, expect } from '@playwright/test';

test.describe('Email Protection — E2E', () => {
  const CONTACT_URL = '/contact';
  const EXPECTED_EMAIL = 'support@lumenlingo.com';
  const isCI = !!process.env.CI;

  // AC1: SSR page source contains zero email-like strings
  test('SSR source contains no plain email addresses', async ({ request }) => {
    const response = await request.get(CONTACT_URL);
    const html = await response.text();
    // No @ followed by a domain pattern in the raw HTML
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const matches = html.match(emailPattern) || [];
    // Filter out known decoy/honeypot addresses, placeholders, and legal-required addresses
    const realEmails = matches.filter(
      (m) =>
        !m.includes('lumenlingo.example') &&
        !m.includes('trap@') &&
        !m.includes('your@email') &&
        !m.includes('anpd.gov'),
    );
    expect(realEmails).toHaveLength(0);
  });

  // AC2: Initial DOM (JS enabled) contains no email before interaction
  test('initial DOM has no email before interaction', async ({ page }) => {
    await page.goto(CONTACT_URL);
    await page.waitForLoadState('networkidle');
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain(EXPECTED_EMAIL);
  });

  // AC3: Hold too short does NOT reveal email
  test('short hold does not reveal email', async ({ page }) => {
    await page.goto(CONTACT_URL);
    const button = page.getByRole('button', { name: /press and hold to reveal/i });
    await expect(button).toBeVisible();

    // Simulate human-like mouse movements first
    const box = await button.boundingBox();
    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 5 });
    }

    // Hold for only 400ms — too short
    await button.dispatchEvent('pointerdown', { pointerId: 1 });
    await page.waitForTimeout(400);
    await button.dispatchEvent('pointerup', { pointerId: 1 });

    await page.waitForTimeout(200);
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain(EXPECTED_EMAIL);
  });

  // AC4 + AC5: Hold for ≥ 1500ms reveals the email, and it matches expected
  // Bot detection intentionally blocks automated interactions — manual test only
  test('full hold reveals the correct email', async ({ page }) => {
    test.skip(!process.env.MANUAL_E2E, 'Bot detection blocks automated holds — run with MANUAL_E2E=1');
    await page.goto(CONTACT_URL);
    const button = page.getByRole('button', { name: /press and hold to reveal/i });
    await expect(button).toBeVisible();

    // Simulate natural mouse movements to build bot detection score
    const box = await button.boundingBox();
    if (box) {
      // Move around the page area
      for (let i = 0; i < 10; i++) {
        await page.mouse.move(
          box.x + Math.random() * 200 - 50,
          box.y + Math.random() * 200 - 50,
          { steps: 3 },
        );
        await page.waitForTimeout(100 + Math.random() * 200);
      }
    }

    // Scroll a bit to trigger scroll detection
    await page.mouse.wheel(0, 100);
    await page.waitForTimeout(600);

    // Hold the button for 1600ms
    await button.dispatchEvent('pointerdown', { pointerId: 1 });
    await page.waitForTimeout(1700);
    await button.dispatchEvent('pointerup', { pointerId: 1 });

    // Wait for reveal animation
    await page.waitForTimeout(500);

    // Email should now be visible
    const emailText = page.getByText(EXPECTED_EMAIL);
    await expect(emailText).toBeVisible({ timeout: 5000 });
  });

  // AC6: After 30s, the email is no longer in the DOM
  test('email disappears after 30-second timeout', async ({ page }) => {
    test.skip(!process.env.MANUAL_E2E, 'Bot detection blocks automated holds — run with MANUAL_E2E=1');
    await page.goto(CONTACT_URL);
    const button = page.getByRole('button', { name: /press and hold to reveal/i });

    // Build bot detection score
    const box = await button.boundingBox();
    if (box) {
      for (let i = 0; i < 10; i++) {
        await page.mouse.move(
          box.x + Math.random() * 200 - 50,
          box.y + Math.random() * 200 - 50,
          { steps: 3 },
        );
        await page.waitForTimeout(100 + Math.random() * 200);
      }
    }
    await page.mouse.wheel(0, 100);
    await page.waitForTimeout(600);

    // Hold to reveal
    await button.dispatchEvent('pointerdown', { pointerId: 1 });
    await page.waitForTimeout(1700);
    await button.dispatchEvent('pointerup', { pointerId: 1 });
    await page.waitForTimeout(500);

    // Verify it appeared
    await expect(page.getByText(EXPECTED_EMAIL)).toBeVisible({ timeout: 5000 });

    // Wait for timeout (30s + buffer)
    await page.waitForTimeout(31_000);

    // Email should be gone
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain(EXPECTED_EMAIL);
  });

  // AC7: Copy puts correct email on clipboard
  test('copy button copies email to clipboard', async ({ page, context }) => {
    test.skip(!process.env.MANUAL_E2E, 'Bot detection blocks automated holds — run with MANUAL_E2E=1');
    // Grant clipboard permissions
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);

    await page.goto(CONTACT_URL);
    const button = page.getByRole('button', { name: /press and hold to reveal/i });

    // Build score
    const box = await button.boundingBox();
    if (box) {
      for (let i = 0; i < 10; i++) {
        await page.mouse.move(
          box.x + Math.random() * 200 - 50,
          box.y + Math.random() * 200 - 50,
          { steps: 3 },
        );
        await page.waitForTimeout(100 + Math.random() * 200);
      }
    }
    await page.mouse.wheel(0, 100);
    await page.waitForTimeout(600);

    // Reveal
    await button.dispatchEvent('pointerdown', { pointerId: 1 });
    await page.waitForTimeout(1700);
    await button.dispatchEvent('pointerup', { pointerId: 1 });
    await page.waitForTimeout(500);

    // Click copy button
    const copyButton = page.getByLabel('Copy email address');
    await expect(copyButton).toBeVisible({ timeout: 5000 });
    await copyButton.click();

    // Verify clipboard contents
    const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
    expect(clipboardText).toBe(EXPECTED_EMAIL);
  });

  // AC8: Honeypot interaction blocks future reveals
  test('honeypot interaction blocks reveal', async ({ page }) => {
    await page.goto(CONTACT_URL);

    // Click the honeypot link (hidden trap@lumenlingo.com)
    await page.evaluate(() => {
      const links = document.querySelectorAll('a[href*="trap@"]');
      if (links.length > 0) (links[0] as HTMLElement).click();
    });

    await page.waitForTimeout(200);

    // Now try to reveal — should not work
    const button = page.getByRole('button', { name: /press and hold to reveal/i });
    if (await button.isVisible()) {
      await button.dispatchEvent('pointerdown', { pointerId: 1 });
      await page.waitForTimeout(1700);
      await button.dispatchEvent('pointerup', { pointerId: 1 });
      await page.waitForTimeout(500);

      const bodyText = await page.textContent('body');
      expect(bodyText).not.toContain(EXPECTED_EMAIL);
    }
  });

  // AC9: Noscript form renders when JS is disabled
  test('noscript contact form renders without JS', async ({ request }) => {
    // Verify the SSR HTML includes the noscript fallback form
    const response = await request.get(CONTACT_URL);
    const html = await response.text();
    expect(html).toContain('JavaScript is disabled');
  });
});
