import { getWhatsAppLink } from '@/lib/links'
import Carousel from '@/components/Carousel'
import BlogSection from '@/components/BlogSection'
import BuyingWithUsSection from '@/components/BuyingWithUsSection'
import RentingWithUsSection from '@/components/RentingWithUsSection'
import LifestyleSection from '@/components/LifestyleSection'

export default function HomePage() {
  const whats = getWhatsAppLink()
  return (
    <div>
      {/* Hero (video background) */}
      <section aria-label="Hero" className="relative min-h-[80vh] w-full sm:min-h-screen">
        {/* Background video as cover */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Mobile: height-driven sizing to avoid letterboxing */}
          <div className="absolute inset-0 flex sm:hidden items-center justify-center">
            <div className="absolute left-1/2 top-1/2 h-screen w-[177.78vh] -translate-x-1/2 -translate-y-1/2">
              <iframe
                className="h-full w-full pointer-events-none"
                src="https://www.youtube.com/embed/lO47EnS3uF4?autoplay=1&mute=1&loop=1&playlist=lO47EnS3uF4&controls=0&rel=0&modestbranding=1&playsinline=1"
                title="Vídeo de destaque"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          {/* Desktop/tablet: width-driven sizing */}
          <div className="absolute inset-0 hidden sm:flex items-center justify-center">
            <div className="absolute left-1/2 top-1/2 w-screen h-[56.25vw] -translate-x-1/2 -translate-y-1/2">
              <iframe
                className="h-full w-full pointer-events-none"
                src="https://www.youtube.com/embed/lO47EnS3uF4?autoplay=1&mute=1&loop=1&playlist=lO47EnS3uF4&controls=0&rel=0&modestbranding=1&playsinline=1"
                title="Vídeo de destaque"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/30" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent" />
        </div>

        {/* Overlay content centered absolutely */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl px-4 text-white">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/85">Paraná, Brasil</p>
            <h1
              className="mt-3 text-2xl font-bold uppercase leading-[0.95] tracking-[0.08em] sm:text-4xl md:text-6xl"
              style={{ fontFamily: 'var(--brand-font)' as string, textShadow: '0 1px 2px rgba(0,0,0,0.45)' }}
            >
              SEU LUGAR NO PARANÁ
            </h1>
            <p
              className="mt-4 mx-auto max-w-[60rem] text-base text-white/90 sm:text-lg"
              style={{ fontFamily: 'var(--brand-font-sans)' as string }}
            >
              Curadoria de imóveis exclusivos no litoral e nas principais cidades do estado.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row">
              <a
                href="/compra"
                aria-label="Descubra o seu lugar"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium text-white transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                style={{ backgroundColor: 'var(--brand-accent)', fontFamily: 'var(--brand-font-sans)' as string }}
              >
                Descubra o seu lugar →
              </a>
              <a
                href={whats}
                target="_blank"
                rel="noopener"
                aria-label="Fale no WhatsApp"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 underline underline-offset-4 hover:text-white"
                style={{ fontFamily: 'var(--brand-font-sans)' as string }}
              >
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.43 0 .06 5.37.06 12a11.9 11.9 0 001.67 6.12L0 24l6-1.63A11.94 11.94 0 0012.06 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.54-8.52zM12.06 22a9.93 9.93 0 01-5.05-1.39l-.36-.21-3.56.97.95-3.47-.24-.36A10 10 0 1122.06 12 9.99 9.99 0 0112.06 22zm5.47-7.55c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.9 1.22 3.11c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
                Fale no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statement block */}
      <section aria-label="Declaração" className="w-full py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <img src="/images/biavati/68210a4313a6fdaaadc7192d_Biavati.svg" alt="Biavati Imóveis" className="mx-auto h-10 w-auto sm:h-12" />
          <div className="mt-6 sm:mt-8">
            <p className="mx-auto text-xl sm:text-2xl md:text-3xl leading-snug text-slate-800 text-balance font-normal font-sans tracking-normal md:tracking-[0.005em]">
              Liberdade para ser. Tempo em meio à natureza. Espaço para amar. Energia para criar.
              A dança encantadora entre o mar e o céu. Magia atemporal unida à sofisticação do século XXI.
              Um lugar para pertencer. É por isso que escolhemos viver aqui. Talvez seja também a razão para você escolher este lugar.
              Encontre o seu lar conosco.
            </p>
          </div>
        </div>
      </section>

      {/* Buying with us (component) */}
      <div id="compradores">
        <BuyingWithUsSection />
      </div>

      {/* Renting with us (component) */}
      <RentingWithUsSection />

      {/* Lifestyle (Island) */}
      <LifestyleSection />

      


      {/* Sobre Nós / Nossa Equipe (match Our People style) */}
      <section
        id="sobre"
        aria-label="Nossa Equipe"
        className="border-t border-[var(--brand-border)] bg-[#C0954F] py-20 md:py-24 text-white"
      >
        <div className="mx-auto max-w-6xl px-6">
          {/* Intro on gold background */}
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{ fontFamily: 'var(--brand-font)' as string }}
            >
              Sobre Nós
            </h2>
            <div className="mx-auto mt-4 max-w-3xl text-left sm:text-center">
              <p className="text-base sm:text-lg text-white/95" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>
                A Biavati Imóveis atua com curadoria e assessoria completa na compra e venda de imóveis residenciais e comerciais no litoral e nas principais cidades do Paraná. Nossa abordagem é discreta, precisa e orientada a resultados, com foco na apresentação, no posicionamento e na negociação.
              </p>
              <p className="mt-4 text-base sm:text-lg text-white/95" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>
                Mais do que imóveis, conhecemos profundamente a região, sua cultura e seu modo de viver. É aqui que construímos nossas relações e é daqui que vem a nossa força. Compartilhamos esse conhecimento e essa rede de confiança com cada cliente, indicando parceiros de confiança para reforma, interiores e gestão patrimonial.
              </p>
              <p className="mt-4 text-base sm:text-lg text-white/95" style={{ fontFamily: 'var(--brand-font-sans)' as string }}>
                Estamos ao seu lado em cada etapa, com transparência, dedicação e visão estratégica, para que você encontre não apenas uma propriedade, mas o lugar certo para chamar de lar.
              </p>
            </div>
          </div>

          {/* No team grid; section intentionally ends with copy only */}
        </div>
      </section>

      {/* Blog */}
      <BlogSection />

    </div>
  )
}
