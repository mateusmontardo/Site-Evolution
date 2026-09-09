import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { site, whatsappLink, yearsInBusiness } from '../../data/site'
import { trackWhatsAppClick } from '../../lib/analytics'

const steps = [
  {
    step: 'Etapa 1',
    title: 'Projeto sob medida',
    description:
      'A planta nasce do terreno, da orientação solar e da rotina de quem vai morar — nunca de um catálogo fechado, replicado casa após casa.',
  },
  {
    step: 'Etapa 2',
    title: 'Corte e tratamento da madeira',
    description:
      'Peças cortadas, tratadas em autoclave e secas em galpão próprio, com controle de qualidade peça a peça antes de qualquer uma chegar à obra.',
  },
  {
    step: 'Etapa 3',
    title: 'Montagem por equipe própria',
    description:
      'Sem terceirização: a mesma equipe que corta e trata a madeira monta a estrutura, do alicerce ao último detalhe de acabamento.',
  },
  {
    step: 'Etapa 4',
    title: 'Entrega com garantia formal',
    description:
      'Cronograma cumprido em contrato e garantia sobre estrutura e tratamento — casa pronta para morar, não para reformar em dois anos.',
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
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Autoridade: reposiciona "pré-fabricada" como precisão, não como atalho */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Casas Pré-Fabricadas de Madeira</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-light leading-[1.15] tracking-tight text-cream sm:text-4xl lg:text-[2.9rem]">
                Pré-fabricada não é sinônimo de simples — é sinônimo de precisão.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-cream/70 sm:text-lg">
              <Reveal delay={0.16}>
                <p>
                  No Brasil, &ldquo;casa pré-fabricada&rdquo; ainda carrega fama de solução
                  provisória. Na Evolution, pré-fabricada significa o oposto: cada peça de madeira
                  é cortada, tratada e numerada em galpão próprio, com precisão de milímetros,
                  antes de chegar ao terreno — o que reduz o prazo de obra sem abrir mão do
                  acabamento nem da resistência estrutural.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p>
                  Desde {site.foundedYear}, é a única forma como construímos: projeto sob medida,
                  engenharia própria e uma equipe que não terceiriza a montagem. O resultado são
                  casas pré-fabricadas de madeira feitas para atravessar gerações — não
                  construções de catálogo, produzidas em série para durar poucos anos.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-gold/25 pt-8">
                <div>
                  <span className="block font-display text-2xl font-light text-gold-bright">
                    {yearsInBusiness} anos
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-cream/55">
                    de método comprovado
                  </span>
                </div>
                <div>
                  <span className="block font-display text-2xl font-light text-gold-bright">
                    100%
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-cream/55">
                    equipe própria, sem terceirização
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-9">
                <Button
                  href={whatsappLink(
                    'Olá! Vim pelo site da Evolution e quero entender melhor como funciona a casa pré-fabricada de madeira.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('prefabricadas')}
                >
                  Tire suas dúvidas sobre pré-fabricadas
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Processo: mostra o rigor por trás do termo "pré-fabricada" */}
          <div className="lg:col-span-7 lg:pl-8">
            <ul className="relative">
              <span
                aria-hidden="true"
                className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-gold/60 via-gold/35 to-transparent"
              />

              {steps.map((item, index) => (
                <Reveal as="li" key={item.step} delay={index * 0.1}>
                  <div className="relative flex gap-7 pb-12 pl-0 last:pb-0">
                    <span className="relative mt-2.5 flex h-[15px] w-[15px] shrink-0 items-center justify-center">
                      <span className="absolute inset-0 rounded-full border border-gold/60" />
                      <span className="h-[5px] w-[5px] rounded-full bg-gold-bright" />
                    </span>

                    <div className="flex-1 border-b border-cream/10 pb-8 last:border-none">
                      <p className="text-[0.68rem] uppercase tracking-[0.16em] text-gold">
                        {item.step}
                      </p>
                      <h3 className="mt-3 font-display text-xl font-normal text-cream sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-cream/60 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
