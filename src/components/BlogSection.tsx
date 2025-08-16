import React from 'react'
import { posts } from '@/data/posts'

export default function BlogSection() {
  const recent = posts.slice(0, 3)
  return (
    <section aria-label="Blog" className="bg-[var(--brand-bg-page)] py-16 md:py-24 text-[var(--brand-fg)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div className="text-center md:text-left mx-auto md:mx-0">
            <h2
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{ fontFamily: 'var(--brand-font)' as string }}
            >
              Blog
            </h2>
            <p
              className="mt-3 text-[color:var(--fg)]/85"
              style={{ fontFamily: 'var(--brand-font-sans)' as string }}
            >
              Notas sobre mercado, arquitetura e litoral do Paraná.
            </p>
          </div>
          <div className="hidden md:block">
            <a
              href="/blog"
              className="inline-flex items-center rounded-full border border-[var(--brand-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--brand-fg)] hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]"
              style={{ fontFamily: 'var(--brand-font-sans)' as string }}
            >
              Ver todas as notas →
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((p) => (
            <article key={p.slug} className="rounded-xl border border-[var(--brand-border)] bg-white overflow-hidden">
              <a
                href={`/blog/${p.slug}`}
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.coverSrc}
                    alt={p.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="text-lg font-medium"
                    style={{ fontFamily: 'var(--brand-font)' as string }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="mt-2 text-sm text-[color:var(--fg)]/80"
                    style={{ fontFamily: 'var(--brand-font-sans)' as string }}
                  >
                    {p.excerpt}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="/blog"
            className="inline-flex items-center rounded-full border border-[var(--brand-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--brand-fg)] hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]"
            style={{ fontFamily: 'var(--brand-font-sans)' as string }}
          >
            Ver todas as notas →
          </a>
        </div>
      </div>
    </section>
  )
}

