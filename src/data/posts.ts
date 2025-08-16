export type Post = {
  slug: string
  title: string
  subtitle: string
  excerpt: string
  date: string
  coverSrc: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'arquitetura-e-mar-casas-com-vista',
    title: 'Arquitetura e mar: casas com vista',
    subtitle: 'Como valorizar a relação entre interior e exterior nas residências litorâneas.',
    excerpt:
      'Estratégias de implantação, aberturas e materiais para integrar sala, varanda e horizonte — sem perder conforto e privacidade.',
    date: '2025-08-01',
    coverSrc: '/images/blog/arquitetura-mar.jpg',
    content:
      'Conteúdo sobre arquitetura litorânea: implantação no terreno, orientação solar, proteção aos ventos, aberturas generosas e materiais adequados ao ambiente salino para ampliar a relação entre interior e exterior com conforto.',
  },
  {
    slug: 'mercado-no-litoral-do-pr',
    title: 'Mercado no litoral do PR',
    subtitle: 'Movimentos recentes em Caiobá, Pontal do Sul e Ilha do Mel.',
    excerpt:
      'Liquidez, ticket médio e perfis de demanda em alta na temporada. O que observar ao precificar e negociar.',
    date: '2025-07-20',
    coverSrc: '/images/blog/mercado-litoral-pr.jpg',
    content:
      'Conteúdo sobre mercado imobiliário no litoral do Paraná: sazonalidade, liquidez por tipologia, fatores de precificação e boas práticas de negociação para compradores e vendedores.',
  },
  {
    slug: 'curadoria-de-oportunidades',
    title: 'Curadoria de oportunidades',
    subtitle: 'Processos e critérios para selecionar imóveis com liquidez e potencial.',
    excerpt:
      'Nosso método para identificar imóveis que realmente valem a visita: localização, planta, luz, estrutura e papelada.',
    date: '2025-07-05',
    coverSrc: '/images/blog/curadoria.jpg',
    content:
      'Conteúdo sobre critérios de curadoria: leitura urbana, análise de planta e iluminação, avaliações estruturais e checagem documental para priorizar imóveis com melhor perspectiva de satisfação e valorização.',
  },
]

