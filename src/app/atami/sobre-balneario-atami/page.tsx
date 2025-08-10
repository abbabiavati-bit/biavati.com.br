export const metadata = { title: 'Atami — Sobre o Balneário' }

export default function SobreBalnearioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold">Sobre o Balneário Atami</h1>
      <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <iframe src="/atami/sobre-balneario-atami.html" className="h-full w-full" title="Sobre Balneário Atami" />
      </div>
    </div>
  )
}

