/**
 * Dados institucionais centralizados.
 * TODO: confirmar e-mail oficial da Evolution antes de publicar.
 */

export const site = {
  name: 'Evolution',
  fullName: 'Evolution Casas de Madeira',
  descriptor: 'Casas de Madeira',
  foundedYear: 2016,
  city: 'Bagé',
  state: 'RS',
  /** Número no formato internacional, apenas dígitos — usado nos links wa.me */
  whatsappNumber: '5553999028225',
  whatsappDisplay: '(53) 99902-8225',
  email: 'contato@evolutioncasasdemadeira.com.br',
  address: {
    street: 'Rua Dezenove de Abril, 3074',
    district: 'São Jorge',
    city: 'Bagé',
    state: 'RS',
    zip: '96408-670',
  },
  businessHours: [{ days: 'Segunda a sexta', hours: '9h às 12h e 14h às 18h' }],
  social: {
    instagram: 'https://instagram.com/evolutioncasasdemadeira',
    facebook: 'https://facebook.com/evolutioncasasdemadeira',
  },
} as const

/**
 * Anos de experiência da liderança da Evolution em construção de casas de
 * madeira — anteriores à fundação da marca em {@link site.foundedYear}, por
 * isso é um número fixo, não calculado a partir do ano de fundação.
 * TODO: atualizar manualmente a cada ano (valor informado em 2026).
 */
export const founderExperienceYears = 40

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Modelos', href: '#modelos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
] as const

/**
 * Monta um link wa.me com mensagem pré-preenchida.
 * Mantém a mensagem no tom da marca — sem gírias, direta.
 */
export function whatsappLink(message?: string): string {
  const text =
    message ??
    'Olá! Vim pelo site da Evolution e gostaria de conversar sobre um projeto em madeira.'
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`
}
