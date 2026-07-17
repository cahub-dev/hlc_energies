'use client'

import { useRef, type ElementType, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Reveals its content on scroll (fade + rise), once. SSR-safe: children render
 * normally, the animation only attaches on the client, and useGSAP's
 * layout-effect timing sets the from-state before paint (no flash). Honors
 * prefers-reduced-motion by leaving everything visible.
 */
export default function Reveal({
  children,
  as,
  y = 24,
  delay = 0,
  duration = 0.7,
  stagger = false,
  start = 'top 85%',
  className,
}: {
  children: ReactNode
  as?: ElementType
  y?: number
  delay?: number
  duration?: number
  stagger?: boolean
  start?: string
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
      gsap.from(targets, {
        autoAlpha: 0,
        y,
        duration,
        delay,
        ease: 'power3.out',
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: { trigger: el, start, once: true },
      })
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
