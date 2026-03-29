import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock analytics to control getPersistedUtmParams
vi.mock('@/lib/analytics', () => ({
  getPersistedUtmParams: vi.fn(() => ({})),
}));

import { getPersistedUtmParams } from '@/lib/analytics';
import { getAppStoreUrl, CAMPAIGNS } from '@/lib/appStoreUrl';
import { APP_STORE_ID, TEAM_ID } from '@/lib/appStoreConfig';

const mockedGetUtm = vi.mocked(getPersistedUtmParams);

describe('getAppStoreUrl', () => {
  beforeEach(() => {
    mockedGetUtm.mockReturnValue({});
  });

  it('returns a URL containing the App Store base', () => {
    const url = getAppStoreUrl('test_campaign');
    expect(url).toContain('apps.apple.com');
    expect(url).toContain(`id${APP_STORE_ID}`);
  });

  it('sets pt (provider token) to TEAM_ID', () => {
    const url = new URL(getAppStoreUrl('homepage_hero'));
    expect(url.searchParams.get('pt')).toBe(TEAM_ID);
  });

  it('sets ct (campaign token) to the campaign name', () => {
    const url = new URL(getAppStoreUrl('homepage_hero'));
    expect(url.searchParams.get('ct')).toBe('homepage_hero');
  });

  it('sets mt=8 for iOS', () => {
    const url = new URL(getAppStoreUrl('test'));
    expect(url.searchParams.get('mt')).toBe('8');
  });

  it('appends utm_source to campaign token when present', () => {
    mockedGetUtm.mockReturnValue({ utm_source: 'google' });
    const url = new URL(getAppStoreUrl('homepage_hero'));
    expect(url.searchParams.get('ct')).toBe('homepage_hero_google');
  });

  it('does not modify ct when utm_source is absent', () => {
    mockedGetUtm.mockReturnValue({ utm_medium: 'cpc' });
    const url = new URL(getAppStoreUrl('pricing_pro'));
    expect(url.searchParams.get('ct')).toBe('pricing_pro');
  });

  it('handles all campaign tokens', () => {
    for (const [key, value] of Object.entries(CAMPAIGNS)) {
      const url = new URL(getAppStoreUrl(value));
      expect(url.searchParams.get('ct')).toBe(value);
    }
  });
});

describe('CAMPAIGNS', () => {
  it('contains expected campaign tokens', () => {
    expect(CAMPAIGNS.homepage_hero).toBe('homepage_hero');
    expect(CAMPAIGNS.pricing_free).toBe('pricing_free');
    expect(CAMPAIGNS.pricing_pro).toBe('pricing_pro');
    expect(CAMPAIGNS.pricing_elite).toBe('pricing_elite');
    expect(CAMPAIGNS.pricing_royal).toBe('pricing_royal');
    expect(CAMPAIGNS.blog_sidebar).toBe('blog_sidebar');
    expect(CAMPAIGNS.nav_download).toBe('nav_download');
    expect(CAMPAIGNS.download_page).toBe('download_page');
    expect(CAMPAIGNS.footer).toBe('footer');
  });

  it('has all expected keys', () => {
    const keys = Object.keys(CAMPAIGNS);
    expect(keys.length).toBeGreaterThanOrEqual(10);
  });
});

describe('appStoreConfig', () => {
  it('exports a valid APP_STORE_ID string', () => {
    expect(typeof APP_STORE_ID).toBe('string');
    expect(APP_STORE_ID.length).toBeGreaterThan(0);
  });

  it('exports a valid TEAM_ID string', () => {
    expect(typeof TEAM_ID).toBe('string');
    expect(TEAM_ID.length).toBeGreaterThan(0);
  });
});
