/**
 * Renders the SGR mark to the favicon set.
 *
 * Uses the installed Chrome so Space Grotesk is baked into the pixels —
 * an SVG favicon carrying a webfont name renders inconsistently across
 * browsers, since favicons do not always get to load remote fonts.
 *
 *   node tools/build-favicon.mjs
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

/** [output file, pixel size] */
const SIZES = [
  ['favicon-32.png', 32],
  ['favicon-192.png', 192],
  ['apple-touch-icon.png', 180],
]

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' })
const page = await browser.newPage()
await page.goto('file:///' + join(HERE, 'favicon-source.html').replace(/\\/g, '/'), {
  waitUntil: 'networkidle0',
})
await page.evaluate(() => document.fonts.ready)

const tile = await page.$('.tile')

for (const [file, size] of SIZES) {
  // The tile is authored at 512px; scaling the viewport keeps text crisp
  // instead of resampling a single render.
  await page.setViewport({ width: 512, height: 512, deviceScaleFactor: size / 512 })
  await tile.screenshot({ path: join(PUBLIC, file), omitBackground: true })
  console.log(`  ${file.padEnd(22)} ${size}x${size}`)
}

await browser.close()
console.log('\nFavicons escritos en public/')
