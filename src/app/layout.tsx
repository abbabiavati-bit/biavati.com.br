import './globals.css'
import { sans, serif } from './fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://biavati.com.br'),
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
    url: 'https://biavati.com.br'
  },
  icons: {
    shortcut: '/favicon.svg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`h-full ${sans.variable} ${serif.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="h-full bg-white text-slate-900 antialiased font-sans">
        <header className="border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <img src="/images/biavati/68210a4313a6fdaaadc7192d_Biavati.svg" alt="Biavati" className="h-6 w-auto" />
              <span>Biavati Imóveis</span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#imoveis" className="hover:text-primary-600">Imóveis</a>
              <a href="#servicos" className="hover:text-primary-600">Serviços</a>
              <a href="#contato" className="hover:text-primary-600">Contato</a>
              <a href="/atami" className="hover:text-primary-600">Atami & Solécia</a>
            </nav>
            <a
              href="https://wa.me/5541999999999"
              className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-white text-sm font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              Fale conosco
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Biavati Imóveis. Todos os direitos reservados.</p>
            <p>
              Atendemos Paraná: Curitiba, Londrina, Maringá e região.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
