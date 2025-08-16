import React from 'react'
import { posts } from '@/data/posts'
import StoryCard from '@/components/StoryCard'

export default function BlogIndex() {
  return (
    <section aria-label="Blog" className="bg-[var(--brand-bg-page)] py-16 md:py-24 text-[var(--brand-fg)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold" style={{ fontFamily: 'var(--brand-font)' as string }}>Blog</h1>
          <p className="mt-3" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>Notas sobre mercado, arquitetura e litoral do Paraná.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <StoryCard key={p.slug} href={`/blog/${p.slug}`} coverSrc={p.coverSrc} title={p.title} excerpt={p.excerpt} />
          ))}
        </div>
      </div>
    </section>
  )
}

