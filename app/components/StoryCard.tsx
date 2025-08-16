import React from 'react'
import Link from 'next/link'

export default function StoryCard({
  href,
  coverSrc,
  title,
  excerpt,
  kicker,
}: {
  href: string
  coverSrc: string
  title: string
  excerpt: string
  kicker?: string
}) {
  return (
    <article className="rounded-xl border border-[var(--brand-border)] bg-[var(--brand-bg)] shadow-sm overflow-hidden">
      <Link
        href={href}
        className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]"
        aria-label={title}
      >
        <div className="overflow-hidden">
          <img
            src={coverSrc}
            alt={title}
            className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-4">
          {kicker && (
            <p
              className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--fg-muted)]"
              style={{ fontFamily: 'var(--brand-font-sans)' as string }}
            >
              {kicker}
            </p>
          )}
          <h3 className="mt-1 text-lg font-medium" style={{ fontFamily: 'var(--brand-font)' as string }}>
            {title}
          </h3>
          <p
            className="mt-2 text-sm text-[color:var(--fg)]/85"
            style={{ fontFamily: 'var(--brand-font-sans)' as string }}
          >
            {excerpt}
          </p>
        </div>
      </Link>
    </article>
  )
}

