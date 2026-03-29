/**
 * Email Assembler — Runtime Only
 *
 * Reconstructs the email from pre-encoded, shuffled fragments.
 * This module contains NO raw email text. The email is assembled
 * only when explicitly called — never at module scope or during SSR.
 *
 * ⚠️  This function must ONLY be called client-side after human
 *     verification. Never call during SSR or at import time.
 */

// Pre-computed encoded fragments (shuffled order)
const _f = ['PwAdFQE=', 'IRADCQc=', 'IhICSw0=', 'Ixg=', 'PgEtCRs='];

// Index map: indexMap[shuffledPos] = originalPos
const _m = [0, 2, 3, 4, 1];

// XOR key (non-secret site constant)
const _k = 'LumenLingoContact2025';

/**
 * Reverse XOR cipher (XOR is its own inverse).
 */
function _x(input: string, key: string): string {
  return Array.from(input)
    .map((c, i) => String.fromCharCode(c.charCodeAt(0) ^ key.charCodeAt(i % key.length)))
    .join('');
}

/**
 * Decode a single Base64+XOR fragment back to plaintext.
 */
function _d(encoded: string): string {
  const binary = atob(encoded);
  const bytes = new Uint8Array(Array.from(binary).map((c) => c.charCodeAt(0)));
  const xored = new TextDecoder().decode(bytes);
  return _x(xored, _k);
}

/**
 * Assemble the email address from encoded fragments.
 * Call this ONLY after human verification on the client side.
 *
 * @returns The fully reconstructed email address string
 */
export function assembleEmail(): string {
  // Unshuffle: place each fragment back in its original position
  const ordered = new Array<string>(_f.length);
  for (let i = 0; i < _m.length; i++) {
    ordered[_m[i]!] = _f[i]!;
  }
  // Decode each fragment and concatenate
  return ordered.map(_d).join('');
}
