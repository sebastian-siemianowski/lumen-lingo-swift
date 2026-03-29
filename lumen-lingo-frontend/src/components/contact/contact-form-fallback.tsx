'use client';

import { useActionState } from 'react';
import { sendContactMessage, type ContactFormState } from '@/app/[locale]/actions/send-contact';
import { useTranslations } from 'next-intl';

const initialState: ContactFormState = { success: false };

/**
 * ContactFormFallback — rendered inside `<noscript>` for users with JS disabled.
 *
 * Uses a Next.js Server Action so no client JS is needed for submission.
 * Includes a honeypot field (hidden via CSS) to trap bots.
 *
 * NOTE: This is wrapped in `<noscript>` in the contact section, so it only
 * renders when JS is disabled. The `useActionState` hook enables progressive
 * enhancement — with JS disabled, the form works via standard HTML form submission.
 */
export function ContactFormFallback() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const t = useTranslations('Contact');

  if (state.success) {
    return (
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center">
        <p className="text-sm font-medium text-emerald-400">
          {t('form.success')}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      {state.error && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-2">
          <p className="text-sm text-red-400">{state.error}</p>
        </div>
      )}

      {/* Honeypot — hidden from humans, traps bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-white/70">
          {t('form.nameLabel')} <span className="text-red-400">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={200}
          className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30"
          placeholder={t('form.namePlaceholder')}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-white/70">
          {t('form.emailLabel')} <span className="text-red-400">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={200}
          className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30"
          placeholder={t('form.emailPlaceholder')}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-white/70">
          {t('form.messageLabel')} <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={2000}
          rows={5}
          className="w-full resize-y rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30"
          placeholder={t('form.messagePlaceholder')}
        />
        <p className="mt-1 text-xs text-white/30">{t('form.maxChars')}</p>
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full border border-violet/25 bg-violet/10 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet/20"
      >
        {t('form.submit')}
      </button>
    </form>
  );
}
