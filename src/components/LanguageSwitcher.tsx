import { Link, useRouterState } from '@tanstack/react-router'
import { localeName, otherLocale, switchLocalePath } from '@/lib/i18n'
import type { Locale } from '@/content/types'

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const target = otherLocale(locale)
  const to = switchLocalePath(pathname, target)

  return (
    <Link
      to={to}
      hrefLang={target}
      aria-label={localeName[target]}
      className="inline-flex items-center rounded-full border border-hlc-blue-800 px-3 py-1.5 text-xs font-bold text-hlc-blue-800 no-underline transition-colors hover:bg-hlc-blue-800 hover:text-white"
    >
      <span aria-hidden="true">{target.toUpperCase()}</span>
      <span className="sr-only">{localeName[target]}</span>
    </Link>
  )
}
