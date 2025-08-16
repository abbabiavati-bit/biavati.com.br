import React from 'react'
import { rentals } from '@/app/data/aluguel'

export const metadata = {
  title: 'Aluguel | Biavati Imóveis',
  description: 'Seleção de imóveis para aluguel no litoral e nas principais cidades do Paraná.',
}

export default function AluguelPage() {
  return (
    <section aria-label="Aluguel" className="bg-[var(--brand-bg-page)] text-[var(--brand-fg)]">
      {/* Hero header */}
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 md:py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold" style={{ fontFamily: 'var(--brand-font)' as string }}>Aluguel</h1>
        <p className="mt-3 text-lg text-[color:var(--fg)]/85" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>
          Casas e apartamentos escolhidos a dedo para temporadas e long stays, unindo praticidade, conforto e localização ideal.
        </p>
      </div>

      {/* Grid/list of cards */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rentals.map((r) => (
            <article key={r.slug} className="rounded-xl border border-[var(--brand-border)] bg-white shadow-sm overflow-hidden">
              <a
                href={`/aluguel/${r.slug}`}
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]"
                aria-label={r.name}
              >
                <div className="relative overflow-hidden">
                  <img src={r.coverSrc} alt={r.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold" style={{ fontFamily: 'var(--brand-font)' as string }}>{r.name}</h2>
                  <p className="mt-1 text-sm text-[color:var(--fg)]/70" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>{r.location}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-[color:var(--fg)]/85" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>{r.description}</p>
                  <span className="mt-3 inline-block text-sm underline underline-offset-4" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>Ver detalhes</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
