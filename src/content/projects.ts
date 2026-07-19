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
    name: { pt: 'Centrais Hidroeléctricas de Dakr Tih', en: 'Dakr Tih Hydropower Plants' },
    sector: { pt: 'Central hidroeléctrica', en: 'Hydropower' },
    location: {
      pt: 'Província de Gia Nghia, província de Dak Nong',
      en: 'Gia Nghia Province, Dak Nong Province',
    },
    // Unit "kWh/year" added per Mr. Lam's written review (July 2026), which
    // supersedes the earlier COPY.md "no unit" note.
    capacity: {
      pt: 'Capacidade de 144 MW; produção de 635 milhões de kWh/ano',
      en: '144 MW capacity; 635 million kWh/year output',
    },
    attribution: CC1_ATTRIBUTION,
    sourceLabel: CC1_SOURCE,
    images: [
      '/project-reference-images/01_dakr-tih-hydropower-plants/dakr-tih-01.jpg',
      '/project-reference-images/01_dakr-tih-hydropower-plants/dakr-tih-02.jpg',
    ],
  },
  {
    slug: 'han-kiem-2',
    entity: 'CC1',
    name: { pt: 'Central Eólica de Han Kiem 2', en: 'Han Kiem 2 Wind Power Plant' },
    sector: { pt: 'Central eólica', en: 'Wind power' },
    location: { pt: 'Província de Binh Thuan', en: 'Binh Thuan Province' },
    capacity: { pt: 'Capacidade de 15 MW, 6 turbinas', en: '15 MW capacity, 6 turbines' },
    attribution: CC1_ATTRIBUTION,
    sourceLabel: CC1_SOURCE,
    images: [
      '/project-reference-images/02_han-kiem-2-wind-power-plant/han-kiem-2-01.jpg',
      '/project-reference-images/02_han-kiem-2-wind-power-plant/han-kiem-2-02.jpg',
    ],
  },
  {
    slug: 'tay-ninh-ttc',
    entity: 'CC1',
    name: {
      pt: 'Centrais Solares de Tay Ninh TTC1 & TTC2',
      en: 'Tay Ninh TTC1 & TTC2 Solar Power Plants',
    },
    sector: { pt: 'Centrais solares', en: 'Solar power' },
    location: { pt: 'Tay Ninh', en: 'Tay Ninh' },
    capacity: {
      pt: 'TTC1, capacidade de 68,8 MW; TTC2, capacidade de 50 MW',
      en: 'TTC1, 68.8 MW capacity; TTC2, 50 MW capacity',
    },
    attribution: CC1_ATTRIBUTION,
    sourceLabel: CC1_SOURCE,
    images: [
      '/project-reference-images/03_tay-ninh-ttc1-ttc2-solar-power-plants/tay-ninh-ttc1-ttc2-01.jpg',
      '/project-reference-images/03_tay-ninh-ttc1-ttc2-solar-power-plants/tay-ninh-ttc1-ttc2-02.jpg',
      '/project-reference-images/03_tay-ninh-ttc1-ttc2-solar-power-plants/tay-ninh-ttc1-ttc2-03.jpg',
      '/project-reference-images/03_tay-ninh-ttc1-ttc2-solar-power-plants/tay-ninh-ttc1-ttc2-04.jpg',
    ],
  },
  {
    slug: 'nghi-son-2',
    entity: 'CC1',
    name: { pt: 'Central Termoeléctrica de Nghi Son 2', en: 'Nghi Son 2 Thermal Power Plant' },
    sector: { pt: 'Central termoeléctrica', en: 'Thermal power' },
    location: { pt: 'Província de Thanh Hoa', en: 'Thanh Hoa Province' },
    // Capacity and execution period supplied by Mr. Lam's written review (July 2026).
    capacity: { pt: 'Capacidade de 2×600 MW', en: '2×600 MW capacity' },
    executionPeriod: '2017–2021',
    attribution: CC1_ATTRIBUTION,
    sourceLabel: CC1_SOURCE,
    images: [
      '/project-reference-images/04_nghi-son-2-thermal-power-plant/nghi-son-2-03.jpg',
      '/project-reference-images/04_nghi-son-2-thermal-power-plant/nghi-son-2-04.jpg',
      '/project-reference-images/04_nghi-son-2-thermal-power-plant/nghi-son-2-02.jpg',
    ],
  },
  {
    slug: 'vinh-tan-4',
    entity: 'CC1',
    name: { pt: 'Central Termoeléctrica Vinh Tan 4', en: 'Vinh Tan 4 Thermal Power Plant' },
    sector: { pt: 'Central termoeléctrica', en: 'Thermal power' },
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
    images: [
      '/project-reference-images/05_vinh-tan-4-thermal-power-plant/vinh-tan-4-01.jpg',
      '/project-reference-images/05_vinh-tan-4-thermal-power-plant/vinh-tan-4-02.jpg',
      '/project-reference-images/05_vinh-tan-4-thermal-power-plant/vinh-tan-4-03.jpg',
    ],
  },
  {
    slug: 'phu-my-ccpp',
    entity: 'CC1',
    name: {
      pt: 'Complexo Termoeléctrico de Ciclo Combinado de Phu My',
      en: 'Phu My Combined-Cycle Power Plant Complex',
    },
    sector: {
      pt: 'Central termoeléctrica de ciclo combinado',
      en: 'Combined-cycle thermal power',
    },
    location: {
      pt: 'Província de Ba Ria Vung Tau',
      en: 'Ba Ria Vung Tau Province',
    },
    // Capacity intentionally omitted: the HLC Company Profile conflicts with
    // itself (450 MW on the project page vs 1,833 MW in the summary stat box).
    // Add a figure only once CC1/HLC confirms the correct value. See SOURCE.md.
    attribution: CC1_ATTRIBUTION,
    sourceLabel: CC1_SOURCE,
    images: [
      '/project-reference-images/06_phu-my-ccpp/phu-my-01.jpg',
      '/project-reference-images/06_phu-my-ccpp/phu-my-02.jpg',
      '/project-reference-images/06_phu-my-ccpp/phu-my-03.jpg',
    ],
  },
]

// Fail the build/import if any project lacks valid CC1 attribution.
assertValidProjects(referenceProjects)
