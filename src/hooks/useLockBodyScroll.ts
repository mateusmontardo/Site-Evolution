import { useEffect } from 'react'

/** Trava o scroll do body enquanto `active` for true — usado por menus e modais em tela cheia. */
export function useLockBodyScroll(active: boolean) {
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])
}
