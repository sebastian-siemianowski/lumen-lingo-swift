/**
 * Locale-aware utilities for currency display, number formatting,
 * and other culturally-adapted content.
 */

/** Locale → primary currency mapping (informational only — App Store handles actual billing). */
const localeCurrencyMap: Record<string, { code: string; symbol: string }> = {
  en: { code: 'GBP', symbol: '£' },
  es: { code: 'USD', symbol: '$' },
  fr: { code: 'EUR', symbol: '€' },
  de: { code: 'EUR', symbol: '€' },
  pt: { code: 'BRL', symbol: 'R$' },
  pl: { code: 'PLN', symbol: 'zł' },
  ja: { code: 'JPY', symbol: '¥' },
  zh: { code: 'CNY', symbol: '¥' },
  ar: { code: 'SAR', symbol: 'ر.س' },
  uk: { code: 'UAH', symbol: '₴' },
};

export function getLocaleCurrency(locale: string) {
  return localeCurrencyMap[locale] ?? localeCurrencyMap.en;
}
