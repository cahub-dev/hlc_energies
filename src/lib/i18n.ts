import { DEFAULT_LOCALE, LOCALES, type Locale } from '@/content/types'

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

/** Derive the active locale from a pathname such as "/en" or "/pt/...". */
export function localeFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0]
  return first && isLocale(first) ? first : DEFAULT_LOCALE
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'pt' ? 'en' : 'pt'
}

/** Equivalent page in the other locale, preserving the sub-path. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length > 0 && isLocale(parts[0]!)) {
    parts[0] = target
  } else {
    parts.unshift(target)
  }
  return '/' + parts.join('/')
}

export const localeName: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
}
