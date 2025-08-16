import { getWhatsAppLink } from '@/lib/links'
import { getHeroMedia } from '@/lib/media'
import HeroMedia from '@/components/HeroMedia'
import Carousel from '@/components/Carousel'

export default function HomePage() {
  const whats = getWhatsAppLink()
  const hero = getHeroMedia()
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[78vh] min-h-[560px] w-full">
        <img
          src="/images/biavati/68347948ad3470d7bcedca5e_DJI_0508-1536x864.webp"
          alt="Litoral do Paraná"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        {hero && <HeroMedia media={hero} />}
        <div className="absolute inset-0 bg-slate-900/45" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="max-w-2xl text-white">
            <p className="text-sm/6 uppercase tracking-widest text-white/80">Paraná, Brasil</p>
            <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight sm:text-6xl">Imóveis selecionados</h1>
            <p className="mt-2 font-serif text-2xl/8 sm:text-3xl/9 text-white/90">À beira-mar e nas cidades do Paraná</p>
            <p className="mt-4 text-white/85">
              Assessoria personalizada para compra e venda de imóveis de alto padrão no litoral e nas principais cidades do Paraná.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#imoveis" className="inline-flex items-center justify-center rounded-md bg-accent-500 px-5 py-3 text-white font-medium hover:bg-accent-600">
                Explorar imóveis
              </a>
              <a href={whats} className="inline-flex items-center justify-center rounded-md border border-white/40 px-5 py-3 text-white hover:bg-white/10">
                Fale com um advisor
              </a>
            </div>
            {hero && hero.kind === 'iframe' && (
              <div className="mt-3">
                <a
                  href={hero.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/80 hover:text-white link-underline"
                >
                  Assistir no site oficial →
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section id="imoveis" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold">Destaques</h2>
            <div className="mt-2 h-0.5 w-16 bg-accent-500" />
            <p className="mt-3 text-slate-700">Uma seleção de oportunidades recentes.</p>
          </div>
          <a href="#contato" className="hidden text-sm font-medium text-primary-700 hover:text-primary-800 link-underline sm:inline">Ver todos →</a>
        </div>
        <div className="mt-8 sm:hidden">
          <Carousel
            items={[
              { img: '/images/biavati/683479760428b0607828df06_Praia-de-Pontal-do-Sul-small.webp', title: 'Casa pé na areia', loc: 'Pontal do Sul', ref: 'BIA-001' },
              { img: '/images/biavati/68347a01af8c56fc54df65a1_litoral-parana.webp', title: 'Apartamento vista mar', loc: 'Litoral do PR', ref: 'BIA-002' },
              { img: '/images/biavati/68347c6c2c42ca1815e5dc63_foto_edilson_tadeu_giordano_14_vista_praia_de_caioba.jpg', title: 'Terreno exclusivo', loc: 'Caiobá', ref: 'BIA-003' },
            ]}
          />
        </div>
        <div className="mt-8 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {[ 
            { img: '/images/biavati/683479760428b0607828df06_Praia-de-Pontal-do-Sul-small.webp', title: 'Casa pé na areia', loc: 'Pontal do Sul', ref: 'BIA-001' },
            { img: '/images/biavati/68347a01af8c56fc54df65a1_litoral-parana.webp', title: 'Apartamento vista mar', loc: 'Litoral do PR', ref: 'BIA-002' },
            { img: '/images/biavati/68347c6c2c42ca1815e5dc63_foto_edilson_tadeu_giordano_14_vista_praia_de_caioba.jpg', title: 'Terreno exclusivo', loc: 'Caiobá', ref: 'BIA-003' },
          ].map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl">
              <img src={p.img} alt={p.title} className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1 text-sm/6 text-white/85">{p.loc}{p.ref ? ` · ${p.ref}` : ''}</p>
                <div className="mt-3">
                  <a
                    href={getWhatsAppLink({
                      message: `Olá, sou [Seu Nome]. Vi o imóvel '${p.title}${p.loc ? ' - ' + p.loc : ''}${p.ref ? ' (ref: ' + p.ref + ')' : ''}' no site e gostaria de mais detalhes (metragem, valor, condições e fotos). É possível agendar uma visita?`
                    })}
                    className="inline-block rounded-md bg-white/95 px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-900 hover:bg-white"
                  >
                    Solicitar informações
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <a href="#contato" className="text-sm font-medium text-primary-700 hover:text-primary-800 link-underline">Ver todos →</a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-serif text-3xl font-semibold">Sobre</h2>
            <div className="mt-2 h-0.5 w-16 bg-accent-500" />
            <p className="mt-4 text-slate-700">
              Biavati Imóveis atua com curadoria e assessoria completa na compra e venda de imóveis
              residenciais e comerciais no litoral e nas principais cidades do Paraná. Nossa abordagem é
              discreta, precisa e orientada a resultado, com foco em apresentação, posicionamento e negociação.
            </p>
            <p className="mt-3 text-slate-700">Indicamos parceiros de confiança para reforma, interiores e administração patrimonial.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <img src="/images/biavati/68347937e1b75eb4da16a95c_ConstrutoraCelana_Litoral_Paranaense_3_-1024x1024.jpg" alt="Sobre a Biavati" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-semibold">Journal</h2>
            <div className="mt-2 h-0.5 w-16 bg-accent-500" />
            <p className="mt-3 text-slate-700">Notas sobre mercado, arquitetura e litoral do Paraná.</p>
          </div>
          <div className="ml-auto hidden sm:block">
            <a href="#contato" className="text-sm font-medium text-primary-700 hover:text-primary-800 link-underline">Ver todas as notas →</a>
          </div>
        </div>
        <div className="mt-8 space-y-8">
          {[ 
            { img: '/images/biavati/68347d27d35310db39b20f8a_ilha-do-mel-praia-encantadas.webp', title: 'Arquitetura e mar: casas com vista', blurb: 'Como valorizar a relação entre interior e exterior nas residências litorâneas.' },
            { img: '/images/atami/DJI_0530-1024x576.jpg', title: 'Mercado no litoral do PR', blurb: 'Movimentos recentes em Caiobá, Pontal do Sul e Ilha do Mel.' },
            { img: '/images/biavati/6834711b6fef776e21862037_engorda1-1.jpg', title: 'Curadoria de oportunidades', blurb: 'Processos e critérios para selecionar imóveis com liquidez e potencial.' },
          ].map((p) => (
            <article key={p.title} className="grid gap-4 sm:grid-cols-3 sm:items-center">
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <img src={p.img} alt={p.title} className="h-44 w-full object-cover sm:h-36" />
              </div>
              <div className="sm:col-span-2">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-slate-700">{p.blurb}</p>
                <a href="#contato" className="mt-3 inline-block text-sm font-medium text-primary-700 hover:text-primary-800 link-underline">Ler mais →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="relative mx-auto max-w-6xl px-6 pb-16 sm:pb-24">
        <div className="overflow-hidden rounded-2xl bg-slate-900 text-white">
          <div className="grid gap-8 p-8 sm:grid-cols-2 sm:p-10">
            <div>
              <h2 className="font-serif text-2xl font-semibold">Converse com um advisor</h2>
              <p className="mt-2 text-white/80">Receba uma seleção exclusiva de imóveis alinhados ao seu perfil.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href={whats} className="inline-flex w-full items-center justify-center rounded-md bg-accent-500 px-5 py-3 text-white font-medium hover:bg-accent-600 sm:w-auto">WhatsApp</a>
              <a href="mailto:contato@biavati.com.br" className="inline-flex w-full items-center justify-center rounded-md border border-white/40 px-5 py-3 font-medium hover:bg-white/10 sm:w-auto">E-mail</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

