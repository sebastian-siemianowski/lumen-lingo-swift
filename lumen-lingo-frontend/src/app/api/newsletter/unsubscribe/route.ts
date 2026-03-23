import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod/v4';
import {
  hashForConsent,
  recordConsent,
  NEWSLETTER_CONSENT_VERSION,
} from '@/lib/consent-log';

const unsubscribeSchema = z.object({
  email: z.email('Please provide a valid email address.'),
});

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

// ─── Handler ───────────────────────────────────────────────────────
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

  const result = unsubscribeSchema.safeParse(body);
  if (!result.success) {
    const message = result.error.issues[0]?.message || 'Invalid input.';
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { email } = result.data;

  // Record consent withdrawal — GDPR Art. 7(3)
  recordConsent({
    timestamp: new Date().toISOString(),
    type: 'newsletter',
    subjectHash: hashForConsent(email),
    ipHash: hashForConsent(ip),
    consentVersion: NEWSLETTER_CONSENT_VERSION,
    consentTextShown: 'CONSENT_WITHDRAWN',
    metadata: { action: 'unsubscribe' },
  });

  // ESP integration: remove from mailing list when wired in
  console.log(`[newsletter] Unsubscribe: ${email}`);

  return NextResponse.json({
    ok: true,
    message: 'You have been unsubscribed successfully.',
  });
}
