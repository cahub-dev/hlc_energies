import { assertValidProjects } from './validate'
import type { ReferenceProject } from './types'

const CC1_ATTRIBUTION = {
  pt: 'Executado pela CC1 — Construction Corporation No. 1 – JSC, parceiro técnico do Consórcio HLC–CC1.',
  en: 'Executed by CC1 — Construction Corporation No. 1 – JSC, technical partner of the HLC–CC1 Consortium.',
}

const CC1_SOURCE = {
  pt: 'Fonte: HLC Company Profile',
  en: 'Source: HLC Company Profile',
}

/**
 * CC1 technical reference projects, sourced from the HLC Company Profile
 * (and, for Vinh Tan 4, the supplied CC1 project page). These are NOT HLC
 * projects — attribution is mandatory. See COPY.md §9 / §17.
 */
export const referenceProjects: ReferenceProject[] = [
  {
    slug: 'dakr-tih',
    entity: 'CC1',
    name: { pt: 'Usinas Hidrelétricas de Dakr Tih', en: 'Dakr Tih Hydropower Plants' },
    location: {
      pt: 'Província de Gia Nghia, província de Dak Nong',
      en: 'Gia Nghia Province, Dak Nong Province',
    },
    // COPY.md is explicit: do NOT add a unit after "635 milhões".
    capacity: {
      pt: 'Capacidade de 144 MW; potência indicada como “635 milhões por ano”',
      en: '144 MW capacity; output stated as “635 million per year”',
    },
    attribution: CC1_ATTRIBUTION,
    sourceLabel: CC1_SOURCE,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'han-kiem-2',
    entity: 'CC1',
    name: { pt: 'Usina Eólica de Han Kiem 2', en: 'Han Kiem 2 Wind Power Plant' },
    location: { pt: 'Província de Binh Thuan', en: 'Binh Thuan Province' },
    capacity: { pt: 'Capacidade de 15 MW, 6 turbinas', en: '15 MW capacity, 6 turbines' },
    attribution: CC1_ATTRIBUTION,
    sourceLabel: CC1_SOURCE,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'tay-ninh-ttc',
    entity: 'CC1',
    name: {
      pt: 'Usinas Solares de Tay Ninh TTC1 & TTC2',
      en: 'Tay Ninh TTC1 & TTC2 Solar Power Plants',
    },
    location: { pt: 'Tay Ninh', en: 'Tay Ninh' },
    capacity: {
      pt: 'TTC1, capacidade de 68,8 MW; TTC2, capacidade de 50 MW',
      en: 'TTC1, 68.8 MW capacity; TTC2, 50 MW capacity',
    },
    attribution: CC1_ATTRIBUTION,
    sourceLabel: CC1_SOURCE,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'nghi-son-2',
    entity: 'CC1',
    name: { pt: 'Usina Termelétrica de Nghi Son 2', en: 'Nghi Son 2 Thermal Power Plant' },
    location: { pt: 'Província de Thanh Hoa', en: 'Thanh Hoa Province' },
    // COPY.md: profile provides no capacity; must not be invented.
    attribution: CC1_ATTRIBUTION,
    sourceLabel: CC1_SOURCE,
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'vinh-tan-4',
    entity: 'CC1',
    name: { pt: 'Central Termoeléctrica Vinh Tan 4', en: 'Vinh Tan 4 Thermal Power Plant' },
    location: {
      pt: 'Tuy Phong, província de Binh Thuan',
      en: 'Tuy Phong, Binh Thuan Province',
    },
    executionPeriod: '2014–2017',
    capacity: { pt: 'Capacidade de 1.200 MW', en: '1,200 MW capacity' },
    attribution: {
      pt: 'Projecto de referência listado no website da Construction Corporation No. 1 – JSC (CC1), parceiro técnico do Consórcio HLC–CC1. Não é um projecto executado pela HLC.',
      en: 'A reference project listed on the website of Construction Corporation No. 1 – JSC (CC1), technical partner of the HLC–CC1 Consortium. It is not an HLC-executed project.',
    },
    sourceLabel: {
      pt: 'Fonte: website da CC1',
      en: 'Source: CC1 website',
    },
    sourceUrl: 'https://www.cc1.vn/en/project/nha-may-nhiet-dien-vinh-tan-4',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
  },
]

// Fail the build/import if any project lacks valid CC1 attribution.
assertValidProjects(referenceProjects)
