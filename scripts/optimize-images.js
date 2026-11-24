/**
 * 원본 이미지(assets-original/images) → 최적화된 WebP(src/assets/images)
 *
 *   npm run optimize-images
 *
 * - 원본 PNG/JPG는 assets-original/ 에 보관하고 번들에는 포함하지 않는다.
 * - 같은 폴더 구조로 src/assets/images 에 .webp 를 생성한다 (SVG는 건드리지 않음).
 * - 리사이즈 규칙은 RULES 에서 표시 크기 기준으로 정한다. 규칙이 없으면 크기 유지(확대 안 함).
 */
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const ROOT = path.resolve(__dirname, '..')
const SRC = path.join(ROOT, 'assets-original', 'images')
const OUT = path.join(ROOT, 'src', 'assets', 'images')

// 표시 크기 × 3 (고밀도 화면 대응)
const RULES = [
  // 필터 Drawer의 40px 원형 Avatar
  { test: /filterIcon[\\/](wood|texture)_/, resize: { width: 120, height: 120, fit: 'cover' } },
  // 전체 화면 배경 (컨테이너 최대 420px × 2)
  { test: /onBoarding[\\/]/, resize: { width: 840, withoutEnlargement: true } },
]
const WEBP = { quality: 80, alphaQuality: 90, effort: 6 }

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    return e.isDirectory() ? walk(p) : /\.(png|jpe?g)$/i.test(e.name) ? [p] : []
  })
}

;(async () => {
  if (!fs.existsSync(SRC)) {
    console.error(`원본 폴더가 없습니다: ${path.relative(ROOT, SRC)}`)
    process.exit(1)
  }
  let before = 0, after = 0
  const rows = []
  for (const file of walk(SRC)) {
    const rel = path.relative(SRC, file)
    const dest = path.join(OUT, rel.replace(/\.(png|jpe?g)$/i, '.webp'))
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    const rule = RULES.find((r) => r.test.test(rel))
    let img = sharp(file)
    if (rule?.resize) img = img.resize(rule.resize)
    const info = await img.webp(WEBP).toFile(dest)
    const inSize = fs.statSync(file).size
    before += inSize
    after += info.size
    rows.push([rel, inSize, info.size, `${info.width}x${info.height}`])
  }
  rows.sort((a, b) => b[1] - a[1])
  const kb = (n) => `${(n / 1024).toFixed(1)}KB`
  for (const [rel, i, o, dim] of rows) console.log(`${rel.padEnd(48)} ${kb(i).padStart(10)} → ${kb(o).padStart(9)}  ${dim}`)
  console.log(`\n${rows.length}개: ${(before / 1048576).toFixed(2)}MB → ${(after / 1048576).toFixed(2)}MB (-${(100 - (after / before) * 100).toFixed(1)}%)`)
})()
