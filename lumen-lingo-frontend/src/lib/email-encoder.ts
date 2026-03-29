/**
 * Email Encoder — Build-Time Utility
 *
 * Splits the email into fragments, applies Base64 + XOR cipher,
 * and shuffles with an index map. This module is used at dev/build
 * time and in tests — never imported in production client bundles.
 */

import { RAW_EMAIL, XOR_KEY } from './email-config';

/**
 * Apply a rotating XOR cipher to a string using the given key.
 */
export function xorCipher(input: string, key: string): string {
  return Array.from(input)
    .map((char, i) =>
      String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length)),
    )
    .join('');
}

/**
 * Split the email into fragments of roughly equal size.
 * Minimum 4 fragments as per spec.
 */
export function splitEmail(email: string, chunkSize = 5): string[] {
  const fragments: string[] = [];
  for (let i = 0; i < email.length; i += chunkSize) {
    fragments.push(email.slice(i, i + chunkSize));
  }
  return fragments;
}

/**
 * Encode a single fragment: XOR cipher → Base64.
 */
export function encodeFragment(fragment: string, key: string): string {
  const xored = xorCipher(fragment, key);
  // Convert to Base64 safely (handle non-ASCII from XOR)
  const bytes = new TextEncoder().encode(xored);
  const binary = Array.from(bytes)
    .map((b) => String.fromCharCode(b))
    .join('');
  return btoa(binary);
}

/**
 * Decode a single fragment: Base64 → XOR cipher (reverse).
 */
export function decodeFragment(encoded: string, key: string): string {
  const binary = atob(encoded);
  const bytes = new Uint8Array(Array.from(binary).map((c) => c.charCodeAt(0)));
  const xored = new TextDecoder().decode(bytes);
  return xorCipher(xored, key); // XOR is its own inverse
}

/**
 * Generate a deterministic shuffle using a seed derived from the key.
 * Returns the shuffled array and the index map to unshuffle.
 */
export function shuffleWithMap<T>(
  arr: T[],
  seed: number,
): { shuffled: T[]; indexMap: number[] } {
  const indices = arr.map((_, i) => i);
  // Fisher-Yates with seeded PRNG
  let s = seed;
  for (let i = indices.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    const tmp = indices[i]!;
    indices[i] = indices[j]!;
    indices[j] = tmp;
  }
  const shuffled = indices.map((i) => arr[i]!) as T[];
  // indexMap[shuffledPosition] = originalPosition
  const indexMap = indices.slice();
  return { shuffled, indexMap };
}

/**
 * Derive a numeric seed from the XOR key string.
 */
export function keySeed(key: string): number {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/**
 * Full encode pipeline: split → encode each → shuffle.
 * Returns the data structure to embed in the assembler.
 */
export function encodeEmail(email: string = RAW_EMAIL, key: string = XOR_KEY) {
  const fragments = splitEmail(email);
  const encoded = fragments.map((f) => encodeFragment(f, key));
  const seed = keySeed(key);
  const { shuffled, indexMap } = shuffleWithMap(encoded, seed);
  return { fragments: shuffled, indexMap, key };
}

// Pre-compute and export for embedding in the assembler
export const ENCODED_EMAIL = encodeEmail();
