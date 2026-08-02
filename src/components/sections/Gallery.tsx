import { useMemo, useState } from 'react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { ImageLightbox } from '../ui/ImageLightbox'
import { galleryItems } from '../../data/gallery'
import { models, type ModelId } from '../../data/models'

type Filter = ModelId | 'todos'

const filters: { id: Filter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  ...models.map((model) => ({ id: model.id as Filter, label: model.name })),
]

/**
 * O grid usa altura de linha fixa (auto-rows) em vez de proporção por item:
 * assim cada tile preenche exatamente as células que ocupa e as linhas nunca
 * ficam com sobra. O `grid-flow-dense` fecha os buracos que os itens maiores
 * deixariam para trás.
 */
const spanClasses: Record<string, string> = {
  feature: 'col-span-2 row-span-2',
  wide: 'col-span-2 row-span-1',
  default: 'col-span-1 row-span-1',
}

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('todos')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const visibleItems = useMemo(
    () => (filter === 'todos' ? galleryItems : galleryItems.filter((i) => i.styleId === filter)),
    [filter],
  )

  const lightboxImages = useMemo(
    () => visibleItems.map((item) => ({ image: item.image, alt: item.alt, caption: item.style })),
    [visibleItems],
  )

  return (
    <section id="projetos" className="bg-charcoal-soft py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Projetos"
          title="Obras entregues, não simulações."
          description="Uma seleção de residências e estruturas comerciais executadas pela Evolution. Toque em qualquer foto para ampliar."
        />

        {/* Filtro por estilo */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {filters.map((item) => {
              const isActive = filter === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setFilter(item.id)
                    setLightboxIndex(null)
                  }}
                  aria-pressed={isActive}
                  className={`border px-5 py-2.5 text-xs uppercase tracking-[0.14em] transition-colors duration-300 ease-soft ${
                    isActive
                      ? 'border-gold bg-gold/10 text-gold-bright'
                      : 'border-cream/15 text-cream/60 hover:border-gold/45 hover:text-cream'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid auto-rows-[9rem] grid-flow-row-dense grid-cols-2 gap-4 sm:auto-rows-[11rem] lg:auto-rows-[13rem] lg:grid-cols-4 lg:gap-5">
          {visibleItems.map((item, index) => (
            <Reveal
              key={item.image}
              delay={(index % 3) * 0.07}
              className={spanClasses[item.span]}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Ampliar foto: ${item.style}`}
                className="group relative block h-full w-full overflow-hidden border border-cream/10 transition-colors duration-500 ease-soft hover:border-gold/45"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                />
                {/* Base escura no rodapé do tile: garante leitura do rótulo dourado
                    mesmo sobre fotos claras (céu, gramado ao sol) */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />
                <span className="absolute inset-x-0 bottom-0 translate-y-1 p-5 text-left transition-transform duration-500 ease-soft group-hover:translate-y-0">
                  <span className="block text-xs uppercase tracking-[0.16em] text-gold">
                    {item.style}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <ImageLightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      </div>
    </section>
  )
}
