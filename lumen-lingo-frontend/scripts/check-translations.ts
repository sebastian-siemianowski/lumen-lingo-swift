#!/usr/bin/env node
/**
 * check-translations.ts
 *
 * Compares all locale JSON message files against en.json (the source of truth).
 * Reports any missing keys per locale.
 * Exit code 1 if any keys are missing → fails CI.
 *
 * Usage:  npx tsx scripts/check-translations.ts
 */

import { readFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';

const messagesDir = join(__dirname, '..', 'messages');
const sourceLocale = 'en';

function flattenKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      keys.push(...flattenKeys(value as Record<string, unknown>, path));
    } else {
      keys.push(path);
    }
  }
  return keys;
}

function loadJson(filePath: string): Record<string, unknown> {
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

const sourceFile = join(messagesDir, `${sourceLocale}.json`);
const sourceData = loadJson(sourceFile);
const sourceKeys = new Set(flattenKeys(sourceData));

const localeFiles = readdirSync(messagesDir)
  .filter((f) => f.endsWith('.json') && f !== `${sourceLocale}.json`)
  .sort();

let totalMissing = 0;
const results: Array<{ locale: string; missing: string[] }> = [];

for (const file of localeFiles) {
  const locale = basename(file, '.json');
  const data = loadJson(join(messagesDir, file));
  const keys = new Set(flattenKeys(data));
  const missing = [...sourceKeys].filter((k) => !keys.has(k));

  if (missing.length > 0) {
    totalMissing += missing.length;
    results.push({ locale, missing });
  }
}

if (results.length === 0) {
  console.log(`✅ All ${localeFiles.length} locale(s) have complete translations (${sourceKeys.size} keys each).`);
  process.exit(0);
} else {
  console.error(`❌ Translation check failed — ${totalMissing} missing key(s) across ${results.length} locale(s):\n`);
  for (const { locale, missing } of results) {
    console.error(`  ${locale}: ${missing.length} missing key(s)`);
    for (const key of missing.slice(0, 20)) {
      console.error(`    - ${key}`);
    }
    if (missing.length > 20) {
      console.error(`    ... and ${missing.length - 20} more`);
    }
    console.error();
  }
  process.exit(1);
}
