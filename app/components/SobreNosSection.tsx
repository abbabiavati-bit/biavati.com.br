import React from 'react'

type Props = {
  cta?: { href: string; label: string } | null
}

export default function SobreNosSection({ cta = { href: '/sobre-nos', label: 'Saiba mais' } }: Props) {
  return (
    <section aria-label="Sobre Nós" className="bg-[var(--brand-bg-page)] py-16 md:py-24">
      <div className="mx-4 md:mx-8 rounded-2xl bg-[var(--brand-gold)] text-[var(--brand-fg-on-gold)]">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-14 md:py-20 text-center">
          <h2
            className="text-3xl md:text-5xl font-semibold"
            style={{ fontFamily: 'var(--brand-font)' as string }}
          >
            Sobre Nós
          </h2>
          <div className="mt-6 md:mt-8">
            <p
              className="text-base md:text-xl leading-relaxed font-sans"
              style={{ fontFamily: 'var(--brand-font-sans)' as string }}
            >
              A Biavati Imóveis atua com curadoria e assessoria completa na compra e venda de imóveis residenciais e comerciais no litoral e nas principais cidades do Paraná. Nossa abordagem é discreta, precisa e orientada a resultados, com foco na apresentação, no posicionamento e na negociação.
            </p>
            <p
              className="mt-4 text-base md:text-xl leading-relaxed font-sans"
              style={{ fontFamily: 'var(--brand-font-sans)' as string }}
            >
              Mais do que imóveis, conhecemos profundamente a região, sua cultura e seu modo de viver. É aqui que construímos nossas relações e é daqui que vem a nossa força. Compartilhamos esse conhecimento e essa rede de confiança com cada cliente, indicando parceiros de confiança para reforma, interiores e gestão patrimonial.
            </p>
            <p
              className="mt-4 text-base md:text-xl leading-relaxed font-sans"
              style={{ fontFamily: 'var(--brand-font-sans)' as string }}
            >
              Estamos ao seu lado em cada etapa, com transparência, dedicação e visão estratégica, para que você encontre não apenas uma propriedade, mas o lugar certo para chamar de lar.
            </p>
          </div>
          {cta && (
            <div className="mt-10">
              <a
                href={cta.href}
                className="inline-flex items-center rounded-full border border-white/60 px-6 py-3 text-sm font-medium hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-gold)]"
                style={{ fontFamily: 'var(--brand-font-sans)' as string }}
              >
                {cta.label}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

