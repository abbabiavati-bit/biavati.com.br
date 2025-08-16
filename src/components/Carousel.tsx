// Vite/React client component
import { useRef } from 'react'
import { getWhatsAppLink } from '@/lib/links'

type Item = { img: string; title: string; loc?: string; href?: string; ref?: string }

export default function Carousel({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const scrollBy = (dx: number) => ref.current?.scrollBy({ left: dx, behavior: 'smooth' })

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
      >
        {items.map((p) => (
          <article key={p.title} className="min-w-[280px] snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{p.title}</h3>
              {p.loc && <p className="mt-1 text-sm text-slate-600">{p.loc}</p>}
              <div className="mt-3">
                <a
                  href={
                    p.href ?? getWhatsAppLink({
                      message: `Olá, sou [Seu Nome]. Vi o imóvel '${p.title}${p.loc ? ' - ' + p.loc : ''}${p.ref ? ' (ref: ' + p.ref + ')' : ''}' no site e gostaria de mais detalhes (metragem, valor, condições e fotos). É possível agendar uma visita?`
                    })
                  }
                  className="text-sm font-medium text-accent-700 hover:text-accent-800"
                >
                  Solicitar informações
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
        <button onClick={() => scrollBy(-320)} className="pointer-events-auto hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow ring-1 ring-black/5 hover:bg-white" aria-label="Anterior">
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true"><path d="M12 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <button onClick={() => scrollBy(320)} className="pointer-events-auto hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow ring-1 ring-black/5 hover:bg-white" aria-label="Próximo">
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true"><path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  )
}
