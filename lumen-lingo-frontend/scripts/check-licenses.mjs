#!/usr/bin/env node
/**
 * CI license compliance check.
 * Fails if any production dependency uses a disallowed (copyleft) license.
 *
 * Usage: node scripts/check-licenses.mjs
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const lockPath = join(__dirname, '..', 'node_modules', '.package-lock.json');

/** Licenses that are NOT allowed in a proprietary product. */
const DISALLOWED = [
  'GPL-2.0',
  'GPL-2.0-only',
  'GPL-2.0-or-later',
  'GPL-3.0',
  'GPL-3.0-only',
  'GPL-3.0-or-later',
  'AGPL-3.0',
  'AGPL-3.0-only',
  'AGPL-3.0-or-later',
  'SSPL-1.0',
  'EUPL-1.1',
  'EUPL-1.2',
];

/**
 * Known exceptions: packages whose license identifiers look problematic
 * but are acceptable for our use case.
 * LGPL dynamically-linked native binaries are fine — no code linking.
 * FSL-1.1-MIT (Sentry CLI) converts to MIT after 2 years, CLI-only usage.
 */
const EXCEPTIONS = new Set([
  '@img/sharp-libvips-darwin-arm64',
  '@img/sharp-libvips-linux-arm',
  '@img/sharp-libvips-linux-arm64',
  '@img/sharp-libvips-linux-x64',
  '@sentry/cli',
  '@sentry/cli-darwin',
  '@sentry/cli-linux-arm',
  '@sentry/cli-linux-arm64',
  '@sentry/cli-linux-x64',
  '@sentry/cli-win32-x64',
]);

const lock = JSON.parse(readFileSync(lockPath, 'utf-8'));
const violations = [];

for (const [pkgPath, info] of Object.entries(lock.packages ?? {})) {
  if (info.dev) continue;
  const name = pkgPath.replace('node_modules/', '');
  if (!name || EXCEPTIONS.has(name)) continue;
  const license = info.license ?? 'UNKNOWN';
  if (DISALLOWED.some((d) => license.includes(d))) {
    violations.push({ name, version: info.version, license });
  }
}

if (violations.length > 0) {
  console.error('\n❌  License compliance FAILED\n');
  for (const v of violations) {
    console.error(`  ${v.name}@${v.version}  →  ${v.license}`);
  }
  console.error(
    '\nAdd an exception in scripts/check-licenses.mjs if this is intentional.\n',
  );
  process.exit(1);
} else {
  console.log(`✅  All ${Object.keys(lock.packages ?? {}).length} production dependencies use allowed licenses.`);
}
