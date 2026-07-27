interface TreeRingMotifProps {
  /** Quantidade de anéis desenhados (10 anéis = 10 anos, na seção Sobre) */
  rings?: number
  className?: string
  /** Espessura do traço em unidades do viewBox */
  strokeWidth?: number
}

/**
 * Elemento de assinatura da marca: anéis de crescimento de árvore.
 * Os deslocamentos de centro são fixos (não aleatórios) para manter o desenho
 * estável entre renders e dar um leve caráter orgânico, como um tronco real.
 * Usado em apenas três pontos do site: número "10" (Sobre), divisores e fundo do formulário.
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
        // Espaçamento levemente irregular entre os anéis
        const radius = 4 + index * 4.6 + (index % 3) * 0.7
        return (
          <circle
            key={index}
            cx={50 + dx}
            cy={50 + dy}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            opacity={1 - index * 0.05}
          />
        )
      })}
    </svg>
  )
}
