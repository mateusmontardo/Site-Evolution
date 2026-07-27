import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { models, type ModelId } from '../../data/models'
import { CabinIcon, ChaletIcon, HouseIcon, RoofIcon } from '../ui/ModelIcons'

const iconByModel: Record<ModelId, typeof RoofIcon> = {
  'pre-fabricadas': RoofIcon,
  'sob-projeto': HouseIcon,
  chales: ChaletIcon,
  cabanas: CabinIcon,
}

interface ModelsProps {
  /** Leva o interesse selecionado para o formulário de contato */
  onSelectModel: (id: ModelId) => void
}

export function Models({ onSelectModel }: ModelsProps) {
  return (
    <section id="modelos" className="bg-charcoal-soft py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Especialidades"
          title="Quatro formas de construir em madeira."
          description="Da estrutura pré-fabricada com prazo fechado ao projeto autoral desenhado do zero. A escolha depende do terreno, do uso e do tempo que você tem."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:gap-7">
          {models.map((model, index) => {
            const Icon = iconByModel[model.id]

            return (
              <Reveal as="article" key={model.id} delay={index * 0.08}>
                <div className="group h-full border border-cream/10 bg-charcoal transition-colors duration-500 ease-soft hover:border-gold/45">
                  {/* TODO: substituir por foto real da linha correspondente */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={model.image}
                      alt={model.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-transparent" />
                    <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center border border-gold/40 bg-charcoal/70 text-gold backdrop-blur-sm transition-colors duration-500 group-hover:border-gold group-hover:text-gold-bright">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="p-7 lg:p-8">
                    <p className="eyebrow">{model.eyebrow}</p>
                    <h3 className="mt-4 font-display text-2xl font-normal text-cream lg:text-[1.65rem]">
                      {model.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-cream/65 lg:text-base">
                      {model.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {model.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="border border-gold/20 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.12em] text-cream/55"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => onSelectModel(model.id)}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cream transition-colors duration-300 hover:text-gold-bright"
                    >
                      Saiba mais
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                      <span className="sr-only">sobre {model.name}</span>
                    </button>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
