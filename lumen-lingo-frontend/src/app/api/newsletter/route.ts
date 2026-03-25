import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod/v4';
import {
  hashForConsent,
  recordConsent,
  NEWSLETTER_CONSENT_VERSION,
  NEWSLETTER_CONSENT_TEXT,
} from '@/lib/consent-log';
import { getFeatureFlag } from '@/lib/feature-flags';

// ─── Schema ────────────────────────────────────────────────────────
const subscribeSchema = z.object({
  email: z.email('Please provide a valid email address.'),
  source: z.string().max(64).optional(),
});

// ─── In-memory rate limiter (per-IP, 5 req / 60 s) ────────────────
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

// Periodically clean up expired buckets to prevent memory leaks
if (typeof globalThis !== 'undefined') {
  const CLEANUP_INTERVAL = 5 * 60_000; // every 5 min
  const cleanup = () => {
    const now = Date.now();
    for (const [ip, bucket] of ipBuckets) {
      if (now >= bucket.resetAt) ipBuckets.delete(ip);
    }
  };
  // Avoid duplicate intervals across hot reloads
  const key = Symbol.for('newsletter-rate-limit-cleanup');
  const g = globalThis as unknown as Record<symbol, ReturnType<typeof setInterval> | undefined>;
  if (!g[key]) {
    g[key] = setInterval(cleanup, CLEANUP_INTERVAL);
  }
}

// ─── Handler ───────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  // Feature flag check — reject if newsletter is disabled
  if (!getFeatureFlag('NEWSLETTER_LIVE')) {
    return NextResponse.json(
      { error: 'Newsletter subscriptions are not yet available. Check back soon!' },
      { status: 503 },
    );
  }

  // Rate limiting
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }

  // Parse & validate
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const result = subscribeSchema.safeParse(body);
  if (!result.success) {
    const message = result.error.issues[0]?.message || 'Invalid input.';
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { email, source } = result.data;

  // ── GDPR consent record ──────────────────────────────────────────
  recordConsent({
    timestamp: new Date().toISOString(),
    type: 'newsletter',
    subjectHash: hashForConsent(email),
    ipHash: hashForConsent(ip),
    consentVersion: NEWSLETTER_CONSENT_VERSION,
    consentTextShown: NEWSLETTER_CONSENT_TEXT,
    metadata: { source: source ?? 'none' },
  });

  // ── ESP integration ──────────────────────────────────────────────
  // Replace this section with your preferred email service provider.
  // Supported: Resend, SendGrid, Mailchimp, ConvertKit, etc.
  //
  // Example with Resend (install `resend` package):
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.contacts.create({
  //     email,
  //     audienceId: process.env.RESEND_AUDIENCE_ID!,
  //   });
  //
  // For now, we log and return success (wire in your ESP when ready).

  console.log(`[newsletter] New subscriber: ${email} (source: ${source ?? 'none'})`);

  return NextResponse.json({ ok: true, message: 'Thank you for subscribing!' });
}
