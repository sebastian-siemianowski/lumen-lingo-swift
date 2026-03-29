/**
 * Translation Key Completeness Check
 *
 * Compares all non-English locale JSON files against en.json
 * and reports missing or extra keys.
 *
 * Usage: npx tsx scripts/check-translations.ts
 * Exit code 1 if any locale is incomplete.
 */

import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MESSAGES_DIR = join(__dirname, '..', 'lumen-lingo-frontend', 'messages');

function flattenKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  const keys: string[] = [];
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      keys.push(...flattenKeys(v as Record<string, unknown>, path));
    } else {
      keys.push(path);
    }
  }
  return keys;
}

const enJson = JSON.parse(readFileSync(join(MESSAGES_DIR, 'en.json'), 'utf-8'));
const enKeys = new Set(flattenKeys(enJson));

const localeFiles = readdirSync(MESSAGES_DIR)
  .filter((f) => f.endsWith('.json') && f !== 'en.json')
  .sort();

let hasErrors = false;

console.log(`\n📋 Translation Key Completeness Check`);
console.log(`   Reference: en.json (${enKeys.size} leaf keys)\n`);

for (const file of localeFiles) {
  const locale = file.replace('.json', '');
  const json = JSON.parse(readFileSync(join(MESSAGES_DIR, file), 'utf-8'));
  const localeKeys = new Set(flattenKeys(json));

  const missing = [...enKeys].filter((k) => !localeKeys.has(k));
  const extra = [...localeKeys].filter((k) => !enKeys.has(k));

  if (missing.length === 0) {
    console.log(`✅ ${locale}.json — complete (${localeKeys.size} keys)`);
  } else {
    hasErrors = true;
    console.log(`❌ ${locale}.json — ${missing.length} MISSING key(s):`);
    for (const k of missing) {
      // Show expected English value for context
      const val = k.split('.').reduce((o: any, p) => o?.[p], enJson);
      const preview = typeof val === 'string' ? val.slice(0, 60) : JSON.stringify(val)?.slice(0, 60);
      console.log(`   - ${k}  →  "${preview}"`);
    }
  }

  if (extra.length > 0) {
    console.log(`   ⚠️  ${extra.length} extra key(s) not in en.json`);
  }
}

console.log('');

if (hasErrors) {
  console.log('❌ Some locales have missing keys. Please add translations.\n');
  process.exit(1);
} else {
  console.log('✅ All locales are complete!\n');
  process.exit(0);
}
