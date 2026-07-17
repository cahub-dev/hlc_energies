'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import type { Locale, ReferenceProject } from '@/content/types'

gsap.registerPlugin(useGSAP)

export default function ProjectCard({
  project,
  locale,
  onOpen,
}: {
  project: ReferenceProject
  locale: Locale
  onOpen: () => void
}) {
  const facts: { label: string; value: string }[] = []
  if (project.executionPeriod) {
    facts.push({
      label: locale === 'pt' ? 'Execução' : 'Execution',
      value: project.executionPeriod,
    })
  }
  if (project.capacity) {
    facts.push({
      label: locale === 'pt' ? 'Escala' : 'Scale',
      value: project.capacity[locale],
    })
  }
  if (project.location) {
    facts.push({
      label: locale === 'pt' ? 'Localização' : 'Location',
      value: project.location[locale],
    })
  }

  const cover = project.images[0]

  const rootRef = useRef<HTMLButtonElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  // Ken Burns: slowly pan/zoom the single cover so the parts cropped by
  // object-cover drift into view — a subtle, video-like movement. GSAP owns
  // the transform, so no CSS hover-scale here (it would fight the tween).
  useGSAP(
    () => {
      const img = imgRef.current
      if (!img) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.fromTo(
        img,
        { scale: 1.14, xPercent: -4, yPercent: -2 },
        {
          scale: 1.14,
          xPercent: 4,
          yPercent: 2,
          duration: 12,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        },
      )
    },
    { scope: rootRef },
  )

  const galleryLabel = locale === 'pt' ? 'Ver galeria' : 'View gallery'

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${project.name[locale]} — ${galleryLabel}`}
      className="group relative flex flex-col h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden bg-gray-900 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-hlc-gold-500 focus-visible:ring-offset-2"
    >
      {/* Cover image with a slow Ken Burns pan */}
      {cover && (
        <img
          ref={imgRef}
          src={cover}
          alt={project.name[locale]}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />
      )}

      {/* Base Gradient (Always visible to ensure title readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

      {/* Hover Overlay (Dark brand color fading in on hover) */}
      <div className="absolute inset-0 bg-hlc-blue-900/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Gallery affordance (image count) */}
      <span className="absolute top-6 right-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-sm px-2.5 py-1 text-[0.7rem] font-medium text-white shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M3 14l4-4 3 3 5-5 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {project.images.length}
      </span>

      {/* Content Container */}
      <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end z-20">
        {/* Title */}
        <h3 className="text-xl lg:text-[1.35rem] font-medium text-white leading-snug tracking-tight mb-0">
          {project.name[locale]}
        </h3>

        {/* Expandable Details */}
        <div className="grid overflow-hidden transition-all duration-500 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100">
          <div className="min-h-0 flex flex-col">
            <div className="mt-4 pt-4 border-t border-white/20">
              {facts.length > 0 && (
                <dl className="flex flex-col gap-2.5">
                  {facts.map((f) => (
                    <div key={f.label} className="grid grid-cols-[auto_1fr] gap-3 items-start">
                      <dt className="text-[0.9rem] font-medium text-white/70 leading-relaxed whitespace-nowrap">
                        {f.label}:
                      </dt>
                      <dd className="text-[0.9rem] text-white/90 font-light leading-relaxed m-0">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
              <span className="mt-4 inline-flex items-center gap-2 text-[0.8rem] font-medium text-hlc-gold-300">
                {galleryLabel} <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}
