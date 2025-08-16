import React from 'react'

type Item = { title: string; img: string; href?: string; alt?: string }

const defaultItems: Item[] = [
  { title: 'Matinhos', img: '/images/locations/lifestyle-2.png', href: '/blog', alt: 'Matinhos — litoral' },
  { title: 'Caiobá', img: '/images/locations/lifestyle-3.png', href: '/blog', alt: 'Caiobá — litoral' },
]

export default function LifestyleSection({
  items = defaultItems,
  title = 'MERGULHE NO ESTILO DE VIDA DO LITORAL',
  body = 'Descubra cenários à beira-mar e refúgios de tranquilidade — um ritmo de vida único, entre o oceano e a natureza.',
}: { items?: Item[]; title?: string; body?: string }) {
  return (
    <section
      aria-label="Estilo de Vida do Litoral"
      className="border-t border-[var(--brand-border)] bg-[var(--brand-bg)] py-20 md:py-24 text-[var(--brand-fg)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header: two-column grid */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2
              className="text-3xl font-bold uppercase tracking-[0.12em] sm:text-4xl"
              style={{ fontFamily: 'var(--brand-font)' as string }}
            >
              {title}
            </h2>
          </div>
          <div className="text-center md:text-left">
            <p
              className="mx-auto max-w-[700px] text-lg leading-relaxed md:text-xl"
              style={{ fontFamily: 'var(--brand-font-sans)' as string }}
            >
              {body}
            </p>
          </div>
        </div>

      {/* Full-bleed cards grid (no text overlay, spaced) */}
      <div className="mt-10 px-2 sm:px-0 grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 rounded-md overflow-hidden border border-[var(--brand-border)] sm:rounded-none sm:overflow-visible sm:border-0">
          {items.map((it) => (
            <article key={it.title} className="group relative">
              <a
                href={it.href || '#'}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]"
                aria-label={it.title}
              >
                <div className="relative h-[300px] overflow-hidden md:h-[420px]">
                  <img
                    src={it.img}
                    alt={it.alt || it.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 animate-kenburns-slow"
                  />
                  <div className="absolute inset-0 water-shimmer" aria-hidden="true" />
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
