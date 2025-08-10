export const metadata = {
  title: 'Atami & Solécia',
  description: 'Conteúdo importado do site Atami/Solécia para referência.'
}

export default function AtamiPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold">Atami & Solécia</h1>
      <p className="mt-2 text-slate-700">Conteúdo incorporado do site original.</p>
      <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <iframe src="/atami/index.html" className="h-full w-full" title="Atami Home" />
      </div>
    </div>
  )
}

