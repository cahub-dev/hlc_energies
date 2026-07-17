'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectLightbox from './ProjectLightbox'
import Reveal from './Reveal'
import type { Locale, ReferenceProject } from '@/content/types'

export default function ProjectsShowcase({
  projects,
  locale,
}: {
  projects: ReferenceProject[]
  locale: Locale
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const active = activeIndex === null ? null : projects[activeIndex]

  return (
    <>
      <Reveal stagger className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            onOpen={() => setActiveIndex(i)}
          />
        ))}
      </Reveal>

      {active && (
        <ProjectLightbox
          key={active.slug}
          project={active}
          locale={locale}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  )
}
