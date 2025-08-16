export type AluguelItem = {
  slug: string
  nome: string
  endereco: string
  descricao: string
  capa: string
  pessoas: number
  suites: number
  camas: number
  banheiros: number
  vagas: number
  distanciaMar: string
  facilidades: string[]
}

export const alugueis: AluguelItem[] = [
  {
    slug: 'balneario-atami-1',
    nome: 'Balneário Atami',
    endereco: 'Av. Brasil, 1011',
    descricao: 'Casa pé na areia com piscina privativa e área gourmet equipada. Ideal para famílias grandes.',
    capa: '/placeholders/atami-1.webp',
    pessoas: 10,
    suites: 4,
    camas: 8,
    banheiros: 5,
    vagas: 3,
    distanciaMar: 'Frente ao mar',
    facilidades: ['Piscina', 'Churrasqueira', 'Wi-Fi', 'Ar Condicionado', 'Pet Friendly']
  },
  {
    slug: 'balneario-atami-2',
    nome: 'Balneário Atami 2',
    endereco: 'Av. Brasil, 1050',
    descricao: 'Casa com varanda ampla e integração com o jardim.',
    capa: '/placeholders/atami-2.webp',
    pessoas: 8,
    suites: 3,
    camas: 6,
    banheiros: 4,
    vagas: 2,
    distanciaMar: '150 m',
    facilidades: ['Piscina', 'Churrasqueira', 'Ar Condicionado']
  },
  {
    slug: 'balneario-atami-3',
    nome: 'Casa Jardim Atami',
    endereco: 'Rua das Andorinhas, 88',
    descricao: 'Sobrado cercado de verde, com piscina e espaço gourmet ao ar livre.',
    capa: '/placeholders/atami-3.webp',
    pessoas: 9,
    suites: 3,
    camas: 7,
    banheiros: 3,
    vagas: 3,
    distanciaMar: '250 m',
    facilidades: ['Piscina', 'Churrasqueira', 'Jardim']
  },
  {
    slug: 'balneario-atami-4',
    nome: 'Atami Luxo',
    endereco: 'Rua do Mar, 12',
    descricao: 'Casa de alto padrão com vista panorâmica e sauna privativa.',
    capa: '/placeholders/atami-4.webp',
    pessoas: 12,
    suites: 5,
    camas: 10,
    banheiros: 6,
    vagas: 4,
    distanciaMar: 'Frente ao mar',
    facilidades: ['Piscina', 'Sauna', 'Ar Condicionado', 'Wi-Fi']
  },
  {
    slug: 'solemar-residencia-1',
    nome: 'Residência Solemar',
    endereco: 'Rua das Palmeiras, 220',
    descricao: 'Sobrado moderno com rooftop vista mar e espaço gourmet integrado.',
    capa: '/placeholders/solemar-1.webp',
    pessoas: 12,
    suites: 5,
    camas: 10,
    banheiros: 6,
    vagas: 4,
    distanciaMar: '100 m',
    facilidades: ['Rooftop', 'Jacuzzi', 'Wi-Fi', 'Ar Condicionado']
  },
  {
    slug: 'solemar-residencia-2',
    nome: 'Casa Solemar Charmosa',
    endereco: 'Rua do Sol, 85',
    descricao: 'Casa charmosa com piscina aquecida e espaço kids.',
    capa: '/placeholders/solemar-2.webp',
    pessoas: 7,
    suites: 2,
    camas: 5,
    banheiros: 3,
    vagas: 2,
    distanciaMar: '200 m',
    facilidades: ['Piscina Aquecida', 'Espaço Kids', 'Wi-Fi', 'Churrasqueira']
  },
  {
    slug: 'solemar-residencia-3',
    nome: 'Villa Solemar',
    endereco: 'Av. Oceano, 177',
    descricao: 'Casa ampla com jardim privativo e piscina com borda infinita.',
    capa: '/placeholders/solemar-3.webp',
    pessoas: 15,
    suites: 6,
    camas: 12,
    banheiros: 7,
    vagas: 5,
    distanciaMar: '80 m',
    facilidades: ['Piscina', 'Jardim', 'Espaço Gourmet']
  },
  {
    slug: 'solemar-residencia-4',
    nome: 'Refúgio Solemar',
    endereco: 'Rua do Horizonte, 34',
    descricao: 'Casa minimalista e aconchegante, cercada de natureza.',
    capa: '/placeholders/solemar-4.webp',
    pessoas: 6,
    suites: 2,
    camas: 4,
    banheiros: 2,
    vagas: 2,
    distanciaMar: '300 m',
    facilidades: ['Wi-Fi', 'Ar Condicionado', 'Pet Friendly']
  },
  {
    slug: 'ipanema-vila-1',
    nome: 'Vila Ipanema',
    endereco: 'Av. Atlântica, 450',
    descricao: 'Casa ampla com jardim tropical e piscina em frente ao mar.',
    capa: '/placeholders/ipanema-1.webp',
    pessoas: 14,
    suites: 6,
    camas: 12,
    banheiros: 7,
    vagas: 5,
    distanciaMar: 'Frente ao mar',
    facilidades: ['Piscina', 'Jardim', 'Ar Condicionado', 'Wi-Fi']
  },
  {
    slug: 'ipanema-apto-1',
    nome: 'Apartamento Ipanema',
    endereco: 'Rua das Gaivotas, 33',
    descricao: 'Apartamento aconchegante com sacada vista mar e duas vagas de garagem.',
    capa: '/placeholders/ipanema-2.webp',
    pessoas: 5,
    suites: 1,
    camas: 3,
    banheiros: 2,
    vagas: 2,
    distanciaMar: '50 m',
    facilidades: ['Sacada Vista Mar', 'Wi-Fi', 'Ar Condicionado']
  },
  {
    slug: 'ipanema-apto-2',
    nome: 'Flat Ipanema',
    endereco: 'Rua das Conchas, 12',
    descricao: 'Flat moderno com cozinha integrada e varanda gourmet.',
    capa: '/placeholders/ipanema-3.webp',
    pessoas: 4,
    suites: 1,
    camas: 2,
    banheiros: 1,
    vagas: 1,
    distanciaMar: '100 m',
    facilidades: ['Varanda Gourmet', 'Wi-Fi', 'Ar Condicionado']
  },
  {
    slug: 'ipanema-casa-3',
    nome: 'Casa Tropical Ipanema',
    endereco: 'Rua do Mar Azul, 98',
    descricao: 'Casa cercada de coqueiros com piscina e deck de madeira.',
    capa: '/placeholders/ipanema-4.webp',
    pessoas: 11,
    suites: 4,
    camas: 9,
    banheiros: 4,
    vagas: 3,
    distanciaMar: '200 m',
    facilidades: ['Piscina', 'Deck', 'Churrasqueira', 'Wi-Fi']
  },
  {
    slug: 'pontal-do-parana-1',
    nome: 'Casa Pontal do Paraná',
    endereco: 'Rua Central, 401',
    descricao: 'Casa térrea espaçosa com piscina e churrasqueira coberta.',
    capa: '/placeholders/pontal-1.webp',
    pessoas: 9,
    suites: 3,
    camas: 7,
    banheiros: 3,
    vagas: 3,
    distanciaMar: '300 m',
    facilidades: ['Piscina', 'Churrasqueira', 'Wi-Fi']
  },
  {
    slug: 'pontal-do-parana-2',
    nome: 'Sítio Pontal',
    endereco: 'Estrada da Praia, km 12',
    descricao: 'Sítio exclusivo próximo ao mar, com campo de futebol e área verde ampla.',
    capa: '/placeholders/pontal-2.webp',
    pessoas: 20,
    suites: 7,
    camas: 15,
    banheiros: 8,
    vagas: 6,
    distanciaMar: '500 m',
    facilidades: ['Piscina', 'Campo de Futebol', 'Espaço Gourmet', 'Pet Friendly']
  },
  {
    slug: 'guaratuba-mansao-1',
    nome: 'Mansão Guaratuba',
    endereco: 'Av. Beira Mar, 990',
    descricao: 'Mansão exclusiva com 3 andares, elevador, piscina e cinema privativo.',
    capa: '/placeholders/guaratuba-1.webp',
    pessoas: 18,
    suites: 8,
    camas: 14,
    banheiros: 9,
    vagas: 6,
    distanciaMar: 'Frente ao mar',
    facilidades: ['Piscina', 'Cinema Privativo', 'Elevador', 'Wi-Fi', 'Ar Condicionado']
  },
  {
    slug: 'guaratuba-casa-2',
    nome: 'Casa Guaratuba Praia',
    endereco: 'Rua das Dunas, 45',
    descricao: 'Casa térrea com varanda ampla e churrasqueira gourmet.',
    capa: '/placeholders/guaratuba-2.webp',
    pessoas: 8,
    suites: 3,
    camas: 6,
    banheiros: 3,
    vagas: 3,
    distanciaMar: '150 m',
    facilidades: ['Churrasqueira', 'Varanda', 'Wi-Fi']
  }
]
