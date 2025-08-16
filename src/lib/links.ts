export function getWhatsAppLink(opts?: { message?: string }) {
  const env = (import.meta as any).env || {}
  const phone = (env.VITE_WHATSAPP_NUMBER || env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5541999999999')
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
  const base = `https://wa.me/${phone}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
