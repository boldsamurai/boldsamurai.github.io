import type { Locale, Translations } from './translations';
import { translations } from './translations';

export function t(locale: Locale): Translations {
  return translations[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'pl' ? 'en' : 'pl';
}

export function getLocaleLabel(locale: Locale): string {
  return locale === 'pl' ? 'PL' : 'EN';
}

export function getLocalePath(locale: Locale): string {
  return `/${locale}/`;
}
