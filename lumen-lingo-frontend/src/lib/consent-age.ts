/**
 * Maps locale codes to the minimum digital consent age for that jurisdiction.
 * Used by newsletter and waitlist forms for locale-aware age verification.
 */

const LOCALE_CONSENT_AGE: Record<string, number> = {
  en: 13, // UK GDPR / COPPA
  es: 14, // Spain LOPDGDD
  fr: 15, // France Loi Informatique et Libertés
  de: 16, // Germany BDSG
  ja: 16, // Japan APPI (conservative default)
  zh: 14, // China PIPL Art. 31
  ar: 18, // UAE PDPL
  pl: 16, // Poland GDPR implementation
  uk: 16, // Ukraine (GDPR-aligned default)
  pt: 13, // Brazil/Portugal (LGPD: 12 for children, we use 13 as minimum)
};

const DEFAULT_CONSENT_AGE = 16; // Highest common EU age — safe default

export function getConsentAge(locale: string): number {
  return LOCALE_CONSENT_AGE[locale] ?? DEFAULT_CONSENT_AGE;
}
