/**
 * Shared imagery for the "Áreas de actuação" section and the hero slideshow,
 * kept in one place so the two stay in sync.
 *
 * The first two are authorized local site assets. The remaining four are
 * INTERIM Unsplash stock (flagged in review §A3) standing in for Subestações,
 * Projectos solares IPP, Electrificação rural and Obras civis until real
 * HLC/CC1 photos from the Maputo shoot are cleared. Replace any entry with a
 * local `/path.jpg` once a real photo exists — both Áreas and the hero pick it
 * up automatically.
 */
export const areaImages: string[] = [
  '/centrais-electriccas-epc.jpg',
  '/linhas-de-transport-e-distribuicao.jpg',
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1610028290816-5d937a395a49?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600',
]

/**
 * Hero slideshow images: the Áreas set plus the CC1 Han Kiem 2 (Central Eólica)
 * photos, added at the client's explicit request.
 *
 * ⚠ Rights: the Han Kiem 2 photos are CC1 reference assets whose SOURCE.md marks
 * them "not cleared for public use" — confirm publication rights with CC1/HLC
 * before go-live. They are also low-res (~1000×734) and may look soft full-bleed
 * on large screens.
 */
export const heroImages: string[] = [
  ...areaImages,
  '/project-reference-images/02_han-kiem-2-wind-power-plant/han-kiem-2-01.jpg',
  '/project-reference-images/02_han-kiem-2-wind-power-plant/han-kiem-2-02.jpg',
]
