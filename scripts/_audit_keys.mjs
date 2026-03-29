// Epic 12 — Audit missing keys across all locale files vs en.json
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MESSAGES_DIR = join(__dirname, '..', 'lumen-lingo-frontend', 'messages');

function flattenKeys(obj, prefix = '') {
  const keys = [];
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      keys.push(...flattenKeys(v, path));
    } else {
      keys.push(path);
    }
  }
  return keys;
}

const en = JSON.parse(readFileSync(join(MESSAGES_DIR, 'en.json'), 'utf-8'));
const enKeys = new Set(flattenKeys(en));
console.log(`en.json has ${enKeys.size} leaf keys\n`);

const locales = ['es', 'fr', 'ja', 'de', 'pl', 'ar', 'zh', 'uk'];
let totalMissing = 0;

for (const locale of locales) {
  const json = JSON.parse(readFileSync(join(MESSAGES_DIR, `${locale}.json`), 'utf-8'));
  const localeKeys = new Set(flattenKeys(json));
  
  const missing = [...enKeys].filter(k => !localeKeys.has(k));
  const extra = [...localeKeys].filter(k => !enKeys.has(k));
  
  if (missing.length === 0 && extra.length === 0) {
    console.log(`✅ ${locale}.json — complete (${localeKeys.size} keys)`);
  } else {
    if (missing.length > 0) {
      console.log(`❌ ${locale}.json — ${missing.length} MISSING keys:`);
      missing.forEach(k => console.log(`   - ${k}`));
      totalMissing += missing.length;
    }
    if (extra.length > 0) {
      console.log(`⚠️  ${locale}.json — ${extra.length} extra keys:`);
      extra.forEach(k => console.log(`   + ${k}`));
    }
  }
}

console.log(`\nTotal missing keys across all locales: ${totalMissing}`);
