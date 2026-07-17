import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import type { Locale, SiteContent } from '@/content/types'

export default function Nav({
  locale,
  nav,
  ui,
}: {
  locale: Locale
  nav: SiteContent['nav']
  ui: SiteContent['ui']
}) {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <div className="page-wrap flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <a
          href="#top"
          className="inline-flex items-center no-underline group"
        >
          <img
            src="/logo-hlc-white.svg"
            alt="HLC Energias Renováveis e Infraestruturas, LDA"
            className="h-9 w-auto transition-opacity group-hover:opacity-80 sm:h-10"
            width={142}
            height={40}
          />
        </a>

        {/* Center: Navigation Pill */}
        <nav
          aria-label={locale === 'pt' ? 'Navegação principal' : 'Main navigation'}
          className="hidden lg:flex"
        >
          <ul className="flex items-center gap-1 rounded-full bg-white px-2 py-1.5 shadow-sm">
            {nav.map((item, index) => {
              const isActive = index === 0; // Home is active in mockup
              return (
                <li key={item.to}>
                  <a
                    href={item.to}
                    onClick={() => setOpen(false)}
                    className={`block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium no-underline transition-colors ${
                      isActive
                        ? 'bg-hlc-blue-800 text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <a
            href="#contactos"
            className="hidden sm:inline-flex whitespace-nowrap items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
            {ui.contact}
          </a>
          
          <button
            type="button"
            aria-expanded={open}
            aria-controls="primary-menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-full bg-white w-10 h-10 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label={ui.menu}
          >
            <div className="space-y-1">
              <span className="block w-4 h-0.5 bg-gray-800"></span>
              <span className="block w-4 h-0.5 bg-gray-800"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <ul
          id="primary-menu"
          className={`${
            open ? 'flex' : 'hidden'
          } absolute inset-x-4 top-[calc(100%+0.5rem)] flex-col gap-1 rounded-xl border border-[var(--line)] bg-white p-3 shadow-lg lg:hidden`}
        >
          {nav.map((item) => (
            <li key={item.to}>
              <a
                href={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 no-underline hover:bg-gray-100"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2 border-t border-gray-100 pt-2">
            <LanguageSwitcher locale={locale} />
          </li>
        </ul>
      </div>
    </header>
  )
}
