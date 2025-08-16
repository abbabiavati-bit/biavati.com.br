import { mkdir, writeFile } from 'node:fs/promises'
import { createWriteStream } from 'node:fs'
import { dirname } from 'node:path'
import https from 'node:https'
import http from 'node:http'

function fetchToFile(url, dest) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http
    lib.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // follow redirects
        return resolve(fetchToFile(res.headers.location, dest))
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${url} (status ${res.statusCode})`))
        res.resume()
        return
      }
      const file = createWriteStream(dest)
      res.pipe(file)
      file.on('finish', () => file.close(() => resolve(dest)))
      file.on('error', (err) => reject(err))
    }).on('error', (err) => reject(err))
  })
}

async function main() {
  const listPath = process.argv[2]
  if (!listPath) {
    console.error('Usage: node scripts/fetch-remote-images.mjs path/to/images.json')
    process.exit(1)
  }
  const data = JSON.parse(await (await import('node:fs/promises')).readFile(listPath, 'utf8'))
  for (const item of data) {
    const { url, dest } = item
    if (!url || !dest) continue
    try {
      await mkdir(dirname(dest), { recursive: true })
      process.stdout.write(`Downloading ${url} -> ${dest} ... `)
      await fetchToFile(url, dest)
      console.log('OK')
    } catch (e) {
      console.warn(`Failed: ${e.message}`)
    }
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

