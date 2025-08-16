import React from 'react'
import { getWhatsAppLink } from '@/lib/links'
import { alugueis } from '@/data/aluguel'

export default function Aluguel() {
  const whats = getWhatsAppLink()
  return (
    <section aria-label="Aluguel" className="bg-[var(--brand-bg-page)] text-[var(--brand-fg)]">
      {/* Hero */}
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 md:py-24 text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold uppercase tracking-[0.08em]"
          style={{ fontFamily: 'var(--brand-font)' as string }}
        >
          Aluguel
        </h1>
        <p
          className="mt-4 text-base sm:text-lg text-[color:var(--fg)]/85"
          style={{ fontFamily: 'var(--brand-font-sans)' as string }}
        >
          Casas e apartamentos escolhidos a dedo para temporadas e long stays, unindo praticidade, conforto e localização ideal.
        </p>
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

      {/* Rentals grid */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-10">
          {alugueis.map((r) => (
            <article key={r.slug} className="group rounded-2xl border border-[var(--brand-border)] bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-md">
              <div className="relative overflow-hidden pt-[66%]">{/* 3:2 */}
                <img src={r.capa} alt={r.nome} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
              </div>
              <div className="p-6 transition-transform group-hover:-translate-y-0.5">
                <h2 className="text-lg font-semibold uppercase tracking-[0.06em]" style={{ fontFamily: 'var(--brand-font)' as string }}>{r.nome}</h2>
                <p className="mt-1 text-sm text-[color:var(--fg)]/70" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>{r.endereco}</p>
                <p className="mt-2 text-sm text-[color:var(--fg)]/85 line-clamp-2" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>{r.descricao}</p>

                {/* Specs */}
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>
                  <div><span className="text-[color:var(--fg)]/60">Pessoas:</span> <span className="font-medium">{r.pessoas}</span></div>
                  <div><span className="text-[color:var(--fg)]/60">Suítes:</span> <span className="font-medium">{r.suites}</span></div>
                  <div><span className="text-[color:var(--fg)]/60">Camas:</span> <span className="font-medium">{r.camas}</span></div>
                  <div><span className="text-[color:var(--fg)]/60">Banheiros:</span> <span className="font-medium">{r.banheiros}</span></div>
                  <div><span className="text-[color:var(--fg)]/60">Vagas:</span> <span className="font-medium">{r.vagas}</span></div>
                  <div><span className="text-[color:var(--fg)]/60">Distância do mar:</span> <span className="font-medium">{r.distanciaMar}</span></div>
                </div>

                {/* Facilidades */}
                {r.facilidades?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.facilidades.map((f) => (
                      <span key={f} className="rounded-full border border-[var(--brand-border)] px-2.5 py-1 text-xs text-[color:var(--fg)]/80">
                        {f}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-5 flex items-center gap-4">
                  <a
                    href={`/aluguel/${r.slug}`}
                    className="inline-block text-sm underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]"
                    style={{ fontFamily: 'var(--brand-font-sans)' as string }}
                    aria-label={`Ver detalhes de ${r.nome}`}
                  >
                    + Detalhes
                  </a>
                  <a
                    href={getWhatsAppLink({ message: `Olá! Tenho interesse em reservar ${r.nome} (${r.endereco}). Poderia enviar disponibilidade e valores?` })}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium text-white transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                    style={{ backgroundColor: 'var(--brand-accent)', fontFamily: 'var(--brand-font-sans)' as string }}
                    aria-label={`Reservar ${r.nome} no WhatsApp`}
                  >
                    Reservar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
