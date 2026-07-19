export type Locale = 'pt' | 'en'
export const LOCALES: readonly Locale[] = ['pt', 'en'] as const
export const DEFAULT_LOCALE: Locale = 'pt' // Portuguese is authoritative

export type Localized<T> = Record<Locale, T>

export type CTA = { label: string; to: string }
export type NavItem = { label: string; to: string }

export type Pillar = { title: string; body: string }
export type Area = { title: string; body?: string }

export type SiteContent = {
  meta: { title: string; description: string }
  nav: NavItem[]
  hero: {
    title: string
    tagline: string
    body: string[]
    primary: CTA
    secondary: CTA
  }
  about: { label: string; heading: string; body: string[] }
  consortium: {
    label: string
    heading: string
    body: string[]
    roles: {
      localHeading: string
      localName: string
      localItems: string[]
      partnerHeading: string
      partnerName: string
      partnerItems: string[]
    }
    credentials: { heading: string; items: string[] }
    transfer: {
      heading: string
      intro: string
      pillars: { title: string; body: string }[]
      note: { title: string; body: string }
    }
    partners: {
      heading: string
      intro: string
      statValue: string
      statLabel: string
      names: string[]
    }
  }
  legal: { heading: string; lines: string[] }
  areas: {
    label: string
    heading: string
    intro: string
    items: Area[]
    outro: string
  }
  commitment: {
    label: string
    heading: string
    intro: string
    pillars: Pillar[]
    notes: string[]
  }
  projects: {
    label: string
    heading: string
    intro: string
    cta: CTA
    record: {
      heading: string
      intro: string
      items: { name: string; period: string }[]
    }
  }
  contact: {
    label: string
    heading: string
    infoTitle: string
    addressLabel: string
    address: string
    emailLabel: string
    email: string
    phoneLabel: string
    /** Empty until a real number is supplied; rendered only when set. */
    phone: string
    cta: string
    identity: string[]
    form: ContactForm
  }
  footer: {
    tagline: string
    navTitle: string
    areasTitle: string
    contactTitle: string
    contactCta: string
    backToTop: string
    copyright: string
  }
  ui: {
    skipToContent: string
    switchTo: string
    menu: string
    close: string
    contact: string
  }
}

export type ContactForm = {
  heading: string
  headingAccent: string
  intro: string
  name: string
  namePlaceholder: string
  email: string
  emailPlaceholder: string
  phone: string
  phonePlaceholder: string
  company: string
  companyPlaceholder: string
  message: string
  messagePlaceholder: string
  submit: string
  consent: string
  privacy: string
  sending: string
  success: string
  error: string
}

/**
 * A reference project. Attribution is MANDATORY and always to CC1 in version 1;
 * an HLC executing entity is explicitly rejected. See validate.ts.
 */
export type ReferenceProject = {
  slug: string
  entity: 'CC1'
  name: Localized<string>
  /** Energy sector, in Mozambican PT terms (e.g. Hidroeléctrica, Eólica). */
  sector: Localized<string>
  attribution: Localized<string>
  sourceLabel: Localized<string>
  location?: Localized<string>
  executionPeriod?: string
  capacity?: Localized<string>
  sourceUrl?: string
  /** Local image paths served from public/, first is the card cover. */
  images: string[]
}
