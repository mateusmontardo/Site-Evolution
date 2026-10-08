import { ClipboardList, Hammer, Layers, PackageCheck, type LucideIcon } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { founderExperienceYears, whatsappLink } from '../../data/site'
import { trackWhatsAppClick } from '../../lib/analytics'

const steps: { icon: LucideIcon; step: string; title: string; description: string }[] = [
  {
    icon: ClipboardList,
    step: 'Etapa 1',
    title: 'Projeto sob medida',
    description: 'A planta nasce do terreno e da rotina de quem vai morar.',
  },
  {
    icon: Layers,
    step: 'Etapa 2',
    title: 'Corte e preparo',
    description: 'Cada peça é selecionada e cortada com precisão antes da montagem.',
  },
  {
    icon: Hammer,
    step: 'Etapa 3',
    title: 'Montagem própria',
    description: 'Do alicerce ao acabamento, sem terceirização.',
  },
  {
    icon: PackageCheck,
    step: 'Etapa 4',
    title: 'Entrega com garantia',
    description: 'Cronograma em contrato e garantia formal.',
  },
]

/**
 * Seção pensada para quem chega ao site pesquisando "casas pré-fabricadas" — a
 * palavra-chave que mais traz tráfego pago. Fica logo após o Sobre, ainda na
 * primeira metade da página, para quem veio do Google Ads reconhecer o termo
 * de busca rápido e encontrar autoridade em vez de dúvida.
 */
export function Prefabricadas() {
  return (
    <section id="pre-fabricadas" className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Casas Pré-Fabricadas de Madeira"
          title="Sua casa pré-fabricada, com projeto sob medida."
          description={
            <>
              Em Santa Catarina, no Rio Grande do Sul ou no Uruguai, sua casa começa com um
              projeto pensado para o terreno e para a sua rotina. A Evolution prepara cada
              peça antes da montagem e executa a obra com equipe própria, do alicerce ao
              acabamento.
            </>
          }
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <img
              src="/images/prefabricadas-processo.jpg"
              alt="Madeira selecionada ao lado de projeto técnico — o método por trás de cada casa pré-fabricada Evolution"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full border border-cream/10 object-cover"
            />
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <div>
                  <span className="block font-display text-3xl font-light text-gold-bright">
                    {founderExperienceYears} anos
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-cream/55">
                    de experiência em madeira
                  </span>
                </div>
                <div>
                  <span className="block font-display text-3xl font-light text-gold-bright">
                    100%
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-cream/55">
                    equipe própria, sem terceirização
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9">
                <Button
                  href={whatsappLink(
                    'Olá! Vim pelo site da Evolution e quero entender melhor como funciona a casa pré-fabricada de madeira.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('prefabricadas')}
                >
                  Planejar minha casa pré-fabricada
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Processo: mostra o rigor por trás do termo "pré-fabricada", em formato rápido de ler */}
        <ul className="mt-16 grid gap-px overflow-hidden border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal as="li" key={item.step} delay={index * 0.08} className="bg-charcoal">
                <div className="group h-full p-7 transition-colors duration-500 ease-soft hover:bg-charcoal-soft lg:p-8">
                  <Icon
                    size={24}
                    strokeWidth={1.25}
                    className="text-gold transition-colors duration-500 group-hover:text-gold-bright"
                  />
                  <p className="mt-5 text-[0.68rem] uppercase tracking-[0.16em] text-gold/80">
                    {item.step}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-normal text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
