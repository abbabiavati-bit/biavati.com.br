import React from 'react'
import { rentals } from '@/app/data/aluguel'

function getWhatsAppLink(message?: string) {
  const phone = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5541999999999').toString().replace(/\D/g, '')
  const base = `https://wa.me/${phone}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = rentals.find((r) => r.slug === params.slug)
  return {
    title: p ? `${p.name} — Aluguel | Biavati` : 'Aluguel | Biavati Imóveis',
    description: p?.description ?? 'Imóvel para aluguel',
  }
}

export default function RentalDetail({ params }: { params: { slug: string } }) {
  const p = rentals.find((r) => r.slug === params.slug)
  if (!p) return <div className="mx-auto max-w-3xl px-6 py-16">Imóvel não encontrado.</div>
  const whats = getWhatsAppLink(`Olá! Tenho interesse no imóvel ${p.name} (${p.location}). Poderia enviar mais detalhes?`)
  return (
    <article className="bg-[var(--brand-bg-page)] text-[var(--brand-fg)]">
      {/* Hero image */}
      <div className="relative overflow-hidden">
        <img src={p.coverSrc} alt={p.name} className="h-[42vh] w-full object-cover sm:h-[56vh]" />
      </div>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <h1 className="text-3xl sm:text-4xl font-semibold" style={{ fontFamily: 'var(--brand-font)' as string }}>{p.name}</h1>
        <p className="mt-2 text-[color:var(--fg)]/70" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>{p.location}</p>
        <p className="mt-4 max-w-3xl" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>{p.description}</p>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {(p.gallery ?? []).map((src, i) => (
            <img key={i} src={src} alt={`${p.name} foto ${i + 1}`} className="h-48 w-full rounded-lg border border-[var(--brand-border)] object-cover" />
          ))}
        </div>
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

