/**
 * 빌드 결과(build/)를 띄우는 최소 정적 서버 (SPA: 없는 경로는 index.html)
 * E2E 테스트(playwright.config.ts의 webServer)에서 사용한다. 의존성 없음.
 *
 *   node scripts/serve-build.js [buildDir=build] [port=4173]
 */
const http = require("http")
const fs = require("fs")
const path = require("path")

const root = path.resolve(process.argv[2] || "build")
const port = Number(process.argv[3] || process.env.PORT || 4173)
const types = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".ico": "image/x-icon",
  ".mp4": "video/mp4", ".txt": "text/plain",
}

if (!fs.existsSync(path.join(root, "index.html"))) {
  console.error(`${root}/index.html 이 없습니다. 먼저 npm run build 를 실행하세요.`)
  process.exit(1)
}

http
  .createServer((req, res) => {
    let file = path.join(root, decodeURIComponent((req.url || "/").split("?")[0]))
    if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(root, "index.html")
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" })
    fs.createReadStream(file).pipe(res)
  })
  .listen(port, () => console.log(`serving ${root} on http://localhost:${port}`))
