import { Link, useRouterState } from '@tanstack/react-router'
import { localeName, otherLocale, switchLocalePath } from '@/lib/i18n'
import type { Locale } from '@/content/types'

/** Floating language toggle, fixed bottom-right, visible on every screen. */
export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const target = otherLocale(locale)
  const to = switchLocalePath(pathname, target)

  return (
    <Link
      to={to}
      hrefLang={target}
      aria-label={localeName[target]}
      className="fixed bottom-6 right-6 z-[90] inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-hlc-blue-800 shadow-lg ring-1 ring-black/5 no-underline transition-colors hover:bg-hlc-blue-800 hover:text-white"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <span aria-hidden="true">{target.toUpperCase()}</span>
      <span className="sr-only">{localeName[target]}</span>
    </Link>
  )
}
