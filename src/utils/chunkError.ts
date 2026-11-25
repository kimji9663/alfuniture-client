/**
 * 코드 분할 청크 로드 실패 처리
 *
 * 새 버전을 배포하면 예전 main.js를 들고 있던 사용자가 이미 지워진 청크를 요청하게 된다.
 * (Netlify _redirects가 없는 파일에 index.html을 돌려줘서 webpack이 ChunkLoadError를 던짐)
 * 이 경우 페이지를 한 번 새로 고치면 새 main.js를 받아 해결된다.
 * 단, 네트워크가 끊긴 경우 등 새로 고쳐도 계속 실패하면 무한 새로 고침이 되므로 일정 시간 안에는 한 번만 한다.
 */

const RELOAD_KEY = "alfuniture:chunk-reload-at"
/** 이 시간 안에 이미 새로 고쳤으면 다시 새로 고치지 않는다 */
export const CHUNK_RELOAD_COOLDOWN_MS = 10_000

export function isChunkLoadError(error: unknown): boolean {
  const e = error as { name?: string; message?: string } | null | undefined
  const message = String(e?.message ?? error ?? "")
  return (
    e?.name === "ChunkLoadError" ||
    /Loading (CSS )?chunk [\w-]+ failed/i.test(message) ||
    /Failed to fetch dynamically imported module/i.test(message) ||
    /error loading dynamically imported module/i.test(message)
  )
}

/**
 * 청크 로드 실패면 한 번만 새로 고친다.
 * @returns 새로 고침을 시작했으면 true, 최근에 이미 새로 고쳐서 멈췄으면 false
 */
export function reloadOnceForChunkError(
  now: number = Date.now(),
  reload: () => void = () => window.location.reload(),
  storage: Pick<Storage, "getItem" | "setItem"> | null = safeSessionStorage(),
): boolean {
  const last = Number(storage?.getItem(RELOAD_KEY) ?? 0)
  if (last && now - last < CHUNK_RELOAD_COOLDOWN_MS) return false
  try {
    storage?.setItem(RELOAD_KEY, String(now))
  } catch {
    // 저장소를 쓸 수 없으면 기록 없이 새로 고침 (최악의 경우에도 사용자가 멈출 수 있음)
  }
  reload()
  return true
}

function safeSessionStorage(): Storage | null {
  try {
    return window.sessionStorage
  } catch {
    return null
  }
}
