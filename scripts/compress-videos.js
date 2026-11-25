/**
 * 영상 압축 (ffmpeg-static, devDependency)
 *
 *   npm run compress-videos -- <원본 폴더> [출력 폴더=public/videos]
 *
 * - 짧은 변을 720px로 줄인다 (세로 720×1366, 가로 1366×720). 앱은 최대 420px 너비라 2~3배 고밀도 화면에도 충분
 * - H.264(모든 브라우저 재생), CRF 26, 오디오·메타데이터·데이터 트랙 제거, +faststart(내려받는 중 재생 시작)
 * - 1초 지점 프레임을 포스터 이미지로 저장: <이름>-poster.webp (로딩 중 빈 화면 대신 표시)
 *
 * 원본(4K)은 저장소 용량 때문에 보관하지 않는다. 다시 압축하려면 git 기록에서 꺼낸다:
 *   git show 4e4ee15:public/videos/video1.mp4 > 원본폴더/video1.mp4
 */
const fs = require("fs")
const os = require("os")
const path = require("path")
const { execFileSync } = require("child_process")
const ffmpeg = require("ffmpeg-static")
const sharp = require("sharp")

const [input, output = "public/videos"] = process.argv.slice(2)
if (!input) {
  console.error("사용법: npm run compress-videos -- <원본 폴더> [출력 폴더]")
  process.exit(1)
}
const SHORT_SIDE = 720
const CRF = 26

fs.mkdirSync(output, { recursive: true })
const files = fs.readdirSync(input).filter((f) => /\.(mp4|mov|m4v)$/i.test(f))
let before = 0
let after = 0

for (const file of files) {
  const src = path.join(input, file)
  const name = path.parse(file).name
  const dest = path.join(output, `${name}.mp4`)
  const tmp = path.join(os.tmpdir(), `compress-${process.pid}-${name}.mp4`)

  execFileSync(ffmpeg, [
    "-hide_banner", "-loglevel", "error", "-y",
    "-i", src,
    "-map", "0:v:0", // 영상 트랙만 (오디오·타임코드 등 제외)
    // 짧은 변을 720px로 (홀수 방지 -2)
    "-vf", `scale='if(gt(iw,ih),-2,${SHORT_SIDE})':'if(gt(iw,ih),${SHORT_SIDE},-2)'`,
    "-c:v", "libx264", "-preset", "slow", "-crf", String(CRF), "-profile:v", "high", "-pix_fmt", "yuv420p",
    "-an", "-map_metadata", "-1", "-movflags", "+faststart",
    tmp,
  ])
  fs.copyFileSync(tmp, dest)
  fs.unlinkSync(tmp)

  // 포스터: 1초 지점 프레임 → WebP (첫 프레임은 검은 화면(페이드 인)인 경우가 많음. 1초보다 짧으면 첫 프레임)
  const frame = path.join(os.tmpdir(), `poster-${process.pid}-${name}.png`)
  const grab = (seek) =>
    execFileSync(ffmpeg, ["-hide_banner", "-loglevel", "error", "-y", ...(seek ? ["-ss", seek] : []), "-i", dest, "-frames:v", "1", frame])
  grab("1")
  if (!fs.existsSync(frame) || fs.statSync(frame).size === 0) grab(null)
  const poster = path.join(output, `${name}-poster.webp`)
  // sharp 캐시가 파일을 잡지 않도록 버퍼로 처리
  sharp(fs.readFileSync(frame)).webp({ quality: 75 }).toFile(poster).then(() => fs.unlinkSync(frame))

  const inSize = fs.statSync(src).size
  const outSize = fs.statSync(dest).size
  before += inSize
  after += outSize
  console.log(`${file.padEnd(14)} ${(inSize / 1048576).toFixed(1).padStart(6)}MB → ${(outSize / 1048576).toFixed(2).padStart(6)}MB`)
}
console.log(`\n${files.length}개: ${(before / 1048576).toFixed(1)}MB → ${(after / 1048576).toFixed(2)}MB`)
