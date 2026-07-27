import { useCallback, useState } from 'react'
import { useLenis } from './hooks/useLenis'
import { getLenis, HEADER_OFFSET } from './lib/lenis'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { WhatsAppButton } from './components/layout/WhatsAppButton'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Models } from './components/sections/Models'
import { Differentials } from './components/sections/Differentials'
import { Gallery } from './components/sections/Gallery'
import { Testimonials } from './components/sections/Testimonials'
import { Coverage } from './components/sections/Coverage'
import { Contact } from './components/sections/Contact'
import { SectionDivider } from './components/ui/SectionDivider'
import type { ModelId } from './data/models'

export default function App() {
  useLenis()

  // Interesse escolhido nos cards de modelo, entregue pré-preenchido ao formulário
  const [presetInterest, setPresetInterest] = useState<ModelId | null>(null)

  const handleSelectModel = useCallback((id: ModelId) => {
    setPresetInterest(id)
    const target = document.getElementById('contato')
    if (!target) return

    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(target, { offset: -HEADER_OFFSET })
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      {/* Atalho de teclado para pular a navegação */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:text-ink"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />
        <About />
        <SectionDivider className="bg-charcoal-soft" />
        <Models onSelectModel={handleSelectModel} />
        <Differentials />
        <Gallery />
        <Testimonials />
        <SectionDivider className="bg-charcoal-soft" />
        <Coverage />
        <Contact presetInterest={presetInterest} />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
