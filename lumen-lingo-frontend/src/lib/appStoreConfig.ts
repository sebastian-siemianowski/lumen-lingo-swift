/* ------------------------------------------------------------------ */
/*  App Store constants — single source of truth                      */
/*  Replace XXXXXXXXX with your real App Store ID once published.     */
/* ------------------------------------------------------------------ */

/** Apple App Store numeric ID (visible in the App Store URL). */
export const APP_STORE_ID = 'XXXXXXXXX';

/** Apple Developer Team ID (visible in Apple Developer portal). */
export const TEAM_ID = 'XXXXXXXXXX';

/** App bundle identifier — must match Xcode and App Store Connect. */
export const BUNDLE_ID = 'com.lumenshore.lumenlingo';

/** Base App Store URL (without campaign parameters). */
export const APP_STORE_BASE_URL = `https://apps.apple.com/app/lumenlingo/id${APP_STORE_ID}`;
