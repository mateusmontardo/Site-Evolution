interface TreeRingMotifProps {
  /** Quantidade de anéis desenhados (ex.: 40 anéis = 40 anos de experiência, na seção Sobre) */
  rings?: number
  className?: string
  /** Espessura do traço em unidades do viewBox */
  strokeWidth?: number
}

const MIN_RADIUS = 4
const MAX_RADIUS = 47
const MIN_OPACITY = 0.08

/**
 * Elemento de assinatura da marca: anéis de crescimento de árvore.
 * Os deslocamentos de centro são fixos (não aleatórios) para manter o desenho
 * estável entre renders e dar um leve caráter orgânico, como um tronco real.
 * Raio e opacidade escalam com a quantidade de anéis — o último anel sempre
 * termina dentro do viewBox e nunca desaparece de opacidade, não importa se
 * são 12 ou 40 (troncos mais "velhos" simplesmente ficam com anéis mais finos
 * e próximos, como um tronco real).
 * Usado em apenas três pontos do site: número de anos (Sobre), divisores e fundo do formulário.
 */
export function TreeRingMotif({ rings = 10, className = '', strokeWidth = 0.6 }: TreeRingMotifProps) {
  // Deslocamentos cíclicos do núcleo — o anel cresce fora de centro, como na madeira
  const offsets = [
    [0, 0],
    [0.9, -0.6],
    [-0.7, 0.8],
    [1.2, 0.5],
    [-1.1, -0.9],
    [0.5, 1.3],
    [-1.4, 0.4],
    [1.0, -1.2],
  ]

  const lastIndex = Math.max(rings - 1, 1)

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {Array.from({ length: rings }, (_, index) => {
        const [dx, dy] = offsets[index % offsets.length]
        const progress = rings > 1 ? index / lastIndex : 0
        // Espaçamento levemente irregular entre os anéis
        const radius = MIN_RADIUS + progress * (MAX_RADIUS - MIN_RADIUS) + (index % 3) * 0.4
        const opacity = 1 - progress * (1 - MIN_OPACITY)
        return (
          <circle
            key={index}
            cx={50 + dx}
            cy={50 + dy}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            opacity={opacity}
          />
        )
      })}
    </svg>
  )
}
