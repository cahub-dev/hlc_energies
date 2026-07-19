'use client'

import { content } from '@/content/site'
import type { Locale } from '@/content/types'

export default function Footer({ locale }: { locale: Locale }) {
  const c = content[locale]
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Footer navigation reuses the real header nav plus the Contact anchor.
  const navLinks = [...c.nav, { label: c.ui.contact, to: '#contactos' }]

  return (
    <footer className="bg-hlc-blue-800 pt-20 pb-8 text-white relative overflow-hidden">
      {/* Background Graphic (Subtle large shape on the right) */}
      <div className="absolute right-[-10%] top-1/4 opacity-[0.05] pointer-events-none w-[600px] h-[600px]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M10,90 L30,10 L50,90 L70,10 L90,90" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="page-wrap relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">

          {/* Column 1: Identity */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div>
              <img
                src="/logo-hlc-white.svg"
                alt="HLC Energies"
                className="h-10 w-auto mb-3"
                width={142}
                height={40}
              />
              <p className="text-[0.7rem] text-white/80 uppercase tracking-widest">{c.footer.tagline}</p>
            </div>
            <div className="space-y-1 text-[0.8rem] text-white/85 leading-relaxed">
              {c.contact.identity.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6 lg:w-1/6">
            <h3 className="text-[0.9rem] font-medium text-white/90">{c.footer.navTitle}</h3>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <a href={item.to} className="text-[0.8rem] text-white/85 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Areas of activity */}
          <div className="space-y-6 lg:w-1/4">
            <h3 className="text-[0.9rem] font-medium text-white/90">{c.footer.areasTitle}</h3>
            <ul className="space-y-3">
              {c.areas.items.map((area) => (
                <li key={area.title}>
                  <a href="#areas" className="text-[0.8rem] text-white/85 hover:text-white transition-colors">
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6 lg:w-1/5">
            <h3 className="text-[0.9rem] font-medium text-white/90">{c.footer.contactTitle}</h3>
            <div className="space-y-2 text-[0.8rem] text-white/85 leading-relaxed">
              <a href={`mailto:${c.contact.email}`} className="block hover:text-white transition-colors">
                {c.contact.email}
              </a>
              {c.contact.phone && (
                <a
                  href={`tel:${c.contact.phone.replace(/\s+/g, '')}`}
                  className="block hover:text-white transition-colors"
                >
                  {c.contact.phone}
                  {c.contact.contactPerson ? ` · ${c.contact.contactPerson}` : ''}
                </a>
              )}
              <p>{c.contact.address}</p>
            </div>
            <a
              href="#contactos"
              className="inline-flex items-center gap-2 border border-white/60 rounded-md px-4 py-1.5 text-[0.75rem] font-medium text-white hover:bg-white hover:text-hlc-blue-800 transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-current"></span> {c.footer.contactCta}
            </a>
          </div>

        </div>

        {/* Legal information — for official / institutional visitors */}
        <div className="mb-8 border-t border-white/15 pt-8">
          <h3 className="mb-2 text-[0.7rem] font-medium uppercase tracking-widest text-white/60">
            {c.legal.heading}
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.75rem] text-white/70">
            {c.legal.lines.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[0.75rem] text-white/80">
          <p>{c.footer.copyright}</p>
          <button onClick={scrollToTop} className="hover:text-white transition-colors flex items-center gap-1.5 font-medium">
            {c.footer.backToTop} <span className="text-[0.85rem]">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
