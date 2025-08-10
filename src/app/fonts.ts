import { Inter, Cormorant_Garamond } from 'next/font/google'

export const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
export const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', display: 'swap', weight: ['400','500','600','700'] })
