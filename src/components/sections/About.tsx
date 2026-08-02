import { Reveal } from '../ui/Reveal'
import { TreeRingMotif } from '../ui/TreeRingMotif'
import { site, yearsInBusiness } from '../../data/site'

const values = [
  {
    title: 'Matéria-prima nobre',
    description:
      'Madeira selecionada peça a peça, tratada e seca antes de virar estrutura. É o que define a vida útil da casa.',
  },
  {
    title: 'Projeto personalizado',
    description:
      'Do estudo de implantação ao detalhe de esquadria, o desenho responde ao terreno e a quem vai morar.',
  },
  {
    title: 'Atendimento binacional',
    description:
      'Obras no Brasil e no Uruguai, com a mesma equipe, o mesmo padrão e domínio da logística de fronteira.',
  },
  {
    title: 'Garantia formal',
    description:
      'Cronograma acordado em contrato e garantia sobre estrutura e tratamento — compromisso registrado, não verbal.',
  },
]

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      <div className="container-site">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Numeral com o motivo de anéis: 10 anos = 10 anéis */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative flex h-64 w-full items-center justify-center sm:h-80 lg:h-[26rem]">
                <TreeRingMotif
                  rings={yearsInBusiness}
                  className="absolute h-full w-auto max-w-none text-gold opacity-30"
                  strokeWidth={0.35}
                />
                <div className="relative text-center">
                  <span className="block font-display text-[7rem] font-light leading-none tracking-tighter text-gold-bright sm:text-[9rem] lg:text-[11rem]">
                    {yearsInBusiness}
                  </span>
                  <span className="mt-2 block font-sans text-[0.62rem] font-medium uppercase tracking-eyebrow text-cream/60 sm:text-xs">
                    anos de estrada
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Texto institucional */}
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <p className="eyebrow">A Evolution</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-light leading-[1.15] tracking-tight text-cream sm:text-4xl lg:text-[2.9rem]">
                Nascida em Bagé, construindo
                <br className="hidden sm:block" /> dos pampas ao Uruguai.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-cream/70 sm:text-lg">
              <Reveal delay={0.14}>
                <p>
                  A Evolution começou em {site.foundedYear}, em {site.city}, com uma convicção
                  simples: madeira bem escolhida e bem executada produz casas que envelhecem com
                  dignidade. Uma década depois, é esse critério que continua definindo cada obra.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  O que era atendimento regional acompanhou os clientes — da serra gaúcha ao litoral,
                  do campo à fronteira. Hoje a empresa executa projetos em todo o Rio Grande do Sul e
                  no Uruguai, com estrutura própria para conduzir obra dos dois lados da linha
                  divisória.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p>
                  São três estilos construtivos — colonial, contemporâneo e comercial —, todos
                  partindo do mesmo princípio: nenhuma obra é entregue antes de estar do jeito que
                  foi prometida.
                </p>
              </Reveal>
            </div>

            {/* Valores da marca */}
            <ul className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {values.map((value, index) => (
                <Reveal as="li" key={value.title} delay={0.1 + index * 0.07}>
                  <div className="border-t border-gold/25 pt-5">
                    <h3 className="font-display text-lg font-normal text-cream">{value.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-cream/60">
                      {value.description}
                    </p>
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
