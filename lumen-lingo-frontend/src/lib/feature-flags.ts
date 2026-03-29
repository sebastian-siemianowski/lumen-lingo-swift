/**
 * Lightweight, environment-variable-driven feature flag system.
 *
 * Each flag reads from a `NEXT_PUBLIC_FF_*` env var at build time.
 * No runtime dependencies, no external services — purely compile-time
 * env vars inlined by Next.js.
 *
 * Usage (server component):  `if (getFeatureFlag('APP_STORE_LIVE')) { … }`
 * Usage (client component):  `const live = useFeatureFlag('APP_STORE_LIVE');`
 */

/** All available feature flag names. */
export type FeatureFlagName =
  | 'APP_STORE_LIVE'
  | 'REVIEWS_LIVE'
  | 'NEWSLETTER_LIVE'
  | 'EARLY_ACCESS_LIVE'
  | 'PRESS_KIT_LIVE'
  | 'DATA_REQUEST_LIVE';

/**
 * Static flags object. Values are resolved once at build/startup from
 * `NEXT_PUBLIC_FF_<NAME>` environment variables. Defaults to `false`.
 * EARLY_ACCESS_LIVE is always `true` in development mode.
 */
/** Flags that are always enabled in development mode. */
const DEV_ONLY_FLAGS: FeatureFlagName[] = [
  'EARLY_ACCESS_LIVE',
  'PRESS_KIT_LIVE',
  'DATA_REQUEST_LIVE',
];

export const flags: Record<FeatureFlagName, boolean> = {
  APP_STORE_LIVE: process.env.NEXT_PUBLIC_FF_APP_STORE_LIVE === 'true',
  REVIEWS_LIVE: process.env.NEXT_PUBLIC_FF_REVIEWS_LIVE === 'true',
  NEWSLETTER_LIVE: process.env.NEXT_PUBLIC_FF_NEWSLETTER_LIVE === 'true',
  EARLY_ACCESS_LIVE:
    process.env.NEXT_PUBLIC_FF_EARLY_ACCESS_LIVE === 'true' ||
    process.env.NODE_ENV === 'development',
  PRESS_KIT_LIVE:
    process.env.NEXT_PUBLIC_FF_PRESS_KIT_LIVE === 'true' ||
    process.env.NODE_ENV === 'development',
  DATA_REQUEST_LIVE:
    process.env.NEXT_PUBLIC_FF_DATA_REQUEST_LIVE === 'true' ||
    process.env.NODE_ENV === 'development',
};

export function isDevOnlyFlag(name: FeatureFlagName): boolean {
  return DEV_ONLY_FLAGS.includes(name);
}

/**
 * Read a feature flag value. Works in both server and client components.
 */
export function getFeatureFlag(name: FeatureFlagName): boolean {
  return flags[name];
}
