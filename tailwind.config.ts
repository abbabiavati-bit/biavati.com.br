import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#b9dbff',
          300: '#8cc4ff',
          400: '#55a5ff',
          500: '#2b86ff',
          600: '#1169f2',
          700: '#0e53c3',
          800: '#0e4298',
          900: '#0d387c'
        },
        accent: {
          50: '#fbf7ee',
          100: '#f6ebd1',
          200: '#ecd8a3',
          300: '#dfc172',
          400: '#d3ad53',
          500: '#c89b3b',
          600: '#b0822c',
          700: '#916623',
          800: '#73501f',
          900: '#5d411c'
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
