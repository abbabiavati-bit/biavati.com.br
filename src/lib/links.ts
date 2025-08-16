export function getWhatsAppLink(opts?: { message?: string }) {
  const env = (import.meta as any).env || {}
  const phone = (env.VITE_WHATSAPP_NUMBER || env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5541996091053')
    .toString()
    .replace(/\D/g, '')
  const defaultMessage = (
    env.VITE_WHATSAPP_MESSAGE || env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    [
      'Olá, sou [Seu Nome].',
      'Encontrei a Biavati Imóveis pelo site e gostaria de receber uma seleção personalizada de imóveis alinhada ao meu perfil.',
      'Região de interesse: [cidade/bairro].',
      'Tipo: [casa/apto/terreno].',
      'Faixa de investimento: [R$].',
      'Podemos falar por aqui ou agendar uma ligação?'
    ].join(' ')
  )
  const message = (opts?.message ?? defaultMessage).trim()

  // Build using the WhatsApp API format provided by the client.
  const base = 'https://api.whatsapp.com/send/'
  const params = new URLSearchParams()
  params.set('phone', phone)
  if (message) params.set('text', message)
  params.set('type', 'phone_number')
  params.set('app_absent', '0')

  return `${base}?${params.toString()}`
}
