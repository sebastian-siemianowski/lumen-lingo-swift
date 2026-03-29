import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock @vercel/analytics before importing
vi.mock('@vercel/analytics', () => ({
  track: vi.fn(),
}));

// Mock cookie-consent to always allow analytics
vi.mock('@/lib/cookie-consent', () => ({
  hasConsent: () => true,
}));

import { track } from '@vercel/analytics';
import {
  trackEvent,
  getUtmParams,
  captureUtmParams,
  getPersistedUtmParams,
} from '@/lib/analytics';

describe('trackEvent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls track with event name and properties', () => {
    trackEvent('app_store_click', { location: 'hero' });
    expect(track).toHaveBeenCalledWith('app_store_click', { location: 'hero' });
  });

  it('calls track with no properties for events that take none', () => {
    trackEvent('pricing_view');
    expect(track).toHaveBeenCalledWith('pricing_view', undefined);
  });

  it('passes blog_post_read properties correctly', () => {
    trackEvent('blog_post_read', { slug: 'test', title: 'Test Post' });
    expect(track).toHaveBeenCalledWith('blog_post_read', { slug: 'test', title: 'Test Post' });
  });
});

describe('getUtmParams', () => {
  const originalWindow = globalThis.window;

  afterEach(() => {
    if (!originalWindow) {
      // @ts-expect-error: restoring undefined
      delete globalThis.window;
    }
  });

  it('returns empty object when window is undefined', () => {
    const win = globalThis.window;
    // @ts-expect-error: simulating server-side
    delete globalThis.window;
    expect(getUtmParams()).toEqual({});
    globalThis.window = win;
  });

  it('extracts UTM params from URL search string', () => {
    Object.defineProperty(window, 'location', {
      value: {
        search: '?utm_source=google&utm_medium=cpc&utm_campaign=spring',
      },
      writable: true,
      configurable: true,
    });
    const params = getUtmParams();
    expect(params.utm_source).toBe('google');
    expect(params.utm_medium).toBe('cpc');
    expect(params.utm_campaign).toBe('spring');
    expect(params.utm_term).toBeUndefined();
    expect(params.utm_content).toBeUndefined();
  });

  it('returns empty object when no UTM params in URL', () => {
    Object.defineProperty(window, 'location', {
      value: { search: '' },
      writable: true,
      configurable: true,
    });
    expect(getUtmParams()).toEqual({});
  });
});

describe('captureUtmParams / getPersistedUtmParams', () => {
  beforeEach(() => {
    sessionStorage.clear();
    Object.defineProperty(window, 'location', {
      value: { search: '' },
      writable: true,
      configurable: true,
    });
  });

  it('stores UTM params to sessionStorage', () => {
    Object.defineProperty(window, 'location', {
      value: { search: '?utm_source=twitter' },
      writable: true,
      configurable: true,
    });
    captureUtmParams();
    const stored = sessionStorage.getItem('ll_utm');
    expect(stored).toBeTruthy();
    expect(JSON.parse(stored!)).toEqual({ utm_source: 'twitter' });
  });

  it('getPersistedUtmParams returns stored params', () => {
    sessionStorage.setItem('ll_utm', JSON.stringify({ utm_source: 'cached' }));
    const result = getPersistedUtmParams();
    expect(result.utm_source).toBe('cached');
  });

  it('does not store when no UTM params present', () => {
    captureUtmParams();
    expect(sessionStorage.getItem('ll_utm')).toBeNull();
  });
});
