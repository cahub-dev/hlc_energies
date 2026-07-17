import { content } from '@/content/site'
import type { Locale } from '@/content/types'

/**
 * Central SEO builder. All copy is pulled from `src/content/site.ts` (grounded
 * in COPY.md); no claims, phone numbers, legal IDs or CC1 financials are added
 * here. See assets/05_SEO_ACCESSIBILITY_SECURITY.md for the governing spec.
 */

const env = import.meta.env as Record<string, string | undefined>

/** Absolute site origin, no trailing slash. Used for canonical/hreflang/OG. */
export const SITE_URL = (env.VITE_SITE_URL ?? 'https://hlcenergies.com').replace(
  /\/+$/,
  '',
)

/** Emit noindex on staging (set VITE_NOINDEX=true). Production stays indexable. */
const NOINDEX = env.VITE_NOINDEX === 'true'

const SITE_NAME = 'HLC Energies'

/** Approved keyword themes only — assets/05 §2. No superlatives. */
const KEYWORDS: Record<Locale, string> = {
  pt: [
    'HLC Energias Renováveis e Infraestruturas',
    'energia e infra-estruturas em Moçambique',
    'projectos de energia em Moçambique',
    'centrais eléctricas EPC',
    'linhas de transporte e distribuição',
    'subestações eléctricas',
    'projectos solares IPP',
    'electrificação rural',
    'Consórcio HLC–CC1',
  ].join(', '),
  en: [
    'HLC Renewable Energies and Infrastructures',
    'energy and infrastructure in Mozambique',
    'energy projects in Mozambique',
    'EPC power plants',
    'transmission and distribution lines',
    'electrical substations',
    'solar IPP projects',
    'rural electrification',
    'HLC–CC1 Consortium',
  ].join(', '),
}

const OG_LOCALE: Record<Locale, string> = { pt: 'pt_PT', en: 'en_US' }

/** Postal address is language-neutral, so one object serves both locales. */
const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Rua de Micaia, Q. N.º 56, N.º 115',
  addressLocality: 'Maputo',
  addressRegion: 'Costa do Sol, Kamavota',
  addressCountry: 'MZ',
}

function localeUrl(locale: Locale): string {
  return `${SITE_URL}/${locale}`
}

function ogImageUrl(locale: Locale): string {
  return `${SITE_URL}/og-hlc-home-${locale}.jpg`
}

/**
 * JSON-LD @graph string for a locale: Organization + WebSite + ContactPoint.
 * Deliberately omits telephone, sameAs, NUIT, legal-entity number, legal
 * representative, revenue and any CC1 figures (assets/05 §4 & §11).
 */
export function jsonLd(locale: Locale): string {
  const c = content[locale]
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: c.meta.title,
        url: localeUrl(locale),
        logo: `${SITE_URL}/logo512.png`,
        image: ogImageUrl(locale),
        email: c.contact.email,
        description: c.meta.description,
        address: POSTAL_ADDRESS,
        areaServed: 'MZ',
        memberOf: { '@type': 'Organization', name: 'HLC Group' },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: c.contact.email,
          areaServed: 'MZ',
          availableLanguage: ['pt', 'en'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: c.meta.title,
        url: SITE_URL,
        inLanguage: locale === 'pt' ? 'pt-MZ' : 'en',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${localeUrl(locale)}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: c.nav[0]?.label ?? (locale === 'pt' ? 'Início' : 'Home'),
            item: localeUrl(locale),
          },
        ],
      },
    ],
  }
  return JSON.stringify(graph)
}

/** Meta + link arrays for a locale route's TanStack Router `head()` option. */
export function buildSeo({ locale }: { locale: Locale }) {
  const c = content[locale]
  const url = localeUrl(locale)
  const ogImage = ogImageUrl(locale)
  const other: Locale = locale === 'pt' ? 'en' : 'pt'

  return {
    meta: [
      { title: c.meta.title },
      { name: 'description', content: c.meta.description },
      { name: 'keywords', content: KEYWORDS[locale] },
      { name: 'robots', content: NOINDEX ? 'noindex,nofollow' : 'index,follow' },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:title', content: c.meta.title },
      { property: 'og:description', content: c.meta.description },
      { property: 'og:url', content: url },
      { property: 'og:locale', content: OG_LOCALE[locale] },
      { property: 'og:locale:alternate', content: OG_LOCALE[other] },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: c.hero.tagline },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: c.meta.title },
      { name: 'twitter:description', content: c.meta.description },
      { name: 'twitter:image', content: ogImage },
    ],
    links: [
      { rel: 'canonical', href: url },
      { rel: 'alternate', hrefLang: 'pt', href: `${SITE_URL}/pt` },
      { rel: 'alternate', hrefLang: 'en', href: `${SITE_URL}/en` },
      { rel: 'alternate', hrefLang: 'x-default', href: `${SITE_URL}/pt` },
    ],
  }
}
