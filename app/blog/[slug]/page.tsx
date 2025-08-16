import React from 'react'
import { posts } from '../../data/posts'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return <div className="mx-auto max-w-3xl px-6 py-16">Post não encontrado.</div>
  return (
    <article className="bg-[var(--brand-bg-page)] text-[var(--brand-fg)]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold" style={{ fontFamily: 'var(--brand-font)' as string }}>{post.title}</h1>
        <p className="mt-2 text-[color:var(--fg)]/80" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>{post.subtitle}</p>
        <img src={post.coverSrc} alt={post.title} className="mt-8 w-full rounded-xl border border-[var(--brand-border)]" />
        <div className="prose prose-slate mt-8 max-w-none" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  )
}

