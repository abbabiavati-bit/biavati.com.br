// Vite/React client component
import { useEffect, useState } from 'react'
import { getWhatsAppLink } from '@/lib/links'

const leftLinks = [
  { href: '#imoveis', label: 'Imóveis' },
  { href: '#journal', label: 'Journal' },
]

const rightLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

const mobileLinks = [
  ...leftLinks,
  ...rightLinks,
  { href: '/atami/index.html', label: 'Atami & Solécia' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const whats = getWhatsAppLink()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        `fixed inset-x-0 top-0 z-40 border-b transition-colors ${
          scrolled
            ? 'border-slate-200/70 bg-white'
            : 'border-transparent bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50'
        }`
      }
    >
      <div className="mx-auto grid h-[60px] max-w-6xl grid-cols-3 items-center px-6">
        {/* Left group */}
        <nav className="hidden sm:flex items-center gap-6 lg:gap-8 text-[10px] uppercase tracking-[0.14em] text-slate-700 sm:text-xs sm:tracking-[0.18em]">
          {leftLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-slate-900 link-underline">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Center logo */}
        <div className="flex items-center justify-center">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <img src="/images/biavati/68210a4313a6fdaaadc7192d_Biavati.svg" alt="Biavati" className="h-6 w-auto" />
            <span className="hidden sm:inline">Biavati Imóveis</span>
          </a>
        </div>

        {/* Right group + mobile trigger */}
        <div className="ml-auto flex items-center justify-end gap-3">
          <nav className="hidden sm:flex items-center gap-6 lg:gap-8 text-[10px] uppercase tracking-[0.14em] text-slate-700 sm:text-xs sm:tracking-[0.18em]">
            {rightLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-slate-900 link-underline">
                {l.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-slate-300 hover:bg-slate-50"
            aria-label="Abrir menu"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white text-slate-900" role="dialog" aria-modal="true">
          <div className="mx-auto flex h-full max-w-6xl flex-col px-6 py-5">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-2 font-semibold tracking-tight" onClick={() => setOpen(false)}>
                <img src="/images/biavati/68210a4313a6fdaaadc7192d_Biavati.svg" alt="Biavati" className="h-6 w-auto" />
                <span>Biavati Imóveis</span>
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-slate-300 hover:bg-slate-50"
                aria-label="Fechar menu"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
                  <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="mt-10 flex-1">
              <ul className="space-y-6">
                {mobileLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block font-serif text-2xl tracking-tight link-underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4">
              <a
                href={whats}
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white text-sm font-medium uppercase tracking-wide hover:bg-black"
              >
                WhatsApp
              </a>
              <a href="mailto:contato@biavati.com.br" className="text-sm hover:underline underline-offset-4">contato@biavati.com.br</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
