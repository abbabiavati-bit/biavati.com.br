import React from 'react'
import { posts } from '../data/posts'
import StoryCard from '../components/StoryCard'

export const metadata = {
  title: 'Blog | Biavati Imóveis',
  description: 'Notas sobre mercado, arquitetura e litoral do Paraná.',
}

export default function BlogIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog | Biavati Imóveis',
    url: 'https://www.biavati.com.br/blog',
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      image: [p.coverSrc],
      url: `https://www.biavati.com.br/blog/${p.slug}`,
      description: p.excerpt,
    })),
  }

  return (
    <section aria-label="Blog" className="bg-[var(--brand-bg-page)] py-16 md:py-24 text-[var(--brand-fg)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold" style={{ fontFamily: 'var(--brand-font)' as string }}>Blog</h1>
          <p className="mt-3" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>Notas sobre mercado, arquitetura e litoral do Paraná.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <StoryCard
              key={p.slug}
              href={`/blog/${p.slug}`}
              coverSrc={p.coverSrc}
              title={p.title}
              excerpt={p.excerpt}
              kicker={p.kicker}
            />
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </section>
  )
}
