'use client';

import { APP_STORE_BASE_URL, TEAM_ID } from './appStoreConfig';
import { getPersistedUtmParams } from './analytics';

/**
 * Generates a campaign-tagged App Store URL.
 *
 * Format: https://apps.apple.com/app/lumenlingo/idXXX?pt=TEAM_ID&ct=CAMPAIGN&mt=8
 *
 * @param campaign — The placement identifier, e.g. "homepage_hero"
 * @returns Fully-qualified App Store URL with attribution parameters
 */
export function getAppStoreUrl(campaign: string): string {
  const url = new URL(APP_STORE_BASE_URL);
  url.searchParams.set('pt', TEAM_ID);
  url.searchParams.set('ct', campaign);
  url.searchParams.set('mt', '8');

  // Append persisted UTM source if available for cross-channel attribution
  const utm = getPersistedUtmParams();
  if (utm.utm_source) {
    url.searchParams.set('ct', `${campaign}_${utm.utm_source}`);
  }

  return url.toString();
}

/* ------------------------------------------------------------------ */
/*  Campaign token constants — one place to audit all placements      */
/* ------------------------------------------------------------------ */

export const CAMPAIGNS = {
  homepage_hero: 'homepage_hero',
  homepage_cta_banner: 'homepage_cta_banner',
  pricing_free: 'pricing_free',
  pricing_pro: 'pricing_pro',
  pricing_elite: 'pricing_elite',
  pricing_royal: 'pricing_royal',
  blog_sidebar: 'blog_sidebar',
  blog_inline: 'blog_inline',
  nav_download: 'nav_download',
  footer: 'footer',
  download_page: 'download_page',
} as const;

export type CampaignToken = (typeof CAMPAIGNS)[keyof typeof CAMPAIGNS];
