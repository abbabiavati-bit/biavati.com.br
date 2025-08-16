import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
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
          50: '#FBF6EC',
          100: '#F6EAD1',
          200: '#EAD29B',
          300: '#DDBA6F',
          400: '#CFA24F',
          500: '#B88C39',
          600: '#9E7731',
          700: '#7F5F28',
          800: '#644B20',
          900: '#513C1A'
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
