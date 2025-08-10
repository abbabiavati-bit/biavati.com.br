import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f7f8',
          100: '#ebeef2',
          200: '#d7dde5',
          300: '#b8c0cd',
          400: '#8e98a9',
          500: '#4b5563',
          600: '#1f2937',
          700: '#111827',
          800: '#0b1220',
          900: '#050a16'
        },
        accent: {
          50: '#faf7f1',
          100: '#f2eadb',
          200: '#e4d6b7',
          300: '#d3bf93',
          400: '#c4aa79',
          500: '#b9965f',
          600: '#a37e4b',
          700: '#86653c',
          800: '#6a5132',
          900: '#57432b'
        }
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif'
        ],
        serif: [
          'var(--font-serif)',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif'
        ]
      }
    },
  },
  plugins: [],
}

export default config
