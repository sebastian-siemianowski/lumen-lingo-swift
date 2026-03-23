import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod/v4';
import crypto from 'crypto';
import {
  hashForConsent,
  recordConsent,
  WAITLIST_CONSENT_VERSION,
  WAITLIST_CONSENT_TEXT,
} from '@/lib/consent-log';

// ─── Schema ────────────────────────────────────────────────────────
const waitlistSchema = z.object({
  email: z.email('Please provide a valid email address.'),
  language: z.string().min(1).max(64),
  referrer: z.string().max(32).optional(),
});

// ─── In-memory store (replace with a database in production) ───────
type WaitlistEntry = {
  email: string;
  language: string;
  referralCode: string;
  referredBy: string | null;
  createdAt: string;
};

const gKey = Symbol.for('waitlist-store');
const g = globalThis as unknown as Record<symbol, WaitlistEntry[] | undefined>;
if (!g[gKey]) g[gKey] = [];
function getStore(): WaitlistEntry[] {
  return g[gKey]!;
}

// ─── Automated retention purge (GDPR Art. 5(1)(e)) ────────────────
// Remove entries older than RETENTION_DAYS. In production, wire to a cron job.
const RETENTION_DAYS = 365; // 1 year after launch or until product launch + 30 days
const PURGE_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours
const purgeKey = Symbol.for('waitlist-purge-interval');
const gPurge = globalThis as unknown as Record<symbol, ReturnType<typeof setInterval> | undefined>;
if (!gPurge[purgeKey]) {
  gPurge[purgeKey] = setInterval(() => {
    const store = getStore();
    const cutoff = Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000;
    const before = store.length;
    const kept = store.filter((e) => new Date(e.createdAt).getTime() > cutoff);
    if (kept.length < before) {
      g[gKey] = kept;
      console.log(`[waitlist] Purged ${before - kept.length} expired entries (>${RETENTION_DAYS} days)`);
    }
  }, PURGE_INTERVAL);
}

function generateReferralCode(): string {
  return crypto.randomBytes(6).toString('base64url'); // 8 chars, URL-safe
}

// ─── Rate limiter (5 req / IP / 60 s) ─────────────────────────────
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const ipBuckets = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = ipBuckets.get(ip);
  if (!bucket || now >= bucket.resetAt) {
    ipBuckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}

// ─── Handlers ──────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const result = waitlistSchema.safeParse(body);
  if (!result.success) {
    const message = result.error.issues[0]?.message || 'Invalid input.';
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { email, language, referrer } = result.data;
  const store = getStore();

  // Check for existing signup
  const existing = store.find((e) => e.email === email);
  if (existing) {
    return NextResponse.json({
      ok: true,
      referralCode: existing.referralCode,
      position: store.indexOf(existing) + 1,
      total: store.length,
      message: "You're already on the list!",
    });
  }

  const referralCode = generateReferralCode();
  const entry: WaitlistEntry = {
    email,
    language,
    referralCode,
    referredBy: referrer || null,
    createdAt: new Date().toISOString(),
  };
  store.push(entry);

  // ── GDPR consent record ──────────────────────────────────────────
  recordConsent({
    timestamp: entry.createdAt,
    type: 'waitlist',
    subjectHash: hashForConsent(email),
    ipHash: hashForConsent(ip),
    consentVersion: WAITLIST_CONSENT_VERSION,
    consentTextShown: WAITLIST_CONSENT_TEXT,
    metadata: { language, referrer: referrer ?? 'none' },
  });

  console.log(`[waitlist] New signup: ${email} (language: ${language}, ref: ${referrer ?? 'none'})`);

  return NextResponse.json({
    ok: true,
    referralCode,
    position: store.length,
    total: store.length,
    message: "You're on the list!",
  });
}

/** Public count endpoint — returns total signups. */
export async function GET() {
  const store = getStore();
  return NextResponse.json({ total: store.length });
}
