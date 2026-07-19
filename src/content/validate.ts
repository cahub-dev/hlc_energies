import { LOCALES, type ReferenceProject } from './types'

/**
 * Enforces the non-negotiable attribution controls from the copy pack:
 *  - every reference project's executing/investing entity is CC1;
 *  - `HLC` is never accepted as an executing entity in version 1;
 *  - attribution and source label exist and are non-empty in every locale.
 *
 * Throws at build/import time and in tests so a project can never render
 * without valid CC1 attribution.
 */
export function assertValidProjects(projects: ReferenceProject[]): void {
  const errors: string[] = []

  for (const p of projects) {
    if (p.entity !== 'CC1') {
      errors.push(`Project "${p.slug}": entity must be "CC1", got "${p.entity}".`)
    }
    if (!Array.isArray(p.images) || p.images.length === 0) {
      errors.push(`Project "${p.slug}": at least one image is required.`)
    }
    for (const locale of LOCALES) {
      const attribution = p.attribution?.[locale]?.trim()
      const sourceLabel = p.sourceLabel?.[locale]?.trim()
      const sector = p.sector?.[locale]?.trim()
      if (!sector) {
        errors.push(`Project "${p.slug}" [${locale}]: missing sector.`)
      }
      if (!attribution) {
        errors.push(`Project "${p.slug}" [${locale}]: missing attribution.`)
      } else if (!/CC1/.test(attribution)) {
        errors.push(
          `Project "${p.slug}" [${locale}]: attribution must name CC1.`,
        )
      }
      if (!sourceLabel) {
        errors.push(`Project "${p.slug}" [${locale}]: missing source label.`)
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(
      `CC1 attribution validation failed:\n  - ${errors.join('\n  - ')}`,
    )
  }
}
