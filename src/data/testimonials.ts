export interface Testimonial {
  quote: string
  name: string
}

/**
 * Depoimentos reais extraídos das avaliações públicas da Evolution no Google
 * (ver botão "Confira nossas avaliações no Google" na seção). Nomes e citações
 * mantidos fiéis ao texto original; apenas a capitalização foi normalizada.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Empresa muito confiável, cumpre com os prazos de entrega, além de usar material de primeira.',
    name: 'Franco Fabian',
  },
  {
    quote: 'Excelentes preços e atendimento nota 10, materiais de qualidade. Super indici.',
    name: 'Cristiano Jardim',
  },
  {
    quote:
      'Excelente atendimento, ótima explicação e entendimento por parte de quem realiza os ajustes de intenção de compra.',
    name: 'Romario Soares Correa',
  },
]
