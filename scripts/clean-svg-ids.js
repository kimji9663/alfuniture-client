/**
 * SVG 아이콘에서 쓰이지 않는 id 속성을 지운다.
 *
 *   node scripts/clean-svg-ids.js [dir=src/assets/images]
 *
 * Figma에서 내보낸 SVG에는 레이어 이름이 id="Vector" 같은 형태로 남는다.
 * SVG를 React 컴포넌트로 인라인하면(CRA svgr) 이 id가 문서에 그대로 들어가서,
 * 같은 이름을 쓰는 아이콘이 한 화면에 여러 개 있으면 id가 중복된다.
 * 파일 안에서 url(#id) / href="#id" 로 참조되는 id(clipPath·mask·pattern 등)는 그대로 둔다.
 */
const fs = require("fs")
const path = require("path")

const dir = path.resolve(process.argv[2] || "src/assets/images")

function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(d, e.name)
    return e.isDirectory() ? walk(p) : e.name.endsWith(".svg") ? [p] : []
  })
}

let total = 0
for (const file of walk(dir)) {
  const svg = fs.readFileSync(file, "utf8")
  const referenced = new Set(
    [...svg.matchAll(/url\(#([^)]+)\)|(?:xlink:)?href="#([^"]+)"/g)].map((m) => m[1] ?? m[2]),
  )
  let removed = 0
  const out = svg.replace(/\s+id="([^"]*)"/g, (attr, id) => {
    if (referenced.has(id)) return attr
    removed++
    return ""
  })
  if (removed) {
    fs.writeFileSync(file, out)
    total += removed
    console.log(`${path.relative(process.cwd(), file)}: ${removed}개 제거`)
  }
}
console.log(`합계 ${total}개`)
