import { NextRequest, NextResponse } from 'next/server';
import { APP_STORE_BASE_URL, BUNDLE_ID } from '@/lib/appStoreConfig';

/**
 * Universal Link handler for `/open`.
 *
 * When iOS intercepts this URL and the app is installed, the OS opens
 * the app directly (this route is never hit). When the app is NOT
 * installed — or a non-iOS device visits — we redirect to the
 * App Store listing.
 *
 * Query parameters are forwarded so the app can handle deep links:
 *   /open?language=spanish  →  app opens to Spanish module
 *   /open?pair=en-ja        →  app opens to English → Japanese
 */
export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // Build App Store URL preserving any campaign/deep link params
  const appStoreUrl = new URL(APP_STORE_BASE_URL);
  appStoreUrl.searchParams.set('mt', '8'); // iPhone app marker

  // Forward the language param as a campaign token for attribution
  const language = searchParams.get('language');
  if (language) {
    appStoreUrl.searchParams.set('ct', `deeplink_${language}`);
  }

  return NextResponse.redirect(appStoreUrl.toString(), { status: 302 });
}

/**
 * Metadata for crawlers — this page is a redirect, not indexed.
 */
export const dynamic = 'force-dynamic';
