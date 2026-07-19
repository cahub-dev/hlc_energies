'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroImages } from '@/content/media'

gsap.registerPlugin(useGSAP)

/**
 * Full-bleed background slideshow for the hero. Crossfades a small set of
 * authorized local energy/infrastructure stills with a slow Ken Burns drift —
 * a calmer, self-hosted replacement for the removed YouTube video (no external
 * branding, no leaking title, works on slow connections). SSR-safe: the first
 * slide renders visible and the rest start at opacity 0 via inline style, so
 * there is no flash before hydration. Honors prefers-reduced-motion by holding
 * the first slide static.
 *
 * Slides come from content/media.ts (heroImages): the shared "Áreas de actuação"
 * set plus the CC1 Han Kiem 2 (Central Eólica) photos added at the client's
 * request. See media.ts for the rights caveat on the CC1 photos.
 */
const SLIDES = heroImages

const HOLD = 5 // seconds each slide stays fully visible
const FADE = 1.6 // seconds for each crossfade

export default function HeroSlideshow() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      const slides = gsap.utils.toArray<HTMLElement>('[data-slide]', el)
      if (slides.length <= 1) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // Normalize the from-state (first visible, rest hidden).
      gsap.set(slides, { autoAlpha: 0 })
      gsap.set(slides[0], { autoAlpha: 1 })

      // Looping crossfade.
      const tl = gsap.timeline({ repeat: -1 })
      slides.forEach((slide, i) => {
        const next = slides[(i + 1) % slides.length]
        tl.to(slide, { autoAlpha: 0, duration: FADE }, `+=${HOLD}`).to(
          next,
          { autoAlpha: 1, duration: FADE },
          '<',
        )
      })

      // Subtle continuous zoom on each image for a video-like feel.
      slides.forEach((slide) => {
        const img = slide.querySelector('img')
        if (!img) return
        gsap.fromTo(
          img,
          { scale: 1.05 },
          {
            scale: 1.14,
            duration: (HOLD + FADE) * slides.length,
            ease: 'none',
            repeat: -1,
            yoyo: true,
          },
        )
      })
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className="absolute inset-0">
      {SLIDES.map((src, i) => (
        <div
          key={src}
          data-slide
          className="absolute inset-0 overflow-hidden"
          style={i === 0 ? undefined : { opacity: 0 }}
        >
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center will-change-transform"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30" />
    </div>
  )
}
