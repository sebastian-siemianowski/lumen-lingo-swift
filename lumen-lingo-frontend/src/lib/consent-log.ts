/**
 * GDPR Consent Record Logger
 *
 * Records consent events with all fields required for GDPR accountability:
 * - Timestamp (ISO 8601)
 * - Subject identifier (hashed email or anonymised ID)
 * - IP address (SHA-256 hashed — never stored in clear)
 * - Consent text/version shown
 * - Categories accepted/rejected (for cookies)
 * - Source/context
 *
 * Storage: in-memory + structured console log until a database is wired in.
 * The structured log format enables future ingestion into a compliance database.
 */

import crypto from 'crypto';

export type ConsentType = 'newsletter' | 'waitlist' | 'cookie';

export interface ConsentRecord {
  /** ISO 8601 timestamp */
  timestamp: string;
  /** Type of consent */
  type: ConsentType;
  /** SHA-256 hash of the email (for newsletter/waitlist) or session ID */
  subjectHash: string;
  /** SHA-256 hash of the IP address — never store raw IP */
  ipHash: string;
  /** Version of the consent text shown to the user */
  consentVersion: string;
  /** Summary of consent text shown */
  consentTextShown: string;
  /** Categories (for cookie consent) */
  categories?: Record<string, boolean>;
  /** Additional context */
  metadata?: Record<string, string>;
}

// ─── In-memory store (replace with database in production) ─────────
const gKey = Symbol.for('consent-log-store');
const g = globalThis as unknown as Record<symbol, ConsentRecord[] | undefined>;
if (!g[gKey]) g[gKey] = [];

function getStore(): ConsentRecord[] {
  return g[gKey]!;
}

// ─── Helpers ───────────────────────────────────────────────────────

/** One-way hash using SHA-256 with a salt prefix for privacy. */
export function hashForConsent(value: string): string {
  return crypto.createHash('sha256').update(`ll-consent:${value}`).digest('hex');
}

// ─── Public API ────────────────────────────────────────────────────

/** Record a consent event. Logs structured JSON and stores in memory. */
export function recordConsent(record: ConsentRecord): void {
  const store = getStore();
  store.push(record);

  // Structured log — can be ingested by log aggregators (Datadog, CloudWatch, etc.)
  console.log(
    JSON.stringify({
      _type: 'consent_record',
      ...record,
    }),
  );
}

/** Retrieve all consent records (for audit / DSAR responses). */
export function getConsentRecords(): ConsentRecord[] {
  return [...getStore()];
}

/** Retrieve consent records for a specific subject (by hashed email). */
export function getConsentRecordsForSubject(subjectHash: string): ConsentRecord[] {
  return getStore().filter((r) => r.subjectHash === subjectHash);
}

// ─── Consent text versions ─────────────────────────────────────────

export const NEWSLETTER_CONSENT_VERSION = '1.1';
export const NEWSLETTER_CONSENT_TEXT =
  'I agree to receive product updates, language learning tips, and occasional offers from LumenShore Ltd. Unsubscribe anytime via the link in every email.';

export const WAITLIST_CONSENT_VERSION = '1.0';
export const WAITLIST_CONSENT_TEXT =
  'I agree to join the LumenLingo waitlist and receive launch notifications. We respect your privacy.';

export const COOKIE_CONSENT_VERSION = '1.0';

// ─── UK Companies Act 2006 s.82 — Email footer (for all business communications) ──

export const EMAIL_COMPANY_FOOTER =
  'Lumenshore Limited | Company No. 09607326 | Registered in England and Wales\n' +
  'Registered Office: Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA\n' +
  'VAT: GB 270411929';
