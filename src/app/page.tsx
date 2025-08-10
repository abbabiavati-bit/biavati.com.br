export default function HomePage() {
  return (
    <div>
      {/* Luxury-inspired Hero */}
      <section className="relative h-[80vh] min-h-[560px] w-full">
        <img
          src="/images/biavati/68347948ad3470d7bcedca5e_DJI_0508-1536x864.webp"
          alt="Litoral do Paraná"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="max-w-2xl text-white">
            <p className="text-sm/6 uppercase tracking-widest text-white/80">Paraná, Brasil</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Imóveis selecionados à beira-mar e na cidade
            </h1>
            <p className="mt-4 text-white/85">
              Assessoria personalizada para compra e venda de imóveis de alto padrão no litoral e nas principais cidades do Paraná.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#imoveis" className="inline-flex items-center justify-center rounded-md bg-accent-500 px-5 py-3 text-white font-medium hover:bg-accent-600">
                Explorar imóveis
              </a>
              <a href="https://wa.me/5541999999999" className="inline-flex items-center justify-center rounded-md border border-white/40 px-5 py-3 text-white hover:bg-white/10">
                Fale com um advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust bar */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
          {[
            ['Residenciais', 'Casas e apartamentos'],
            ['Comerciais', 'Salas e lojas'],
            ['Cidades', 'Curitiba, Londrina, Maringá'],
            ['Exclusivos', 'Captação sob medida'],
          ].map(([k, v]) => (
            <div key={k} className="text-center sm:text-left">
              <div className="text-base font-medium">{k}</div>
              <div className="text-sm text-slate-600">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured properties */}
      <section id="imoveis" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold">Destaques</h2>
            <div className="mt-2 h-0.5 w-16 bg-accent-500" />
            <p className="mt-3 text-slate-700">Uma seleção de oportunidades recentes.</p>
          </div>
          <a href="#contato" className="hidden text-sm font-medium text-primary-700 hover:text-primary-800 sm:inline">Ver todos →</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[ 
            { img: '/images/biavati/683479760428b0607828df06_Praia-de-Pontal-do-Sul-small.webp', title: 'Casa pé na areia', loc: 'Pontal do Sul' },
            { img: '/images/biavati/68347a01af8c56fc54df65a1_litoral-parana.webp', title: 'Apartamento vista mar', loc: 'Litoral do PR' },
            { img: '/images/biavati/68347c6c2c42ca1815e5dc63_foto_edilson_tadeu_giordano_14_vista_praia_de_caioba.jpg', title: 'Terreno exclusivo', loc: 'Caiobá' },
          ].map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.loc}</p>
                <div className="mt-4">
                  <a href="#contato" className="text-sm font-medium text-accent-700 hover:text-accent-800">Detalhes →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <a href="#contato" className="text-sm font-medium text-primary-700 hover:text-primary-800">Ver todos →</a>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="font-serif text-3xl font-semibold">Regiões</h2>
          <div className="mt-2 h-0.5 w-16 bg-accent-500" />
          <p className="mt-3 text-slate-700">Atuação no litoral e nas capitais do estado.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { name: 'Curitiba', img: '/images/atami/DJI_0530-1024x576.jpg' },
              { name: 'Litoral', img: '/images/biavati/68347d27d35310db39b20f8a_ilha-do-mel-praia-encantadas.webp' },
              { name: 'Maringá & Londrina', img: '/images/atami/IMG-20240111-WA0098-1024x768.jpg' },
            ].map((a) => (
              <div key={a.name} className="group relative overflow-hidden rounded-xl">
                <img src={a.img} alt={a.name} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-slate-900/30" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <div className="text-lg font-medium">{a.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service */}
      <section id="servicos" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold">Atendimento sob medida</h2>
            <div className="mt-2 h-0.5 w-16 bg-accent-500" />
            <p className="mt-4 text-slate-700">
              Do primeiro contato à assinatura, nossa equipe conduz cada etapa com discrição, precisão e foco no resultado. 
              Indicamos profissionais de confiança para reformas, decoração e administração patrimonial.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Avaliação e posicionamento</li>
              <li>• Produção visual e divulgação</li>
              <li>• Negociação e due diligence</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <img src="/images/biavati/68347a01af8c56fc54df65a1_litoral-parana.webp" alt="Serviço Biavati" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contato" className="relative mx-auto max-w-6xl px-6 pb-16 sm:pb-24">
        <div className="overflow-hidden rounded-2xl bg-slate-900 text-white">
          <div className="grid gap-8 p-8 sm:grid-cols-2 sm:p-10">
            <div>
              <h2 className="font-serif text-2xl font-semibold">Converse com um advisor</h2>
              <p className="mt-2 text-white/80">Receba uma seleção exclusiva de imóveis alinhados ao seu perfil.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/5541999999999" className="inline-flex w-full items-center justify-center rounded-md bg-accent-500 px-5 py-3 text-white font-medium hover:bg-accent-600 sm:w-auto">WhatsApp</a>
              <a href="mailto:contato@biavati.com.br" className="inline-flex w-full items-center justify-center rounded-md border border-white/40 px-5 py-3 font-medium hover:bg-white/10 sm:w-auto">E-mail</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
