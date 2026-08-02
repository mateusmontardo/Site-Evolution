import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { whatsappLink } from '../../data/site'

/**
 * Botão flutuante de WhatsApp — aparece após o usuário sair do hero,
 * para não competir com os CTAs da primeira dobra.
 */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink(
            'Olá! Vim pelo site da Evolution e gostaria de saber mais sobre as casas de madeira.',
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Evolution no WhatsApp"
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-charcoal-soft text-gold shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
        >
          {/* Ícone do WhatsApp em traço fino, coerente com os demais ícones do site */}
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 sm:h-7 sm:w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 21l1.65-4.8a8.7 8.7 0 1 1 3.4 3.28L3 21z" />
            <path d="M8.6 8.2c.2-.5.4-.5.7-.5h.6c.2 0 .5 0 .7.5l.7 1.7c.1.3 0 .5-.1.7l-.5.6c-.1.2-.2.4 0 .7a7 7 0 0 0 2.9 2.5c.3.1.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.6a1.9 1.9 0 0 1-1.3 1.6c-.6.2-1.5.2-3.3-.6a10.7 10.7 0 0 1-4.5-4.3c-.7-1.3-.6-2.3-.4-2.8z" />
          </svg>
          <span className="sr-only">Falar no WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
