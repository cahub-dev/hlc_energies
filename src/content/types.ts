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
  consortium: { label: string; heading: string; body: string[] }
  financials: {
    heading: string
    items: { label: string; value: string }[]
  }
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
  projects: { label: string; heading: string; intro: string; cta: CTA }
  contact: {
    label: string
    heading: string
    addressLabel: string
    address: string
    emailLabel: string
    email: string
    identity: string[]
  }
  footer: { copyright: string }
  ui: { skipToContent: string; switchTo: string; menu: string; close: string }
}

/**
 * A reference project. Attribution is MANDATORY and always to CC1 in version 1;
 * an HLC executing entity is explicitly rejected. See validate.ts.
 */
export type ReferenceProject = {
  slug: string
  entity: 'CC1'
  name: Localized<string>
  attribution: Localized<string>
  sourceLabel: Localized<string>
  location?: Localized<string>
  executionPeriod?: string
  capacity?: Localized<string>
  sourceUrl?: string
  image?: string
}
