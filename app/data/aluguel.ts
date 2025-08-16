export type Rental = {
  slug: string
  name: string
  location: string
  description: string
  coverSrc: string
  gallery?: string[]
}

export const rentals: Rental[] = [
  {
    slug: 'solymar-ubatuba',
    name: 'SOLYMAR',
    location: 'Ubatuba, SP',
    description: 'Casa pé na areia com vista deslumbrante para o mar. Ambientes amplos e integrados.',
    coverSrc: '/placeholders/property-1.webp',
    gallery: ['/placeholders/property-1.webp', '/placeholders/property-2.webp', '/placeholders/property-3.webp'],
  },
  {
    slug: 'betarras-ubatuba',
    name: 'BETARRAS',
    location: 'Ubatuba, SP',
    description: 'Arquitetura contemporânea integrada à natureza. Conforto, elegância e tranquilidade.',
    coverSrc: '/placeholders/property-2.webp',
    gallery: ['/placeholders/property-2.webp', '/placeholders/property-3.webp', '/placeholders/property-1.webp'],
  },
  {
    slug: 'triplex-sol',
    name: 'TRIPLEX SOL',
    location: 'Ubatuba, SP',
    description: 'Triplex moderno com luz natural e espaços generosos para receber.',
    coverSrc: '/placeholders/property-3.webp',
    gallery: ['/placeholders/property-3.webp', '/placeholders/property-1.webp', '/placeholders/property-2.webp'],
  },
]

