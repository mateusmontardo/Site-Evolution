declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/** Label da ação de conversão "Contato" no Google Ads (Snippet de evento). */
const WHATSAPP_CONVERSION_LABEL = 'GqRwCLWD298cEIv4nLdE'

/**
 * Dispara o clique num botão de WhatsApp para o Google Ads (conversão) e para
 * o dataLayer em geral (evento `whatsapp_click`, com a origem do clique —
 * útil para comparar quais pontos do site convertem mais).
 */
export function trackWhatsAppClick(source: string) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'whatsapp_click', { source })

  window.gtag('event', 'conversion', {
    send_to: `AW-18369428491/${WHATSAPP_CONVERSION_LABEL}`,
    value: 1.0,
    currency: 'BRL',
  })
}
