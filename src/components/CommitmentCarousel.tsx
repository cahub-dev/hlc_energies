"use client"

import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { useGSAP } from '@gsap/react'
import type { Locale } from '@/content/types'

gsap.registerPlugin(useGSAP, Draggable, InertiaPlugin)

type Pillar = { title: string; body: string }

// Institutional HLC palette, cycled across the cards.
const cardStyles = [
  'bg-hlc-blue-800 text-white',
  'bg-hlc-gold-500 text-hlc-blue-900',
  'bg-hlc-blue-50 text-hlc-blue-900',
  'bg-hlc-blue-700 text-white',
  'bg-hlc-blue-50 text-hlc-blue-900',
  'bg-hlc-gold-600 text-white',
]

export default function CommitmentCarousel({
  pillars,
  notes,
  locale,
}: {
  pillars: Pillar[]
  notes: string[]
  locale: Locale
}) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<Draggable | null>(null)
  const boundsRef = useRef({ minX: 0, maxX: 0 })
  const snapPointsRef = useRef<number[]>([])
  const [progress, setProgress] = useState(0)

  const images = [
    "/local-employment.png",
    "/local-suppliers.jpg",
    "/conformidade-legal.jpg",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  ]

  const allItems = []
  pillars.forEach((pillar, i) => {
    allItems.push({ type: 'text', data: pillar, colorIdx: i })
    if (images[i]) {
      allItems.push({ type: 'image', src: images[i] })
    }
  })

  // Drag the track with a transform (type:"x") — no scroll-proxy, so the flex
  // row stays intact. Momentum + snap-to-card via InertiaPlugin. useGSAP cleans
  // up on unmount. Touch works too; arrows + progress bar drive the same track.
  useGSAP(
    () => {
      const track = trackRef.current
      const viewport = viewportRef.current
      if (!track || !viewport) return

      const measure = () => {
        const minX = Math.min(0, viewport.clientWidth - track.scrollWidth)
        boundsRef.current = { minX, maxX: 0 }
        
        const cardElements = Array.from(track.querySelectorAll<HTMLElement>('[data-card]'))
        if (cardElements.length > 0) {
          const firstOffset = cardElements[0].offsetLeft
          snapPointsRef.current = cardElements.map(c => -(c.offsetLeft - firstOffset))
        }
        
        return boundsRef.current
      }

      const syncProgress = () => {
        const { minX } = boundsRef.current
        const x = Number(gsap.getProperty(track, 'x'))
        setProgress(minX < 0 ? (x / minX) * 100 : 0)
      }

      const bounds = measure()
      const [drag] = Draggable.create(track, {
        type: 'x',
        bounds,
        inertia: true,
        edgeResistance: 0.85,
        cursor: 'grab',
        activeCursor: 'grabbing',
        dragClickables: true,
        snap: {
          x: (value: number) => {
            if (snapPointsRef.current.length === 0) return value;
            const points = snapPointsRef.current;
            const clampedPoints = points.map(p => gsap.utils.clamp(boundsRef.current.minX, 0, p));
            return clampedPoints.reduce((prev, curr) => 
              Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
            );
          }
        },
        onDrag: syncProgress,
        onThrowUpdate: syncProgress,
      })
      dragRef.current = drag

      const onResize = () => {
        const b = measure()
        drag.applyBounds(b)
        gsap.set(track, { x: gsap.utils.clamp(b.minX, 0, drag.x) })
        syncProgress()
      }
      window.addEventListener('resize', onResize)
      // Small delay to ensure images load and layout is stable before measuring
      setTimeout(() => {
        onResize()
      }, 100)

      return () => {
        window.removeEventListener('resize', onResize)
        drag.kill()
        dragRef.current = null
      }
    },
    { scope: viewportRef, dependencies: [locale, allItems.length] },
  )

  const move = (dir: 1 | -1) => {
    const drag = dragRef.current
    const track = trackRef.current
    if (!drag || !track) return
    const { minX } = boundsRef.current
    
    const points = snapPointsRef.current
    if (points.length === 0) return
    
    let currentIndex = 0
    let minDiff = Infinity
    points.forEach((p, i) => {
      const diff = Math.abs(p - drag.x)
      if (diff < minDiff) {
        minDiff = diff
        currentIndex = i
      }
    })
    
    let targetIndex = currentIndex + dir
    if (targetIndex < 0) targetIndex = 0
    if (targetIndex >= points.length) targetIndex = points.length - 1
    
    const target = gsap.utils.clamp(minX, 0, points[targetIndex])

    gsap.to(track, {
      x: target,
      duration: 0.5,
      ease: 'power3.out',
      onUpdate: () => {
        drag.update()
        setProgress(minX < 0 ? (Number(gsap.getProperty(track, 'x')) / minX) * 100 : 0)
      },
    })
  }

  return (
    <div className="mt-16">
      {/* Viewport clips; the track is dragged inside it */}
      <div ref={viewportRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max flex-nowrap items-stretch gap-6 cursor-grab select-none pl-[max(1rem,calc((100vw-1080px)/2))] pr-8"
        >
          {allItems.map((item, i) => (
            <article
              key={i}
              data-card
              className={`relative flex-none min-h-[400px] rounded-2xl overflow-hidden flex flex-col ${
                item.type === 'text' 
                  ? `w-[300px] sm:w-[360px] lg:w-[400px] ${cardStyles[item.colorIdx % cardStyles.length]}`
                  : `w-[400px] sm:w-[500px] lg:w-[650px] bg-gray-100`
              }`}
            >
              {item.type === 'text' ? (
                <div className="p-8 lg:p-10 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="mb-4 text-2xl font-medium leading-tight lg:text-3xl text-inherit">
                      <span className="opacity-50 mr-3">{item.colorIdx + 1}.</span>
                      {item.data.title}
                    </h3>
                    <p className="text-base font-light leading-relaxed opacity-90 lg:text-lg">
                      {item.data.body}
                    </p>
                  </div>
                </div>
              ) : (
                <img src={item.src} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Controls: progress bar + prev/next */}
      <div className="page-wrap mt-8 flex items-center justify-between gap-6">
        <div className="relative h-[3px] max-w-xl flex-1 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-hlc-blue-800 transition-[width] duration-150"
            style={{ width: `${Math.max(15, progress)}%` }}
          />
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => move(-1)}
            aria-label={locale === 'pt' ? 'Anterior' : 'Previous'}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:bg-gray-50"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => move(1)}
            aria-label={locale === 'pt' ? 'Seguinte' : 'Next'}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:bg-gray-50"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
