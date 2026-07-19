'use client'

import { useRef, type ElementType, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

/**
 * Reveals its content on scroll (fade + rise), once. The reveal is driven by an
 * IntersectionObserver rather than ScrollTrigger: IO reacts to the element's
 * real position at intersection time, so it can never leave content stranded at
 * opacity 0 when images/fonts shift the layout after mount (the failure mode of
 * position-cached scroll triggers under Lenis). SSR-safe: children render
 * normally; useGSAP's layout-effect timing sets the hidden from-state before
 * paint (no flash). Honors prefers-reduced-motion by leaving everything visible.
 */
export default function Reveal({
  children,
  as,
  y = 24,
  delay = 0,
  duration = 0.7,
  stagger = false,
  className,
}: {
  children: ReactNode
  as?: ElementType
  y?: number
  delay?: number
  duration?: number
  stagger?: boolean
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const Tag = (as ?? 'div') as ElementType

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const targets = stagger ? (Array.from(el.children) as HTMLElement[]) : el
      gsap.set(targets, { autoAlpha: 0, y })

      const reveal = () =>
        gsap.to(targets, {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          stagger: stagger ? 0.08 : 0,
        })

      // Fallback for browsers without IntersectionObserver: reveal immediately.
      if (typeof IntersectionObserver === 'undefined') {
        reveal()
        return
      }

      const io = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal()
              obs.disconnect()
              break
            }
          }
        },
        { rootMargin: '0px 0px -12% 0px' },
      )
      io.observe(el)

      return () => io.disconnect()
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
