import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { PhotoCarousel } from '../ui/PhotoCarousel'
import { models, type ModelId } from '../../data/models'
import { ColonialIcon, CommercialIcon, ContemporaryIcon } from '../ui/ModelIcons'

const iconByModel: Record<ModelId, typeof ColonialIcon> = {
  colonial: ColonialIcon,
  contemporanea: ContemporaryIcon,
  comercial: CommercialIcon,
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
          title="Três estilos, o mesmo rigor de execução."
          description="Do traço clássico do colonial à arquitetura autoral do contemporâneo, até estruturas comerciais em madeira. Deslize pelas fotos de obras já entregues."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-7">
          {models.map((model, index) => {
            const Icon = iconByModel[model.id]

            return (
              <Reveal as="article" key={model.id} delay={index * 0.08}>
                <div className="group flex h-full flex-col border border-cream/10 bg-charcoal transition-colors duration-500 ease-soft hover:border-gold/45">
                  <div className="relative">
                    <PhotoCarousel
                      images={model.images}
                      alt={model.imageAlt}
                      aspectClassName="aspect-[4/3]"
                    />
                    {/* Selo do estilo: fica acima do carrossel, fora da área de arraste */}
                    <div className="pointer-events-none absolute left-6 top-6 z-10 flex h-12 w-12 items-center justify-center border border-gold/40 bg-charcoal/70 text-gold backdrop-blur-sm transition-colors duration-500 group-hover:border-gold group-hover:text-gold-bright">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7 lg:p-8">
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
                      className="mt-8 inline-flex items-center gap-2 self-start text-sm font-medium text-cream transition-colors duration-300 hover:text-gold-bright"
                    >
                      Solicitar orçamento
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                      <span className="sr-only">para {model.name}</span>
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
