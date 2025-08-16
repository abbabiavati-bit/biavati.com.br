export type HeroMedia =
  | { kind: 'mp4'; url: string; poster?: string }
  | { kind: 'youtube'; id: string }
  | { kind: 'vimeo'; id: string }
  | { kind: 'iframe'; url: string }

function extractYouTubeId(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtu.be')) {
      return u.pathname.slice(1) || null
    }
    if (u.hostname.includes('youtube.com')) {
      if (u.pathname.startsWith('/embed/')) return u.pathname.split('/').pop() || null
      const v = u.searchParams.get('v')
      if (v) return v
    }
  } catch {}
  return null
}

function extractVimeoId(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname.includes('vimeo.com')) {
      const parts = u.pathname.split('/').filter(Boolean)
      const last = parts.pop()
      if (last && /^\d+$/.test(last)) return last
    }
  } catch {}
  return null
}

export function getHeroMedia(): HeroMedia | null {
  const env = (import.meta as any).env || {}
  const raw = (env.VITE_HERO_MEDIA_URL || env.NEXT_PUBLIC_HERO_MEDIA_URL || '').toString().trim()
  const poster = (env.VITE_HERO_VIDEO_POSTER || env.NEXT_PUBLIC_HERO_VIDEO_POSTER || '').toString().trim()
  if (!raw) return null

  // Detect providers
  const yt = extractYouTubeId(raw)
  if (yt) return { kind: 'youtube', id: yt }
  const vm = extractVimeoId(raw)
  if (vm) return { kind: 'vimeo', id: vm }

  // Fallback to mp4 if it looks like a file
  if (/\.mp4(\?.*)?$/i.test(raw)) return { kind: 'mp4', url: raw, poster }
  // If unknown, treat as generic iframe embeddable URL
  return { kind: 'iframe', url: raw }
}
