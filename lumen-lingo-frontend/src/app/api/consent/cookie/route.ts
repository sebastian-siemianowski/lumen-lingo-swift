import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod/v4';
import {
  hashForConsent,
  recordConsent,
  COOKIE_CONSENT_VERSION,
} from '@/lib/consent-log';

// ─── Schema ────────────────────────────────────────────────────────
const cookieConsentSchema = z.object({
  analytics: z.boolean(),
  errorMonitoring: z.boolean(),
  sessionReplay: z.boolean(),
  version: z.string().max(16),
});

// ─── Rate limiter (10 req / IP / 60 s) ────────────────────────────
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;
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
      { error: 'Too many requests.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const result = cookieConsentSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: 'Invalid input.' }, { status: 400 });
  }

  const { analytics, errorMonitoring, sessionReplay, version } = result.data;

  recordConsent({
    timestamp: new Date().toISOString(),
    type: 'cookie',
    subjectHash: hashForConsent(ip), // No email for cookies — use IP hash as pseudonymous ID
    ipHash: hashForConsent(ip),
    consentVersion: version || COOKIE_CONSENT_VERSION,
    consentTextShown: 'Cookie consent banner with category toggles',
    categories: {
      essential: true,
      analytics,
      errorMonitoring,
      sessionReplay,
    },
  });

  return NextResponse.json({ ok: true });
}
