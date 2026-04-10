/**
 * i18n Configuration
 * Defines available locales, default locale, and locale metadata
 */

export const locales = ['de', 'en', 'vi'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  vi: 'Tiếng Việt',
};

export const localeFlags: Record<Locale, string> = {
  de: '🇩🇪',
  en: '🇬🇧',
  vi: '🇻🇳',
};

/**
 * Check if a given string is a valid locale
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
