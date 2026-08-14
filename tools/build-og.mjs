/**
 * Renderiza la imagen de vista previa (Open Graph) que muestran LinkedIn,
 * WhatsApp y X cuando alguien comparte el sitio.
 *
 *   node tools/build-og.mjs
 */
import puppeteer from 'puppeteer-core'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { existsSync } from 'node:fs'

const HERE = dirname(fileURLToPath(import.meta.url))
const PUBLIC = join(HERE, '..', 'public')

const CHROME = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
].find((p) => existsSync(p))

if (!CHROME) {
  console.error('No encontré Chrome ni Edge.')
  process.exit(1)
}

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' })
const page = await browser.newPage()
// 1200x630 a 1x: las redes reescalan la imagen, y un archivo liviano
// evita que el crawler la descarte por tamaño.
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })
await page.goto('file:///' + join(HERE, 'og-source.html').replace(/\\/g, '/'), {
  waitUntil: 'networkidle0',
})
await page.evaluate(() => document.fonts.ready)

const card = await page.$('.og')
await card.screenshot({ path: join(PUBLIC, 'og-image.png') })

const box = await card.boundingBox()
console.log(`  og-image.png  ${box.width}x${box.height}`)

await browser.close()
