'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLenis } from 'lenis/react'
import type { Locale, ReferenceProject } from '@/content/types'

gsap.registerPlugin(useGSAP)

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function ProjectLightbox({
  project,
  locale,
  onClose,
}: {
  project: ReferenceProject
  locale: Locale
  onClose: () => void
}) {
  const total = project.images.length
  const [index, setIndex] = useState(0)

  const rootRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const lenis = useLenis()

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + total) % total),
    [total],
  )

  // Pause Lenis smooth scrolling while the dialog is open.
  useEffect(() => {
    lenis?.stop()
    return () => lenis?.start()
  }, [lenis])

  // Open animation (runs once).
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from(backdropRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' })
      gsap.from(panelRef.current, {
        opacity: 0,
        scale: 0.94,
        y: 12,
        duration: 0.4,
        ease: 'power3.out',
      })
    },
    { scope: rootRef },
  )

  // Crossfade the image whenever the slide changes (keyed <img> remounts).
  useGSAP(
    () => {
      if (!imgRef.current || prefersReducedMotion()) return
      gsap.fromTo(
        imgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: 'power2.out' },
      )
    },
    { dependencies: [index], scope: rootRef },
  )

  // Keyboard: arrows navigate, Escape closes.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, onClose])

  // Lock body scroll; focus the close button; restore focus on unmount.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      previouslyFocused?.focus?.()
    }
  }, [])

  // Minimal focus trap within the dialog.
  const onTrapKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !rootRef.current) return
    const focusable = rootRef.current.querySelectorAll<HTMLElement>(
      'button, a[href], [tabindex]:not([tabindex="-1"])',
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  const t = {
    close: locale === 'pt' ? 'Fechar' : 'Close',
    prev: locale === 'pt' ? 'Anterior' : 'Previous',
    next: locale === 'pt' ? 'Seguinte' : 'Next',
  }

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label={project.name[locale]}
      onKeyDown={onTrapKeyDown}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative z-10 flex max-h-full w-full max-w-5xl flex-col"
      >
        {/* Top bar */}
        <div className="mb-3 flex items-center justify-between gap-4 text-white">
          <span className="rounded-full bg-white/10 px-3 py-1 text-[0.8rem] font-medium tabular-nums">
            {index + 1} / {total}
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-hlc-gold-500"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Image stage */}
        <div className="relative flex items-center justify-center">
          <img
            key={index}
            ref={imgRef}
            src={project.images[index]}
            alt={`${project.name[locale]} (${index + 1}/${total})`}
            className="max-h-[65vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t.prev}
                className="absolute left-2 sm:left-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-hlc-gold-500"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t.next}
                className="absolute right-2 sm:right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-hlc-gold-500"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Caption + mandatory CC1 attribution */}
        <div className="mt-4 max-w-3xl text-white">
          <h2 className="text-lg font-medium !text-white">{project.name[locale]}</h2>
          <p className="mt-1 text-[0.8rem] font-medium uppercase tracking-wide text-hlc-gold-300">
            {project.sector[locale]}
          </p>
          <p className="mt-1 text-[0.85rem] leading-relaxed text-white/75">
            {project.attribution[locale]}
          </p>
          <p className="mt-1 text-[0.75rem] text-white/55">
            {project.sourceUrl ? (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                {project.sourceLabel[locale]}
              </a>
            ) : (
              project.sourceLabel[locale]
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
