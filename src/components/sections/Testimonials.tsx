import { useState } from 'react'
import { Play, Star } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { VideoModal } from '../ui/VideoModal'
import { testimonials } from '../../data/testimonials'
import { videoTestimonials, type VideoTestimonial } from '../../data/videoTestimonials'

const googleReviewsLink =
  'https://www.google.com/search?q=evolution+casas+de+madeira&rlz=1C5OZZY_enBR1135BR1135&oq=evo&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MgoIAhAAGLEDGIAEMgoIAxAAGLEDGIAEMgcIBBAAGIAEMgYIBRBFGD0yBggGEEUYPTIGCAcQRRg80gEIMTE1NGowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x9506750c4576ccd9:0x9e0b101faa13d942,1,,,,'

export function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null)

  return (
    <section id="depoimentos" className="bg-charcoal py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem já mora em uma Evolution."
          align="center"
        />

        {/* Vídeos de depoimento — nenhum player carrega até o clique (ver VideoModal) */}
        <p className="eyebrow mt-16 text-center lg:mt-20">Depoimentos em vídeo</p>
        <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-6 sm:max-w-2xl sm:grid-cols-2">
          {videoTestimonials.map((video, index) => (
            <Reveal as="div" key={video.youtubeId} delay={index * 0.09}>
              <button
                type="button"
                onClick={() => setActiveVideo(video)}
                aria-label={`Assistir depoimento em vídeo de ${video.clientName}`}
                className="group relative block aspect-[9/16] w-full overflow-hidden border border-cream/10 bg-charcoal-soft transition-colors duration-500 ease-soft hover:border-gold/45"
              >
                <img
                  src={video.thumbnail}
                  alt={video.thumbnailAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />

                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-charcoal/70 text-gold backdrop-blur-sm transition-colors duration-500 group-hover:border-gold group-hover:text-gold-bright">
                    <Play size={22} strokeWidth={1.5} className="ml-0.5 fill-current" />
                  </span>
                </span>

                <span className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <span className="block font-display text-lg font-normal text-cream">
                    {video.clientName}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <VideoModal
          youtubeId={activeVideo?.youtubeId ?? null}
          title={`Depoimento em vídeo de ${activeVideo?.clientName ?? ''}`}
          onClose={() => setActiveVideo(null)}
        />

        <p className="eyebrow mt-16 text-center lg:mt-20">Avaliações no Google</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {testimonials.map((testimonial, index) => (
            <Reveal as="article" key={testimonial.name} delay={index * 0.09}>
              <figure className="flex h-full flex-col border border-cream/10 bg-charcoal-soft p-8 transition-colors duration-500 ease-soft hover:border-gold/35 lg:p-10">
                {/* Aspas em serifada: assinatura tipográfica, não ícone genérico */}
                <span
                  aria-hidden="true"
                  className="font-display text-5xl font-light leading-none text-gold/50"
                >
                  &ldquo;
                </span>

                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-cream/75">
                  {testimonial.quote}
                </blockquote>

                <figcaption className="mt-8 border-t border-cream/10 pt-6">
                  <p className="font-display text-lg font-normal text-cream">{testimonial.name}</p>
                  <div
                    className="mt-2.5 flex items-center gap-1"
                    aria-label="Avaliação 5 de 5 estrelas no Google"
                  >
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <Star key={starIndex} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 flex justify-center lg:mt-16">
          <Button
            href={googleReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Confira nossas avaliações no Google
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
