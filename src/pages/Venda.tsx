import React from 'react'
import { getWhatsAppLink } from '@/lib/links'

export default function Venda() {
  const whats = getWhatsAppLink()
  return (
    <section aria-label="Venda" className="bg-[var(--brand-bg-page)] py-16 md:py-24 text-[var(--brand-fg)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold" style={{ fontFamily: 'var(--brand-font)' as string }}>Venda</h1>
          <p className="mt-3" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>Apresentação, posicionamento e negociação para maximizar o valor do seu imóvel.</p>
          <div className="mt-6">
            <a
              href={whats}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2"
              style={{ backgroundColor: 'var(--brand-accent)', fontFamily: 'var(--brand-font-sans)' as string }}
              aria-label="Fale no WhatsApp"
            >
              Fale no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

