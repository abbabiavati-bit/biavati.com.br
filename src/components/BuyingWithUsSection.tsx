import React from 'react'

type Property = {
  name: string
  location: string
  description: string
  href: string
  img: string
  alt: string
}

const defaultProperties: Property[] = [
  {
    name: 'Solymar',
    location: 'Ubatuba, SP',
    description: 'Casa pé na areia com vista incrível para o mar.',
    href: 'https://www.atamisolecia.com.br/imoveis/solymar/',
    img: '/images/atami/DJI_0530-1024x576.jpg',
    alt: 'Solymar — vista do litoral',
  },
  {
    name: 'Betarras',
    location: 'Ubatuba, SP',
    description: 'Arquitetura contemporânea integrada à natureza.',
    href: 'https://www.atamisolecia.com.br/imoveis/betarras/',
    img: '/images/atami/IMG_2300-768x576.jpg',
    alt: 'Betarras — residência moderna integrada à natureza',
  },
  {
    name: 'Triplex Sol',
    location: 'Ubatuba, SP',
    description: 'Triplex moderno com ambientes amplos e iluminados.',
    href: 'https://www.atamisolecia.com.br/imoveis/triplex-sol/',
    img: '/images/atami/WhatsApp-Image-2022-12-05-at-12.41.07-1024x768.jpeg',
    alt: 'Triplex Sol — interiores amplos e iluminados',
  },
]

export default function BuyingWithUsSection({ properties = defaultProperties }: { properties?: Property[] }) {
  return (
    <section
      aria-label="Comprar Conosco"
      className="border-t border-[var(--brand-border)] bg-[var(--brand-bg)] py-20 md:py-24 text-[var(--brand-fg)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ fontFamily: 'var(--brand-font)' as string }}
          >
            Comprar Conosco
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-xl border border-[var(--brand-border)] bg-[var(--brand-bg)]"
            >
              <a href="/compra" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]">
                <div className="relative">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-slate-900 transition hover:opacity-90">Ver detalhes</span>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <h3
                    className="mt-4 text-xl font-medium"
                    style={{ fontFamily: 'var(--brand-font)' as string }}
                  >
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>
                    {p.location}
                  </p>
                  <p className="mt-2 text-sm text-[var(--fg)]" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>
                    {p.description}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
