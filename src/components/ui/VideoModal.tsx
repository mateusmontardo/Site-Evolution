import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

interface VideoModalProps {
  youtubeId: string | null
  title: string
  onClose: () => void
}

/**
 * Modal acessível para tocar um vídeo do YouTube sob demanda.
 * O iframe só existe no DOM enquanto o modal está aberto — nada é carregado
 * do YouTube até o usuário clicar para assistir.
 */
export function VideoModal({ youtubeId, title, onClose }: VideoModalProps) {
  const shouldReduceMotion = useReducedMotion()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<Element | null>(null)
  const isOpen = youtubeId !== null

  useLockBodyScroll(isOpen)

  // Guarda o elemento que abriu o modal para devolver o foco a ele ao fechar
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
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="relative aspect-[9/16] h-[85svh] max-h-[85svh] w-auto"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar vídeo"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center border border-gold/40 text-cream transition-colors duration-300 hover:border-gold hover:text-gold-bright sm:-right-12 sm:top-0"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            {youtubeId && (
              <iframe
                className="h-full w-full border border-gold/20"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
