import './globals.css'
import { sans, serif } from './fonts'
import type { Metadata } from 'next'
import { getWhatsAppLink } from '@/lib/links'
import { getHeroMedia } from '@/lib/media'
import SiteHeader from '@/components/SiteHeader'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.biavati.com.br'),
  title: {
    default: 'Biavati Imóveis — Paraná, Brasil',
    template: '%s | Biavati Imóveis'
  },
  description: 'Marketing e captação de clientes para imóveis residenciais e comerciais no Paraná, Brasil.',
  openGraph: {
    title: 'Biavati Imóveis — Paraná, Brasil',
    description: 'Site institucional para divulgação imobiliária no Paraná.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.biavati.com.br'
  },
  icons: {
    shortcut: '/favicon.svg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const whats = getWhatsAppLink()
  const hero = getHeroMedia()
  return (
    <html lang="pt-BR" className={`h-full ${sans.variable} ${serif.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="h-full bg-white text-slate-900 antialiased font-sans">
        <SiteHeader />
        <main className="pt-[60px]">{children}</main>
        <footer className="mt-16 border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Biavati Imóveis. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <p>Atendemos Paraná: Curitiba, Londrina, Maringá e região.</p>
              {hero && hero.kind === 'iframe' && (
                <a
                  href={hero.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap font-medium text-primary-700 hover:text-primary-800 link-underline"
                >
                  Assistir vídeo no site oficial →
                </a>
              )}
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
