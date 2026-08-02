import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '../ui/Button'
import { site, whatsappLink, yearsInBusiness } from '../../data/site'

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  // Alguns navegadores (Safari/iOS em especial) ignoram o autoplay se a propriedade
  // `muted` do elemento não estiver setada de fato no momento da tentativa — o
  // atributo declarativo no JSX às vezes chega tarde demais na hidratação do React.
  // Setar via ref e chamar play() explicitamente cobre esse caso.
  useEffect(() => {
    if (shouldReduceMotion) return
    const video = videoRef.current
    if (!video) return
    video.muted = true
    const playPromise = video.play()
    if (playPromise) playPromise.catch(() => {})
  }, [shouldReduceMotion])

  const fadeUp = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0.2 : 0.7,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Vídeo de fundo. Some para quem tem prefers-reduced-motion ativado — vídeo em loop
          autoplay é o tipo de movimento que essa preferência existe para evitar. */}
      {shouldReduceMotion ? (
        <img
          src="https://placehold.co/2400x1600/17140F/3B2A1E?text=+"
          alt="Casa de madeira da Evolution ao entardecer, com luz quente saindo das aberturas"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      ) : (
        <video
          ref={videoRef}
          // object-position desloca o corte para a esquerda no mobile: o vídeo é
          // 16:9 e a tela vertical do celular fica muito mais estreita que alta,
          // então o object-cover precisa descartar boa parte da largura — a fachada
          // e a placa da casa ficam melhor enquadradas puxando o foco para a
          // esquerda do que no centro puro (padrão usado no desktop).
          className="absolute inset-0 h-full w-full object-cover object-[30%_center] sm:object-center"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          poster="https://placehold.co/2400x1600/17140F/3B2A1E?text=+"
          aria-hidden="true"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Camadas de escurecimento: garantem contraste AA do texto sobre a foto */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/30 to-transparent" />
      {/* Brilho dourado sutil no horizonte — remete à luz do entardecer */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom_center,rgba(176,141,66,0.14),transparent_65%)]" />

      <div className="container-site relative z-10 pb-20 pt-32 sm:pb-24 lg:pb-28">
        <motion.p className="eyebrow" {...fadeUp(0.1)}>
          Desde {site.foundedYear} · {site.city}, {site.state}
        </motion.p>

        <motion.h1
          className="mt-7 max-w-4xl font-display text-[2.6rem] font-light leading-[1.06] tracking-tight text-cream sm:text-6xl lg:text-[4.6rem]"
          {...fadeUp(0.2)}
        >
          Uma década construindo
          <br />
          <span className="text-gold-bright">sonhos em madeira</span>.
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
          {...fadeUp(0.32)}
        >
          Casas em estilo colonial, contemporâneo e comercial, em madeira nobre — desenhadas sob
          medida e executadas por equipe própria em Bagé, em todo o Rio Grande do Sul e no Uruguai.
        </motion.p>

        <motion.div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center" {...fadeUp(0.44)}>
          <Button
            href={whatsappLink(
              'Olá! Vim pelo site da Evolution e gostaria de agendar uma conversa sobre meu projeto.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Agende uma conversa
          </Button>
          <Button href="#modelos" variant="outline" size="lg">
            Conheça os modelos
          </Button>
        </motion.div>

        {/* Marcadores de credibilidade — prova rápida antes do primeiro scroll */}
        <motion.dl
          className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-cream/10 pt-8 sm:grid-cols-3"
          {...fadeUp(0.56)}
        >
          {[
            { value: `${yearsInBusiness} anos`, label: 'de mercado' },
            { value: '2 países', label: 'Brasil e Uruguai' },
            { value: '3 estilos', label: 'de construção em madeira' },
          ].map((item) => (
            <div key={item.label}>
              <dt className="font-display text-2xl font-light text-gold-bright sm:text-3xl">
                {item.value}
              </dt>
              <dd className="mt-2 text-xs uppercase tracking-[0.14em] text-cream/55">{item.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Indicador de rolagem */}
      <motion.a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="absolute bottom-8 right-6 z-10 hidden text-cream/40 transition-colors duration-300 hover:text-gold-bright lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <ArrowDown size={22} strokeWidth={1.25} className="animate-float-slow" />
      </motion.a>
    </section>
  )
}
