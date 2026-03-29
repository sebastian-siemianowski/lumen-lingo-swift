import { test, expect } from '@playwright/test';

/**
 * Story 5.4.6 — GPC & DNT signal detection E2E tests.
 *
 * Verifies that Global Privacy Control and Do-Not-Track signals are
 * detected, cookie consent is auto-rejected, the banner is suppressed,
 * and the preferences panel shows the GPC notice with disabled toggles.
 */

test.describe('Global Privacy Control (GPC)', () => {
  test('auto-rejects consent and hides banner when GPC is active', async ({ page }) => {
    // Inject navigator.globalPrivacyControl before any page scripts run
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'globalPrivacyControl', {
        get: () => true,
        configurable: true,
      });
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Wait for React hydration + useEffect to auto-reject consent
    await expect.poll(async () => {
      const raw = await page.evaluate(() => localStorage.getItem('ll_cookie_consent'));
      return raw !== null;
    }, { timeout: 15_000 }).toBeTruthy();

    // Banner should NOT be visible (GPC auto-rejects)
    const banner = page.locator('[role="dialog"][aria-label]');
    await expect(banner).not.toBeVisible();

    // Consent should be stored as reject-all
    const consent = await page.evaluate(() => {
      const raw = localStorage.getItem('ll_cookie_consent');
      return raw ? JSON.parse(raw) : null;
    });
    expect(consent).toBeTruthy();
    expect(consent.analytics).toBe(false);
    expect(consent.errorMonitoring).toBe(false);
    expect(consent.sessionReplay).toBe(false);
  });

  test('shows GPC notice in preferences panel', async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'globalPrivacyControl', {
        get: () => true,
        configurable: true,
      });
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Wait for React hydration + consent auto-reject
    await expect.poll(async () => {
      const raw = await page.evaluate(() => localStorage.getItem('ll_cookie_consent'));
      return raw !== null;
    }, { timeout: 15_000 }).toBeTruthy();

    // Open cookie settings via dispatching event 
    await page.evaluate(() => {
      window.dispatchEvent(new Event('open-cookie-settings'));
    });
    await page.waitForTimeout(300);
    await page.evaluate(() => {
      window.dispatchEvent(new Event('open-cookie-settings'));
    });

    // Preferences panel should appear with GPC notice
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible({ timeout: 5000 });

    // GPC notice text should be present (shield icon + message)
    await expect(dialog.getByText(/Global Privacy Control|GPC/)).toBeVisible();

    // Non-essential toggles should be disabled
    const analyticsToggle = dialog.locator('#consent-analytics');
    await expect(analyticsToggle).toBeDisabled();

    const replayToggle = dialog.locator('#consent-replay');
    await expect(replayToggle).toBeDisabled();
  });

  test('GPC overrides Accept All action', async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'globalPrivacyControl', {
        get: () => true,
        configurable: true,
      });
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Wait for React hydration + consent auto-reject
    await expect.poll(async () => {
      const raw = await page.evaluate(() => localStorage.getItem('ll_cookie_consent'));
      return raw !== null;
    }, { timeout: 15_000 }).toBeTruthy();

    // Open cookie settings
    await page.evaluate(() => {
      window.dispatchEvent(new Event('open-cookie-settings'));
    });
    await page.waitForTimeout(300);
    await page.evaluate(() => {
      window.dispatchEvent(new Event('open-cookie-settings'));
    });

    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible({ timeout: 5000 });

    // Click "Accept All" — should be overridden by GPC
    const acceptBtn = dialog.getByText(/Accept All/i);
    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
      // Dialog should remain open (showing GPC override)
      await expect(dialog).toBeVisible();
    }

    // Consent should still be reject-all
    const consent = await page.evaluate(() => {
      const raw = localStorage.getItem('ll_cookie_consent');
      return raw ? JSON.parse(raw) : null;
    });
    expect(consent).toBeTruthy();
    expect(consent.analytics).toBe(false);
    expect(consent.sessionReplay).toBe(false);
  });

  test('suppresses analytics tracking when GPC active', async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'globalPrivacyControl', {
        get: () => true,
        configurable: true,
      });
    });

    // Track whether Vercel analytics track() is called
    const trackCalls: string[] = [];
    await page.route('**/_vercel/insights/**', async (route) => {
      trackCalls.push(route.request().url());
      await route.fulfill({ status: 200, body: '{}' });
    });

    await page.goto('/pricing', { waitUntil: 'domcontentloaded' });
    // Allow time for any analytics scripts to fire
    await page.waitForTimeout(3000);

    // No analytics tracking calls should have been made
    expect(trackCalls).toHaveLength(0);
  });
});

test.describe('Do-Not-Track (DNT)', () => {
  test('auto-rejects consent when DNT is enabled', async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'doNotTrack', {
        get: () => '1',
        configurable: true,
      });
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Wait for React hydration + useEffect to auto-reject consent
    await expect.poll(async () => {
      const raw = await page.evaluate(() => localStorage.getItem('ll_cookie_consent'));
      return raw !== null;
    }, { timeout: 15_000 }).toBeTruthy();

    const banner = page.locator('[role="dialog"][aria-label]');
    await expect(banner).not.toBeVisible();

    // Consent should be stored as reject-all
    const consent = await page.evaluate(() => {
      const raw = localStorage.getItem('ll_cookie_consent');
      return raw ? JSON.parse(raw) : null;
    });
    expect(consent).toBeTruthy();
    expect(consent.analytics).toBe(false);
    expect(consent.sessionReplay).toBe(false);
  });
});

test.describe('Sec-GPC header detection', () => {
  test('middleware sets ll_gpc cookie when Sec-GPC header is present', async ({ page }) => {
    // Set Sec-GPC header for all requests
    await page.setExtraHTTPHeaders({ 'Sec-GPC': '1' });

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Check that the ll_gpc cookie was set by middleware
    const cookies = await page.context().cookies();
    const gpcCookie = cookies.find((c) => c.name === 'll_gpc');
    expect(gpcCookie).toBeTruthy();
    expect(gpcCookie!.value).toBe('1');
  });
});
