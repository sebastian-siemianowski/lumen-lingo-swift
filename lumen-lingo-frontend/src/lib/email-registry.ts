/**
 * Email Registry — Encoded Email Lookup
 *
 * Stores XOR + Base64-encoded email addresses that are decoded only
 * at runtime on the client side. No raw email text appears in the
 * JS bundle or SSR output.
 *
 * ⚠️  Only call getProtectedEmail() client-side after hydration.
 */

export type EmailKey =
  | 'support'
  | 'legal'
  | 'security'
  | 'accessibility'
  | 'press'
  | 'appeals'
  | 'dsa'
  | 'anpd';

// XOR key (non-secret site constant, different from email-assembler)
const _k = 'LmL1ng0Pr0tect2025';

// Encoded emails — XOR'd with _k then Base64'd
const _r: Record<EmailKey, string> = {
  support: 'Pxg8QQEVRBAeRRkADRhbXlVaYg4jXA==',
  legal: 'IAgrUAInXCUfVRoJChpVXxxWIwA=',
  security: 'PwgvRBwORCkyXAEIBhpeWVxSI0MvXgM=',
  accessibility: 'LQ4vVB0UWTIbXB0RGjReRV9QIgElXwkIHjMdXQ==',
  press: 'PB8pQh0nXCUfVRoJChpVXxxWIwA=',
  appeals: 'LR08VA8LQxAeRRkADRhbXlVaYg4jXA==',
  dsa: 'KB4tcQISXTUcXB0LBBscU11Y',
  anpd: 'KQMvUBwVVTcTVBslAhpCVBxSIxtiUxw=',
};

function _d(encoded: string): string {
  const binary = atob(encoded);
  return Array.from(binary)
    .map((c, i) => String.fromCharCode(c.charCodeAt(0) ^ _k.charCodeAt(i % _k.length)))
    .join('');
}

/**
 * Decode and return a protected email address by key.
 * Call this ONLY on the client side after hydration.
 */
export function getProtectedEmail(key: EmailKey): string {
  const encoded = _r[key];
  return _d(encoded);
}
