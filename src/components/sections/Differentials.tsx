import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { differentials } from '../../data/differentials'

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-charcoal py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Por que a Evolution"
          title="O que sustenta uma obra em madeira."
          description="Não é o preço que define o resultado de uma casa de madeira — é a origem do material, o rigor do projeto e quem coloca a mão na estrutura."
        />

        <ul className="mt-16 grid gap-px overflow-hidden border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {differentials.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal as="li" key={item.title} delay={(index % 3) * 0.08} className="bg-charcoal">
                <div className="group h-full p-8 transition-colors duration-500 ease-soft hover:bg-charcoal-soft lg:p-10">
                  <Icon
                    size={26}
                    strokeWidth={1.25}
                    className="text-gold transition-colors duration-500 group-hover:text-gold-bright"
                  />
                  <h3 className="mt-6 font-display text-xl font-normal leading-snug text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-3.5 text-sm leading-relaxed text-cream/60">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
