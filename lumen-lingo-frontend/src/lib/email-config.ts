/**
 * Email Configuration — Single Source of Truth
 *
 * The raw email constant below is used ONLY at dev/build time
 * for encoding. It must never be imported in production runtime code.
 * The runtime uses the pre-encoded fragments from email-assembler.ts.
 */

export const RAW_EMAIL = 'support@lumenlingo.com';

/**
 * XOR key derived from a non-secret site constant.
 * Rotated character-by-character during cipher operations.
 */
export const XOR_KEY = 'LumenLingoContact2025';

/**
 * Bot detection confidence threshold (0–100).
 * The user must accumulate at least this score from
 * passive behavioural signals to unlock the email reveal.
 *
 * Set to 50 so that common real-user patterns pass:
 *   - Desktop (mouse only, no scroll): mouse(15)+time(15)+pointer(10)+env(10)+honeypot(10)=60
 *   - Mobile (touch, no scroll): touch(15)+time(15)+env(10)+honeypot(10)=50
 *   - Bot (static only + wait 3s): pointer(10)+env(10)+honeypot(10)+time(15)=45 → blocked
 */
export const BOT_DETECTION_THRESHOLD = 50;
