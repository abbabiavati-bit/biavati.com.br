export const metadata = { title: 'Atami — Empresa' }

export default function EmpresaPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold">Empresa</h1>
      <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <iframe src="/atami/empresa.html" className="h-full w-full" title="Atami Empresa" />
      </div>
    </div>
  )
}

