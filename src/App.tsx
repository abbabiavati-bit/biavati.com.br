import SiteHeader from '@/components/SiteHeader'
import HomePage from '@/pages/HomePage'
import BlogIndex from '@/pages/BlogIndex'
import BlogPost from '@/pages/BlogPost'
import { useEffect, useState } from 'react'
import { getWhatsAppLink } from '@/lib/links'
import Compra from '@/pages/Compra'
import Venda from '@/pages/Venda'
import Aluguel from '@/pages/Aluguel'

export default function App() {
  const [path, setPath] = useState<string>(typeof window !== 'undefined' ? window.location.pathname : '/')
  const whats = getWhatsAppLink()

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const renderRoute = () => {
    if (path === '/blog') return <BlogIndex />
    if (path.startsWith('/blog/')) {
      const slug = path.replace(/^\/blog\//, '').replace(/\/$/, '')
      return <BlogPost slug={slug} />
    }
    if (path === '/compra') return <Compra />
    if (path === '/venda') return <Venda />
    if (path === '/aluguel') return <Aluguel />
    if (path === '/stories') {
      // simple client-side redirect to /blog
      if (typeof window !== 'undefined') window.history.replaceState({}, '', '/blog');
      return <BlogIndex />
    }
    return <HomePage />
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-[60px]">
        {renderRoute()}
      </main>
      <footer className="mt-16" aria-label="Convite final">
        <div className="w-full bg-ocean">
          <div className="mx-auto max-w-5xl px-4 py-20 text-center text-white">
            <h2 className="text-4xl font-semibold" style={{ fontFamily: 'var(--brand-font)' as string }}>
              Encontre o seu lar
            </h2>
            <p className="mt-3 text-lg text-white/90" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>
              Curadoria de imóveis exclusivos no litoral e nas principais cidades do Paraná.
            </p>
            <div className="mt-8">
              <a
                href={whats}
                target="_blank"
                rel="noopener"
                aria-label="Falar no WhatsApp"
                className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(15,30,75,0.9)]"
                style={{ fontFamily: 'var(--brand-font-sans)' as string }}
              >
                Fale com um especialista
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[var(--brand-bg)]">
          <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Biavati Imóveis. Todos os direitos reservados.</p>
            <p>Paraná · Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
