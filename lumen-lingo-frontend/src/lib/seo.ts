import type { Locale } from '@/i18n/routing';
import { routing } from '@/i18n/routing';

/**
 * Map short locale codes to IETF og:locale format.
 * @see https://ogp.me/#optional — og:locale uses language_TERRITORY
 */
const ogLocaleMap: Record<string, string> = {
  en: 'en_GB',
  es: 'es_ES',
  fr: 'fr_FR',
  ja: 'ja_JP',
  de: 'de_DE',
  pt: 'pt_BR',
  pl: 'pl_PL',
  ar: 'ar_SA',
  zh: 'zh_CN',
  uk: 'uk_UA',
};

export function getOgLocale(locale: string): string {
  return ogLocaleMap[locale] ?? locale;
}

export function getOgAlternateLocales(currentLocale: string): string[] {
  return routing.locales
    .filter((l) => l !== currentLocale)
    .map((l) => getOgLocale(l));
}

const siteUrl = 'https://lumenlingo.com';

/**
 * Build an absolute URL for a given page path and locale.
 * English (default locale) has no prefix under `localePrefix: 'as-needed'`.
 */
export function localizedUrl(path: string, locale: string): string {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return `${siteUrl}${prefix}${path}`;
}

/**
 * Build `alternates` object for Next.js `generateMetadata`.
 * Produces self-referencing canonical + full hreflang map + x-default.
 */
export function buildAlternates(path: string, locale: string) {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = localizedUrl(path, loc);
  }
  languages['x-default'] = localizedUrl(path, routing.defaultLocale);

  return {
    canonical: localizedUrl(path, locale),
    languages,
  };
}
