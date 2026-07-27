/**
 * Ícones de linha fina desenhados sob medida para as quatro especialidades.
 * O lucide-react não tem pictogramas específicos de telhado/chalé/cabana com o
 * mesmo peso visual, então estes seguem o traço de 1.25 para casar com os demais.
 */

interface IconProps {
  className?: string
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Casas pré-fabricadas — módulos que se encaixam sob um telhado comum */
export function RoofIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M2 11 12 4l10 7" />
      <path d="M5 11v9h14v-9" />
      <path d="M12 11v9" />
      <path d="M5 15.5h14" />
    </svg>
  )
}

/** Casas de madeira sob projeto — volume único com chaminé e aberturas */
export function HouseIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M3 10.5 12 3.5l9 7" />
      <path d="M5.5 9.4V20h13V9.4" />
      <path d="M17 5.5h2v2.2" />
      <path d="M10 20v-5h4v5" />
      <path d="M8 12.2h2.2" />
    </svg>
  )
}

/** Chalés — duas águas acentuadas, típicas de terreno de encosta */
export function ChaletIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M12 3 3.5 20h17L12 3z" />
      <path d="M12 8.5 7.5 17.5h9L12 8.5z" />
      <path d="M2 20h20" />
    </svg>
  )
}

/** Cabanas — volume compacto com varanda */
export function CabinIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M4 11 12 5.5 20 11" />
      <path d="M6.5 10.4V19h11v-8.6" />
      <path d="M4 19h16" />
      <path d="M10.2 19v-4.4h3.6V19" />
      <path d="M8.5 8.6h7" />
    </svg>
  )
}
