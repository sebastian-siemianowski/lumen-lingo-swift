#!/usr/bin/env node
/**
 * check-translations.js
 *
 * Compares all locale JSON message files against en.json (source of truth).
 * Reports any missing keys per locale.
 * Exit code 1 if any keys are missing — fails CI.
 *
 * Usage:  node scripts/check-translations.js
 */

const { readFileSync, readdirSync } = require('fs');
const { join, basename } = require('path');

const messagesDir = join(__dirname, '..', 'messages');
const sourceLocale = 'en';

function flattenKeys(obj, prefix) {
  prefix = prefix || '';
  const keys = [];
  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    const key = entries[i][0];
    const value = entries[i][1];
    const path = prefix ? prefix + '.' + key : key;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      const nested = flattenKeys(value, path);
      for (let j = 0; j < nested.length; j++) keys.push(nested[j]);
    } else {
      keys.push(path);
    }
  }
  return keys;
}

function loadJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

const sourceFile = join(messagesDir, sourceLocale + '.json');
const sourceData = loadJson(sourceFile);
const sourceKeysArr = flattenKeys(sourceData);
const sourceKeys = new Set(sourceKeysArr);

const allFiles = readdirSync(messagesDir);
const localeFiles = allFiles
  .filter(function (f) { return f.endsWith('.json') && f !== sourceLocale + '.json'; })
  .sort();

let totalMissing = 0;
const results = [];

for (let i = 0; i < localeFiles.length; i++) {
  const file = localeFiles[i];
  const locale = basename(file, '.json');
  const data = loadJson(join(messagesDir, file));
  const keysArr = flattenKeys(data);
  const keys = new Set(keysArr);
  const missing = sourceKeysArr.filter(function (k) { return !keys.has(k); });

  if (missing.length > 0) {
    totalMissing += missing.length;
    results.push({ locale: locale, missing: missing });
  }
}

if (results.length === 0) {
  console.log('All ' + localeFiles.length + ' locale(s) have complete translations (' + sourceKeys.size + ' keys each).');
  process.exit(0);
} else {
  console.error('Translation check failed: ' + totalMissing + ' missing key(s) across ' + results.length + ' locale(s):');
  console.error('');
  for (let i = 0; i < results.length; i++) {
    var r = results[i];
    console.error('  ' + r.locale + ': ' + r.missing.length + ' missing key(s)');
    var show = Math.min(r.missing.length, 20);
    for (var j = 0; j < show; j++) {
      console.error('    - ' + r.missing[j]);
    }
    if (r.missing.length > 20) {
      console.error('    ... and ' + (r.missing.length - 20) + ' more');
    }
    console.error('');
  }
  process.exit(1);
}
