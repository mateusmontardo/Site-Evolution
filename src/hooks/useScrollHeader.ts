import { useEffect, useRef, useState } from 'react'

interface ScrollHeaderState {
  /** Header visível: some ao rolar para baixo, reaparece ao rolar para cima */
  visible: boolean
  /** Passou do topo — usado para aplicar fundo e borda no header */
  scrolled: boolean
}

const HIDE_AFTER = 120 // px percorridos antes de permitir esconder o header
const DELTA = 8 // tolerância para ignorar micro-scrolls / bounce do iOS

export function useScrollHeader(): ScrollHeaderState {
  const [state, setState] = useState<ScrollHeaderState>({ visible: true, scrolled: false })
  const lastY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const update = () => {
      const y = Math.max(window.scrollY, 0)
      const diff = y - lastY.current

      if (Math.abs(diff) > DELTA) {
        const goingDown = diff > 0
        setState({ visible: !(goingDown && y > HIDE_AFTER), scrolled: y > 24 })
        lastY.current = y
      } else {
        setState((prev) => (prev.scrolled === y > 24 ? prev : { ...prev, scrolled: y > 24 }))
      }

      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        window.requestAnimationFrame(update)
      }
    }

    lastY.current = window.scrollY
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return state
}
