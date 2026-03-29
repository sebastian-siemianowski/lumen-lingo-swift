'use server';

import { headers } from 'next/headers';

// ── Rate limiting (in-memory, per-IP, max 3/hour) ──────────────────
const rateLimitMap = new Map<string, number[]>();
const MAX_SUBMISSIONS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

// Clean stale entries every 10 minutes
if (typeof globalThis !== 'undefined') {
  const CLEANUP_INTERVAL = 10 * 60 * 1000;
  let cleanupScheduled = false;
  if (!cleanupScheduled) {
    cleanupScheduled = true;
    setInterval(() => {
      const now = Date.now();
      for (const [ip, timestamps] of rateLimitMap) {
        const recent = timestamps.filter((t) => now - t < WINDOW_MS);
        if (recent.length === 0) {
          rateLimitMap.delete(ip);
        } else {
          rateLimitMap.set(ip, recent);
        }
      }
    }, CLEANUP_INTERVAL).unref?.();
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  rateLimitMap.set(ip, timestamps);
  return timestamps.length >= MAX_SUBMISSIONS;
}

function recordSubmission(ip: string): void {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
}

// ── Validation helpers ─────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 2000;

function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim();
}

export interface ContactFormState {
  success: boolean;
  error?: string;
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // ── Honeypot check ────────────────────────────────────────────
  const honeypot = formData.get('website');
  if (honeypot && String(honeypot).length > 0) {
    // Bot filled the hidden field — accept silently but discard
    return { success: true };
  }

  // ── Extract & sanitize fields ─────────────────────────────────
  const rawName = String(formData.get('name') ?? '');
  const rawEmail = String(formData.get('email') ?? '');
  const rawMessage = String(formData.get('message') ?? '');

  const name = stripHtml(rawName).slice(0, MAX_NAME_LENGTH);
  const email = stripHtml(rawEmail).slice(0, MAX_NAME_LENGTH);
  const message = stripHtml(rawMessage).slice(0, MAX_MESSAGE_LENGTH);

  // ── Validation ────────────────────────────────────────────────
  if (!name) {
    return { success: false, error: 'Name is required.' };
  }
  if (!email || !EMAIL_RE.test(email)) {
    return { success: false, error: 'A valid email address is required.' };
  }
  if (!message) {
    return { success: false, error: 'Message is required.' };
  }
  if (rawMessage.length > MAX_MESSAGE_LENGTH) {
    return { success: false, error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` };
  }

  // ── Rate limiting ─────────────────────────────────────────────
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1';

  if (isRateLimited(ip)) {
    return { success: false, error: 'Too many messages. Please try again later.' };
  }

  recordSubmission(ip);

  // ── Send (placeholder — log for now) ──────────────────────────
  // In production, this would send an email via a transactional service
  console.info('[contact-form]', { name, email, messageLength: message.length });

  return { success: true };
}
