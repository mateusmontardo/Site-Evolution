import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { galleryItems } from '../../data/gallery'

/**
 * Ritmo do grid: itens 'wide' ocupam duas colunas, os demais uma.
 * As proporções variam para quebrar a monotonia; as linhas continuam alinhadas
 * porque os itens esticam na altura da linha (align-items: stretch).
 */
const spanClasses: Record<string, string> = {
  wide: 'sm:col-span-2 aspect-[16/10]',
  tall: 'aspect-[3/4]',
  default: 'aspect-[4/3]',
}

export function Gallery() {
  return (
    <section id="projetos" className="bg-charcoal-soft py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Projetos"
          title="Obras entregues, não simulações."
          description="Uma seleção de residências, chalés e cabanas executados pela Evolution no Rio Grande do Sul e no Uruguai."
        />

        {/* TODO: substituir todas as imagens por fotografia profissional das obras */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5">
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 3) * 0.07}
              className={spanClasses[item.span]}
            >
              <figure className="group relative h-full w-full overflow-hidden border border-cream/10">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                />
                {/* Overlay discreto: só ganha peso no hover/foco */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 p-6 transition-transform duration-500 ease-soft group-hover:translate-y-0">
                  <p className="font-display text-lg font-normal text-cream lg:text-xl">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-gold">
                    {item.location}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
