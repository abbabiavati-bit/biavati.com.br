import React from 'react'
import { alugueis } from '@/data/aluguel'
import { getWhatsAppLink } from '@/lib/links'

export default function AluguelDetail({ slug }: { slug: string }) {
  const imovel = alugueis.find((i) => i.slug === slug)
  if (!imovel) {
    return (
      <section className="bg-[var(--brand-bg-page)] py-16 text-[var(--brand-fg)]">
        <div className="mx-auto max-w-3xl px-6">Imóvel não encontrado.</div>
      </section>
    )
  }
  const whats = getWhatsAppLink({ message: `Olá! Tenho interesse no imóvel ${imovel.nome} (${imovel.endereco}). Poderia enviar mais detalhes?` })
  return (
    <article className="bg-[var(--brand-bg-page)] text-[var(--brand-fg)]">
      <div className="relative overflow-hidden">
        <img src={imovel.capa} alt={imovel.nome} className="h-[42vh] w-full object-cover sm:h-[56vh]" />
      </div>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <h1 className="text-3xl sm:text-4xl font-semibold" style={{ fontFamily: 'var(--brand-font)' as string }}>{imovel.nome}</h1>
        <p className="mt-2 text-[color:var(--fg)]/70" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>{imovel.endereco}</p>
        <p className="mt-4 max-w-3xl" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>{imovel.descricao}</p>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>
          <div><span className="text-[color:var(--fg)]/60">Pessoas:</span> <span className="font-medium">{imovel.pessoas}</span></div>
          <div><span className="text-[color:var(--fg)]/60">Suítes:</span> <span className="font-medium">{imovel.suites}</span></div>
          <div><span className="text-[color:var(--fg)]/60">Camas:</span> <span className="font-medium">{imovel.camas}</span></div>
          <div><span className="text-[color:var(--fg)]/60">Banheiros:</span> <span className="font-medium">{imovel.banheiros}</span></div>
          <div><span className="text-[color:var(--fg)]/60">Vagas:</span> <span className="font-medium">{imovel.vagas}</span></div>
          <div><span className="text-[color:var(--fg)]/60">Distância do mar:</span> <span className="font-medium">{imovel.distanciaMar}</span></div>
        </div>

        {imovel.facilidades?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {imovel.facilidades.map((f) => (
              <span key={f} className="rounded-full border border-[var(--brand-border)] px-2.5 py-1 text-xs text-[color:var(--fg)]/80">
                {f}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-10">
          <a
            href={whats}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2"
            style={{ backgroundColor: 'var(--brand-accent)', fontFamily: 'var(--brand-font-sans)' as string }}
          >
            Fale no WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}

