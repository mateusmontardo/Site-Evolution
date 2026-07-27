import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { whatsappLink } from '../../data/site'

const areas = [
  {
    name: 'Bagé',
    role: 'Sede e origem',
    description: 'Escritório, equipe e centro de operações desde 2016.',
  },
  {
    name: 'Rio Grande do Sul',
    role: 'Estado inteiro',
    description: 'Da campanha à serra, do litoral à fronteira oeste.',
  },
  {
    name: 'Uruguai',
    role: 'Atendimento binacional',
    description: 'Obra, logística e documentação do outro lado da linha.',
  },
]

export function Coverage() {
  return (
    <section id="atuacao" className="relative overflow-hidden bg-charcoal-soft py-24 lg:py-32">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Área de atuação</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-light leading-[1.15] tracking-tight text-cream sm:text-4xl lg:text-[2.9rem]">
                Dos pampas à fronteira — e além dela.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
                Poucas construtoras do setor operam nos dois países. A Evolution atende Bagé, todo o
                Rio Grande do Sul e o Uruguai com a mesma equipe e o mesmo padrão de execução —
                incluindo o que a maioria evita: a burocracia de obra transfronteiriça.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9">
                <Button
                  href={whatsappLink(
                    'Olá! Gostaria de saber se a Evolution atende a minha região.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  Consultar atendimento na minha região
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Mapa tipográfico estilizado: pontos ligados por um fio dourado,
              sem simular geografia real */}
          <div className="lg:col-span-7 lg:pl-8">
            <ul className="relative">
              {/* Fio vertical que conecta os três pontos */}
              <span
                aria-hidden="true"
                className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-gold/60 via-gold/35 to-transparent"
              />

              {areas.map((area, index) => (
                <Reveal as="li" key={area.name} delay={index * 0.1}>
                  <div className="relative flex gap-7 pb-12 pl-0 last:pb-0">
                    {/* Marcador */}
                    <span className="relative mt-2.5 flex h-[15px] w-[15px] shrink-0 items-center justify-center">
                      <span className="absolute inset-0 rounded-full border border-gold/60" />
                      <span className="h-[5px] w-[5px] rounded-full bg-gold-bright" />
                    </span>

                    <div className="flex-1 border-b border-cream/10 pb-8 last:border-none">
                      <p className="text-[0.68rem] uppercase tracking-[0.16em] text-gold">
                        {area.role}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-light text-cream sm:text-3xl lg:text-[2.1rem]">
                        {area.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-cream/60 sm:text-base">
                        {area.description}
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
