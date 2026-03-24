'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

/**
 * Subtle banner shown on legal pages for non-English locales,
 * informing the user that the English version is authoritative.
 */
export function LanguageDisclaimer({ href }: { href: string }) {
  const locale = useLocale();
  const t = useTranslations('Legal');

  if (locale === 'en') return null;

  return (
    <div className="mx-auto mb-6 max-w-4xl" role="note">
      <div className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className="mt-0.5 h-4 w-4 shrink-0 text-white/30"
          aria-hidden
        >
          <path
            d="M3 5h2m0 0V3m0 2a7 7 0 0010.95 5.77M17 15h-2m0 0v2m0-2a7 7 0 00-10.95-5.77"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-xs leading-relaxed text-white/40">
          {t('languageDisclaimer')}{' '}
          <Link
            href={href}
            locale="en"
            className="text-white/50 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white/70 hover:decoration-white/40"
          >
            {t('viewEnglishVersion')}
          </Link>
        </p>
      </div>
    </div>
  );
}
