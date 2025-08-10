export function getWhatsAppLink(opts?: { message?: string }) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') || '5541999999999'
  const defaultMessage = (
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
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
