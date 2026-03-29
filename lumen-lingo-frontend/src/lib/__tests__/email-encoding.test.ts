import { describe, it, expect } from 'vitest';
import {
  xorCipher,
  splitEmail,
  encodeFragment,
  decodeFragment,
  shuffleWithMap,
  keySeed,
  encodeEmail,
} from '../email-encoder';
import { assembleEmail } from '../email-assembler';
import { RAW_EMAIL, XOR_KEY } from '../email-config';

describe('email-encoder', () => {
  describe('xorCipher', () => {
    it('XOR is its own inverse', () => {
      const input = 'hello@test.com';
      const key = 'mykey';
      const encrypted = xorCipher(input, key);
      expect(encrypted).not.toBe(input);
      const decrypted = xorCipher(encrypted, key);
      expect(decrypted).toBe(input);
    });
  });

  describe('splitEmail', () => {
    it('splits into at least 4 fragments', () => {
      const fragments = splitEmail(RAW_EMAIL);
      expect(fragments.length).toBeGreaterThanOrEqual(4);
    });

    it('fragments concatenate to original', () => {
      const fragments = splitEmail(RAW_EMAIL);
      expect(fragments.join('')).toBe(RAW_EMAIL);
    });
  });

  describe('encodeFragment / decodeFragment', () => {
    it('round-trips a fragment', () => {
      const fragment = 'suppo';
      const encoded = encodeFragment(fragment, XOR_KEY);
      expect(encoded).not.toBe(fragment);
      const decoded = decodeFragment(encoded, XOR_KEY);
      expect(decoded).toBe(fragment);
    });
  });

  describe('shuffleWithMap', () => {
    it('produces a deterministic shuffle', () => {
      const arr = ['a', 'b', 'c', 'd', 'e'];
      const seed = keySeed(XOR_KEY);
      const r1 = shuffleWithMap(arr, seed);
      const r2 = shuffleWithMap(arr, seed);
      expect(r1.shuffled).toEqual(r2.shuffled);
      expect(r1.indexMap).toEqual(r2.indexMap);
    });

    it('can be reversed with indexMap', () => {
      const arr = ['a', 'b', 'c', 'd', 'e'];
      const seed = keySeed(XOR_KEY);
      const { shuffled, indexMap } = shuffleWithMap(arr, seed);
      const restored = new Array<string>(arr.length);
      for (let i = 0; i < indexMap.length; i++) {
        restored[indexMap[i]] = shuffled[i];
      }
      expect(restored).toEqual(arr);
    });
  });

  describe('encodeEmail', () => {
    it('returns fragments, indexMap and key', () => {
      const result = encodeEmail();
      expect(result.fragments).toBeInstanceOf(Array);
      expect(result.indexMap).toBeInstanceOf(Array);
      expect(result.fragments.length).toBeGreaterThanOrEqual(4);
      expect(result.indexMap.length).toBe(result.fragments.length);
      expect(result.key).toBe(XOR_KEY);
    });

    it('no fragment contains the raw email', () => {
      const result = encodeEmail();
      for (const f of result.fragments) {
        expect(f).not.toContain(RAW_EMAIL);
        expect(f).not.toContain('@');
      }
    });

    it('round-trips encode → decode back to original email', () => {
      const result = encodeEmail();
      const { fragments, indexMap, key } = result;

      // Unshuffle
      const ordered = new Array<string>(fragments.length);
      for (let i = 0; i < indexMap.length; i++) {
        ordered[indexMap[i]] = fragments[i];
      }

      // Decode
      const decoded = ordered.map((f) => decodeFragment(f, key)).join('');
      expect(decoded).toBe(RAW_EMAIL);
    });
  });
});

describe('email-assembler', () => {
  it('assembles the correct email from embedded fragments', () => {
    const email = assembleEmail();
    expect(email).toBe(RAW_EMAIL);
  });

  it('does not contain raw email in module source', async () => {
    // Read the assembler source and verify no raw email string
    const fs = await import('fs');
    const path = await import('path');
    const source = fs.readFileSync(
      path.resolve(__dirname, '../email-assembler.ts'),
      'utf-8',
    );
    expect(source).not.toContain(RAW_EMAIL);
    expect(source).not.toContain('support@');
    expect(source).not.toContain('lumenlingo.com');
  });
});
