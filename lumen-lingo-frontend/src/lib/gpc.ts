/**
 * Global Privacy Control (GPC) & Do-Not-Track (DNT) signal detection.
 *
 * GPC is legally required under:
 *  - CPRA (California) § 1798.135(e)
 *  - CPA (Colorado) — effective Jul 2024
 *  - CTDPA (Connecticut)
 *
 * DNT is deprecated by W3C but honoured identically to GPC for consistency.
 */

/**
 * Returns true if the user's browser is sending a privacy opt-out signal.
 *
 * Checks (in order):
 *  1. navigator.globalPrivacyControl (JS API — Firefox, Brave, DuckDuckGo)
 *  2. ll_gpc cookie set by middleware from Sec-GPC header (extensions that
 *     set the header but not the JS property)
 *  3. navigator.doNotTrack (deprecated but honoured)
 */
export function isPrivacySignalActive(): boolean {
  if (typeof window === 'undefined') return false;

  // GPC via JavaScript API (primary detection)
  if (
    (navigator as Navigator & { globalPrivacyControl?: boolean })
      .globalPrivacyControl === true
  ) {
    return true;
  }

  // GPC via server-detected Sec-GPC header cookie (fallback)
  if (document.cookie.includes('ll_gpc=1')) {
    return true;
  }

  // DNT (deprecated by W3C, honoured for consistency)
  if (navigator.doNotTrack === '1') {
    return true;
  }

  return false;
}
