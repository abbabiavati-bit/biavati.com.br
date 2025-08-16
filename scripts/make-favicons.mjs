import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const root = process.cwd()
const pub = path.join(root, 'public')
const srcSvg = path.join(pub, 'logo.svg')

const sizes = [16, 32, 48]
const outPngs = sizes.map((s) => path.join(pub, `favicon-${s}x${s}.png`))

async function ensureSvgExists() {
  try {
    await fs.access(srcSvg)
  } catch {
    throw new Error(`Source SVG not found at ${srcSvg}`)
  }
}

async function rasterizePngs() {
  await Promise.all(
    sizes.map(async (size, i) => {
      const buf = await sharp(srcSvg, { density: 384 })
        .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .png({ compressionLevel: 9 })
        .toBuffer()
      await fs.writeFile(outPngs[i], buf)
    })
  )
}

async function makeIco() {
  const ico = await pngToIco(outPngs)
  await fs.writeFile(path.join(pub, 'favicon.ico'), ico)
}

async function makeAppleTouch() {
  const apple = await sharp(srcSvg, { density: 384 })
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer()
  await fs.writeFile(path.join(pub, 'apple-touch-icon.png'), apple)
}

async function main() {
  await ensureSvgExists()
  await rasterizePngs()
  await makeIco()
  await makeAppleTouch()
  console.log('Favicons generated:', ['favicon.ico', ...outPngs.map(p=>path.basename(p)), 'apple-touch-icon.png'].join(', '))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

