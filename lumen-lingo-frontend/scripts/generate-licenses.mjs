#!/usr/bin/env node
/**
 * Generates open-source-licenses.json from the production dependencies
 * in node_modules/.package-lock.json.
 *
 * Usage: node scripts/generate-licenses.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const lockPath = join(root, 'node_modules', '.package-lock.json');
const outPath = join(root, 'src', 'data', 'open-source-licenses.json');

const lock = JSON.parse(readFileSync(lockPath, 'utf-8'));
const packages = [];

for (const [pkgPath, info] of Object.entries(lock.packages ?? {})) {
  if (info.dev) continue;
  const name = pkgPath.replace('node_modules/', '');
  if (!name) continue;
  packages.push({
    name,
    version: info.version ?? 'unknown',
    license: info.license ?? 'UNKNOWN',
  });
}

packages.sort((a, b) => a.name.localeCompare(b.name));

const output = { generatedAt: new Date().toISOString().split('T')[0], packages };
writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n');

console.log(`Wrote ${packages.length} packages to ${outPath}`);
