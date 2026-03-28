import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sendContactMessage, type ContactFormState } from '@/app/[locale]/actions/send-contact';

// Mock next/headers
vi.mock('next/headers', () => ({
  headers: () =>
    Promise.resolve(
      new Map([['x-forwarded-for', '192.168.1.1']]),
    ),
}));

function makeFormData(fields: Record<string, string>): FormData {
  const fd = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    fd.set(key, value);
  }
  return fd;
}

const initial: ContactFormState = { success: false };

describe('sendContactMessage server action', () => {
  beforeEach(() => {
    vi.spyOn(console, 'info').mockImplementation(() => {});
  });

  it('succeeds with valid fields', async () => {
    const result = await sendContactMessage(initial, makeFormData({
      name: 'Alice',
      email: 'alice@example.com',
      message: 'Hello!',
    }));
    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it('fails when name is empty', async () => {
    const result = await sendContactMessage(initial, makeFormData({
      name: '',
      email: 'alice@example.com',
      message: 'Hello!',
    }));
    expect(result.success).toBe(false);
    expect(result.error).toContain('Name');
  });

  it('fails when email is invalid', async () => {
    const result = await sendContactMessage(initial, makeFormData({
      name: 'Alice',
      email: 'not-an-email',
      message: 'Hello!',
    }));
    expect(result.success).toBe(false);
    expect(result.error).toContain('email');
  });

  it('fails when message is empty', async () => {
    const result = await sendContactMessage(initial, makeFormData({
      name: 'Alice',
      email: 'alice@example.com',
      message: '',
    }));
    expect(result.success).toBe(false);
    expect(result.error).toContain('Message');
  });

  it('strips HTML tags from inputs', async () => {
    const result = await sendContactMessage(initial, makeFormData({
      name: '<script>alert("xss")</script>Alice',
      email: 'alice@example.com',
      message: '<b>Hello</b>',
    }));
    expect(result.success).toBe(true);
    // Verify the logged name was sanitized
    expect(console.info).toHaveBeenCalledWith(
      '[contact-form]',
      expect.objectContaining({ name: 'alert("xss")Alice' }),
    );
  });

  it('silently accepts but discards honeypot submissions', async () => {
    // Clear previous calls from earlier tests
    vi.mocked(console.info).mockClear();
    const result = await sendContactMessage(initial, makeFormData({
      name: 'Bot',
      email: 'bot@example.com',
      message: 'Spam',
      website: 'http://spam.com',
    }));
    // Accepted (success: true) but console.info was NOT called
    expect(result.success).toBe(true);
    expect(console.info).not.toHaveBeenCalled();
  });

  it('rejects message over 2000 characters', async () => {
    const result = await sendContactMessage(initial, makeFormData({
      name: 'Alice',
      email: 'alice@example.com',
      message: 'x'.repeat(2001),
    }));
    expect(result.success).toBe(false);
    expect(result.error).toContain('2000');
  });
});
