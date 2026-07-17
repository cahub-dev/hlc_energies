import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLenis } from 'lenis/react'
import type { Locale, SiteContent } from '@/content/types'

gsap.registerPlugin(useGSAP)

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
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const navLabel = locale === 'pt' ? 'Navegação principal' : 'Main navigation'

  // Auto-hide on scroll (driven by Lenis): transparent at the top, hides on
  // scroll down, reveals with a solid background on scroll up. Keep it shown
  // while the mobile overlay is open. setState with an unchanged value is a
  // no-op in React, so calling this every scroll frame is cheap.
  useLenis((lenis) => {
    const atTop = lenis.scroll <= 40
    setScrolled(!atTop)
    if (open || atTop) {
      setHidden(false)
    } else if (lenis.direction === 1) {
      setHidden(true)
    } else if (lenis.direction === -1) {
      setHidden(false)
    }
  })

  // Smoothly slide + fade the header when its hidden state flips.
  useGSAP(
    () => {
      const el = headerRef.current
      if (!el) return
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      gsap.to(el, {
        yPercent: hidden ? -100 : 0,
        autoAlpha: hidden ? 0 : 1,
        duration: reduce ? 0 : hidden ? 0.35 : 0.6,
        ease: hidden ? 'power2.in' : 'power3.out',
      })
    },
    { dependencies: [hidden] },
  )

  // While the overlay is open: Escape closes it and focus moves to the close
  // button; on close focus returns to the menu button.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    closeButtonRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => {
    setOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,padding] duration-300 ease-out ${
          scrolled
            ? 'bg-hlc-blue-900/95 backdrop-blur-sm shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="page-wrap flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <a href="#top" className="inline-flex items-center no-underline group">
            <img
              src="/logo-hlc-white.svg"
              alt="HLC Energias Renováveis e Infraestruturas, LDA"
              className="h-9 w-auto transition-opacity group-hover:opacity-80 sm:h-10"
              width={142}
              height={40}
            />
          </a>

          {/* Center: Navigation Pill (desktop) */}
          <nav aria-label={navLabel} className="hidden lg:flex">
            <ul className="flex items-center gap-1 rounded-full bg-white px-2 py-1.5 shadow-sm">
              {nav.map((item, index) => (
                <li key={item.to}>
                  <a
                    href={item.to}
                    className={`block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium no-underline transition-colors ${
                      index === 0
                        ? 'bg-hlc-blue-800 text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
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
              ref={menuButtonRef}
              type="button"
              aria-expanded={open}
              aria-controls="primary-menu"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex items-center justify-center rounded-full bg-white w-10 h-10 shadow-sm hover:bg-gray-50 transition-colors"
              aria-label={ui.menu}
            >
              <div className="space-y-1">
                <span className="block w-4 h-0.5 bg-gray-800"></span>
                <span className="block w-4 h-0.5 bg-gray-800"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay — sibling of <header> so the header's
          transform never affects its fixed positioning. */}
      <div
        id="primary-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[80] lg:hidden bg-hlc-blue-900 text-white transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="page-wrap flex h-full flex-col">
          <div className="flex items-center justify-between py-6">
            <img
              src="/logo-hlc-white.svg"
              alt=""
              className="h-9 w-auto"
              width={142}
              height={40}
            />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label={ui.close}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav aria-label={navLabel} className="flex flex-1 flex-col justify-center gap-1 pb-24">
            {nav.map((item) => (
              <a
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-3xl font-medium text-white/90 no-underline transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contactos"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex w-max items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-hlc-blue-900 no-underline"
            >
              {ui.contact} <span aria-hidden="true">&rarr;</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}
