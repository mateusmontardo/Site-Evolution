import { useCallback, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PhotoCarouselProps {
  images: string[]
  alt: string
  className?: string
  /** Proporção do palco; combina com o restante do grid da seção */
  aspectClassName?: string
}

/**
 * Galeria deslizável de fotos, conduzida pelo usuário (sem autoplay — o público
 * do site valoriza sobriedade, e movimento contínuo brigaria com o resto da página).
 * Suporta clique nas setas, arraste/swipe no toque e navegação por teclado.
 *
 * Só a foto atual e a próxima ficam montadas: a próxima entra invisível apenas
 * para o navegador ir buscando o arquivo, deixando o avanço instantâneo sem
 * pagar o custo de baixar a galeria inteira de uma vez.
 */
export function PhotoCarousel({
  images,
  alt,
  className = '',
  aspectClassName = 'aspect-[4/3]',
}: PhotoCarouselProps) {
  const shouldReduceMotion = useReducedMotion()
  const [[index, direction], setState] = useState<[number, number]>([0, 0])
  const total = images.length

  const paginate = useCallback(
    (step: number) => {
      setState(([current]) => [(current + step + total) % total, step])
    },
    [total],
  )

  const goTo = useCallback((next: number) => {
    setState(([current]) => [next, next > current ? 1 : -1])
  }, [])

  if (total === 0) return null

  const nextIndex = (index + 1) % total
  const offset = shouldReduceMotion ? 0 : 28

  return (
    <div className={`group/carousel relative overflow-hidden ${aspectClassName} ${className}`}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${alt} — foto ${index + 1} de ${total}`}
          loading="lazy"
          decoding="async"
          draggable={false}
          custom={direction}
          className="absolute inset-0 h-full w-full select-none object-cover"
          initial={{ opacity: 0, x: direction * offset }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -offset }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          drag={total > 1 ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) paginate(1)
            else if (info.offset.x > 60) paginate(-1)
          }}
        />
      </AnimatePresence>

      {/* Busca silenciosa da próxima foto para o avanço não esperar download */}
      {total > 1 && (
        <img src={images[nextIndex]} alt="" aria-hidden="true" loading="lazy" className="hidden" />
      )}

      {total > 1 && (
        <>
          {/* Sombra nas laterais para as setas terem contraste sobre qualquer foto */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-ink/45 opacity-0 transition-opacity duration-500 group-hover/carousel:opacity-100" />

          <CarouselArrow side="left" onClick={() => paginate(-1)} />
          <CarouselArrow side="right" onClick={() => paginate(1)} />

          {/* Indicadores */}
          <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2">
            {images.map((image, dot) => (
              <button
                key={image}
                type="button"
                onClick={() => goTo(dot)}
                aria-label={`Ver foto ${dot + 1} de ${total}`}
                aria-current={dot === index}
                className={`h-1.5 rounded-full transition-all duration-300 ease-soft ${
                  dot === index
                    ? 'w-6 bg-gold-bright'
                    : 'w-1.5 bg-cream/45 hover:bg-cream/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function CarouselArrow({ side, onClick }: { side: 'left' | 'right'; onClick: () => void }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'left' ? 'Foto anterior' : 'Próxima foto'}
      className={`absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-gold/40 bg-charcoal/70 text-gold backdrop-blur-sm transition-all duration-300 ease-soft hover:border-gold hover:text-gold-bright focus-visible:opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 ${
        side === 'left' ? 'left-3' : 'right-3'
      }`}
    >
      <Icon size={18} strokeWidth={1.5} />
    </button>
  )
}
