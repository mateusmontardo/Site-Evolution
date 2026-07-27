import { useEffect } from 'react'
import Lenis from 'lenis'
import { HEADER_OFFSET, setLenisInstance } from '../lib/lenis'

/**
 * Scroll suave (com inércia) para a página inteira, no lugar do scroll-behavior:
 * smooth nativo. Também assume a navegação por âncoras (#secao) para que ela use
 * a mesma suavização. Desligado por completo para quem tem prefers-reduced-motion,
 * caindo de volta no scroll nativo instantâneo do navegador.
 */
export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)),
    })
    setLenisInstance(lenis)

    let rafId: number
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Intercepta cliques em âncoras internas (#secao) para usar o mesmo scroll suave
    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a[href^="#"]')
      if (!(anchor instanceof HTMLAnchorElement)) return

      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return

      const destination = document.querySelector(hash)
      if (!destination) return

      event.preventDefault()
      lenis.scrollTo(destination as HTMLElement, { offset: -HEADER_OFFSET })
      history.pushState(null, '', hash)
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(rafId)
      setLenisInstance(null)
      lenis.destroy()
    }
  }, [])
}
