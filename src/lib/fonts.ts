// Lightweight brand font loader using env variables
// Configure in .env.local:
// - VITE_BRAND_FONT_CSS_URL: a CSS URL (e.g., Adobe Fonts kit or Google Fonts)
// - VITE_BRAND_FONT_FAMILY: the font-family name to use (e.g., "Canela, serif")

export function loadBrandFont() {
  const env: Record<string, string | undefined> = (import.meta as any).env || {}
  const href = (env.VITE_BRAND_FONT_CSS_URL || env.NEXT_PUBLIC_BRAND_FONT_CSS_URL) as string | undefined
  const family = (env.VITE_BRAND_FONT_FAMILY || env.NEXT_PUBLIC_BRAND_FONT_FAMILY) as string | undefined

  if (!href && !family) return

  const applyFamily = () => {
    if (family) {
      document.documentElement.style.setProperty('--brand-font', family)
      document.documentElement.setAttribute('data-brand-font', family)
    }
  }

  if (href) {
    // Optional: preconnect for performance
    try {
      const url = new URL(href)
      const pre = document.createElement('link')
      pre.rel = 'preconnect'
      pre.href = `${url.protocol}//${url.host}`
      pre.crossOrigin = ''
      document.head.appendChild(pre)
    } catch {}

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.onload = applyFamily
    link.onerror = applyFamily
    document.head.appendChild(link)
  } else {
    applyFamily()
  }
}

