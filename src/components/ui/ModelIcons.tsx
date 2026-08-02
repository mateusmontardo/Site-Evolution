/**
 * Ícones de linha fina desenhados sob medida para os três estilos construtivos.
 * O lucide-react não tem pictogramas que distingam colonial de contemporâneo com
 * o mesmo peso visual, então estes seguem o traço de 1.25 para casar com os demais.
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

/** Colonial — telhado de águas largas com beiral e varanda sobre pilares */
export function ColonialIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M1.5 11.5 12 4.5l10.5 7" />
      <path d="M4.5 10.6V19h15v-8.4" />
      <path d="M2.5 19h19" />
      <path d="M7.5 19v-5.2M16.5 19v-5.2" />
      <path d="M10.4 19v-4.6h3.2V19" />
    </svg>
  )
}

/** Contemporâneo — plano inclinado único e pano de vidro alto */
export function ContemporaryIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M2.5 12.5 21.5 5.5" />
      <path d="M4.5 11.8V19h15v-12" />
      <path d="M2.5 19h19" />
      <path d="M9 19v-6.2h4V19" />
      <path d="M16 10.6v4.2" />
    </svg>
  )
}

/** Comercial — volume horizontal com fachada de vitrines e toldo */
export function CommercialIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M3 9.5 12 5.5l9 4" />
      <path d="M4.5 9.2v10h15v-10" />
      <path d="M2.5 19.2h19" />
      <path d="M4.5 12.6h15" />
      <path d="M8 19.2v-4h3.5v4" />
      <path d="M14.5 15.4h3.2" />
    </svg>
  )
}
