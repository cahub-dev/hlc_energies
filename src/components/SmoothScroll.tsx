'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ReactNode } from 'react'

gsap.registerPlugin(ScrollTrigger)

/** Keeps ScrollTrigger in sync with Lenis' smooth scroll position. */
function ScrollTriggerBridge() {
  useLenis(() => ScrollTrigger.update())
  return null
}

/**
 * Global smooth scrolling (Lenis) on the window. `anchors` gives in-page hash
 * links (#sobre, #areas, …) a smooth scroll with an offset that clears the
 * fixed header. Lenis inits on the client only, so SSR/prerender is unaffected.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        anchors: { offset: -96 },
      }}
    >
      <ScrollTriggerBridge />
      {children}
    </ReactLenis>
  )
}
