declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Label da ação de conversão "Contato via WhatsApp" no Google Ads.
 * TODO: preencher assim que a conversão for criada em Google Ads → Ferramentas
 * e configurações → Conversões → Nova ação de conversão → Site → evento
 * acionado manualmente. O valor fica em "Detalhes da tag", na parte depois da
 * barra em algo como AW-18369428491/AbC-D_efGhi12345.
 */
const WHATSAPP_CONVERSION_LABEL = ''

/**
 * Dispara o clique num botão de WhatsApp para o Google Ads (conversão) e para
 * o dataLayer em geral (evento `whatsapp_click`, com a origem do clique —
 * útil para comparar quais pontos do site convertem mais). Enquanto
 * `WHATSAPP_CONVERSION_LABEL` não for preenchido, só o evento genérico é
 * disparado — evita mandar um `send_to` inválido pro Google Ads.
 */
export function trackWhatsAppClick(source: string) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'whatsapp_click', { source })

  if (WHATSAPP_CONVERSION_LABEL) {
    window.gtag('event', 'conversion', {
      send_to: `AW-18369428491/${WHATSAPP_CONVERSION_LABEL}`,
    })
  }
}
