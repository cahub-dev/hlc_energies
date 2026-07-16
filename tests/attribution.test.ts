import { test, expect } from 'vitest'
import { assertValidProjects } from '@/content/validate'
import { referenceProjects } from '@/content/projects'
import type { ReferenceProject } from '@/content/types'

const base: ReferenceProject = {
  slug: 'sample',
  entity: 'CC1',
  name: { pt: 'Projecto', en: 'Project' },
  attribution: {
    pt: 'Executado pela CC1 — parceiro técnico do Consórcio HLC–CC1.',
    en: 'Executed by CC1 — technical partner of the HLC–CC1 Consortium.',
  },
  sourceLabel: { pt: 'Fonte', en: 'Source' },
}

test('approved reference projects all validate', () => {
  expect(() => assertValidProjects(referenceProjects)).not.toThrow()
})

test('rejects a non-CC1 executing entity', () => {
  const bad = { ...base, entity: 'HLC' } as unknown as ReferenceProject
  expect(() => assertValidProjects([bad])).toThrow(/entity must be "CC1"/)
})

test('rejects a project missing attribution', () => {
  const bad: ReferenceProject = {
    ...base,
    attribution: { pt: '', en: '' },
  }
  expect(() => assertValidProjects([bad])).toThrow(/missing attribution/)
})

test('rejects attribution that omits CC1', () => {
  const bad: ReferenceProject = {
    ...base,
    attribution: { pt: 'Executado pelo Consórcio.', en: 'Executed by the Consortium.' },
  }
  expect(() => assertValidProjects([bad])).toThrow(/must name CC1/)
})
