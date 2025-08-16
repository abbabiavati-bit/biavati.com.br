import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'

const buildDir = 'build'
const routes = [
  '/',
  '/blog',
  '/blog/arquitetura-e-mar-casas-com-vista',
  '/blog/mercado-no-litoral-do-pr',
  '/blog/curadoria-de-oportunidades',
  '/compra',
  '/venda',
  '/aluguel',
  '/aluguel/balneario-atami-1',
  '/aluguel/balneario-atami-2',
  '/aluguel/balneario-atami-3',
  '/aluguel/balneario-atami-4',
  '/aluguel/solemar-residencia-1',
  '/aluguel/solemar-residencia-2',
  '/aluguel/solemar-residencia-3',
  '/aluguel/solemar-residencia-4',
  '/aluguel/ipanema-vila-1',
  '/aluguel/ipanema-apto-1',
  '/aluguel/ipanema-apto-2',
  '/aluguel/ipanema-casa-3',
  '/aluguel/pontal-do-parana-1',
  '/aluguel/pontal-do-parana-2',
  '/aluguel/guaratuba-mansao-1',
  '/aluguel/guaratuba-casa-2',
  '/locais/solymar',
  '/locais/betarras',
  '/locais/atami',
  '/locais/matinhos',
  '/locais/caioba',
]

const html = await readFile(join(buildDir, 'index.html'), 'utf8')

// Helpful default for static hosts (fallback to SPA)
await writeFile(join(buildDir, '404.html'), html, 'utf8')

for (const route of routes) {
  const destDir = join(buildDir, route)
  await mkdir(destDir, { recursive: true })
  await writeFile(join(destDir, 'index.html'), html, 'utf8')
  console.log('Wrote', join(destDir, 'index.html'))
}
