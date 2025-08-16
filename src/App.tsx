import SiteHeader from '@/components/SiteHeader'
import HomePage from '@/pages/HomePage'

export default function App() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-[60px]">
        <HomePage />
      </main>
      <footer className="mt-16 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Biavati Imóveis. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <p>Atendemos Paraná: Curitiba, Londrina, Maringá e região.</p>
            <a
              href="/atami/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap font-medium text-primary-700 hover:text-primary-800 link-underline"
            >
              Atami & Solécia →
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
