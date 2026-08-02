import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

export interface LightboxImage {
  image: string
  alt: string
  caption: string
}

interface ImageLightboxProps {
  images: LightboxImage[]
  /** Índice da foto aberta, ou null com o lightbox fechado */
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

/** Visualizador em tela cheia para as fotos da galeria de projetos. */
export function ImageLightbox({ images, index, onClose, onNavigate }: ImageLightboxProps) {
  const shouldReduceMotion = useReducedMotion()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<Element | null>(null)
  const isOpen = index !== null

  useLockBodyScroll(isOpen)

  const paginate = useCallback(
    (step: number) => {
      if (index === null) return
      onNavigate((index + step + images.length) % images.length)
    },
    [index, images.length, onNavigate],
  )

  // Guarda o elemento que abriu o lightbox para devolver o foco ao fechar
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement
      closeButtonRef.current?.focus()
    } else {
      const trigger = triggerRef.current
      if (trigger instanceof HTMLElement) trigger.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      else if (event.key === 'ArrowRight') paginate(1)
      else if (event.key === 'ArrowLeft') paginate(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose, paginate])

  const current = index !== null ? images[index] : null

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.caption} — foto ${index + 1} de ${images.length}`}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-ink/94 p-5 backdrop-blur-sm sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.28 }}
          onClick={onClose}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar galeria"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-gold/40 text-cream transition-colors duration-300 hover:border-gold hover:text-gold-bright sm:right-8 sm:top-8"
          >
            <X size={19} strokeWidth={1.5} />
          </button>

          <LightboxArrow side="left" onClick={() => paginate(-1)} />
          <LightboxArrow side="right" onClick={() => paginate(1)} />

          <motion.figure
            key={current.image}
            className="flex max-h-full max-w-5xl flex-col items-center"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={current.image}
              alt={current.alt}
              className="max-h-[76svh] w-auto max-w-full border border-gold/20 object-contain"
            />
            <figcaption className="mt-5 text-center">
              <p className="font-display text-lg font-normal text-cream">{current.caption}</p>
              <p className="mt-1.5 text-xs uppercase tracking-[0.16em] text-gold">
                {index + 1} / {images.length}
              </p>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function LightboxArrow({ side, onClick }: { side: 'left' | 'right'; onClick: () => void }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation()
        onClick()
      }}
      aria-label={side === 'left' ? 'Foto anterior' : 'Próxima foto'}
      className={`absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-gold/40 bg-charcoal/60 text-gold backdrop-blur-sm transition-colors duration-300 hover:border-gold hover:text-gold-bright ${
        side === 'left' ? 'left-3 sm:left-8' : 'right-3 sm:right-8'
      }`}
    >
      <Icon size={20} strokeWidth={1.5} />
    </button>
  )
}
