'use client'

import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

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
      {children}
    </ReactLenis>
  )
}
