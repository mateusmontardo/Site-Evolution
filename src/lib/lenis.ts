import type Lenis from 'lenis'

/** Mesmo valor de scroll-margin-top usado em src/styles/index.css para compensar o header fixo */
export const HEADER_OFFSET = 88

let instance: Lenis | null = null

/** Usado por useLenis.ts para publicar/limpar a instância ativa */
export function setLenisInstance(lenis: Lenis | null) {
  instance = lenis
}

/**
 * Instância ativa do Lenis, ou null se ainda não foi inicializada ou se o
 * usuário tem prefers-reduced-motion (o scroll suave fica desligado nesse caso).
 */
export function getLenis(): Lenis | null {
  return instance
}
