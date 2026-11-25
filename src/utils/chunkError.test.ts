import { CHUNK_RELOAD_COOLDOWN_MS, isChunkLoadError, reloadOnceForChunkError } from "./chunkError"

describe("isChunkLoadError", () => {
  it.each([
    [{ name: "ChunkLoadError", message: "Loading chunk 123 failed." }],
    [new Error("Loading chunk 8215 failed.\n(error: http://localhost/static/js/8215.chunk.js)")],
    [new Error("Loading CSS chunk 1958 failed.")],
    [new TypeError("Failed to fetch dynamically imported module: /assets/Cart.js")],
    [new TypeError("error loading dynamically imported module")],
  ])("청크 로드 실패로 본다: %p", (error) => {
    expect(isChunkLoadError(error)).toBe(true)
  })

  it.each([[new Error("Cannot read properties of undefined")], [null], [undefined], ["문자열 오류"]])("일반 오류: %p", (error) => {
    expect(isChunkLoadError(error)).toBe(false)
  })
})

describe("reloadOnceForChunkError", () => {
  const memoryStorage = () => {
    const m = new Map<string, string>()
    return { getItem: (k: string) => m.get(k) ?? null, setItem: (k: string, v: string) => void m.set(k, v) }
  }

  it("처음에는 새로 고친다", () => {
    const reload = jest.fn()
    expect(reloadOnceForChunkError(1_000_000, reload, memoryStorage())).toBe(true)
    expect(reload).toHaveBeenCalledTimes(1)
  })

  it("방금 새로 고쳤으면 다시 새로 고치지 않는다 (무한 새로 고침 방지)", () => {
    const storage = memoryStorage()
    const reload = jest.fn()
    reloadOnceForChunkError(1_000_000, reload, storage)
    expect(reloadOnceForChunkError(1_000_000 + CHUNK_RELOAD_COOLDOWN_MS - 1, reload, storage)).toBe(false)
    expect(reload).toHaveBeenCalledTimes(1)
  })

  it("쿨다운이 지나면 다시 새로 고칠 수 있다", () => {
    const storage = memoryStorage()
    const reload = jest.fn()
    reloadOnceForChunkError(1_000_000, reload, storage)
    expect(reloadOnceForChunkError(1_000_000 + CHUNK_RELOAD_COOLDOWN_MS, reload, storage)).toBe(true)
    expect(reload).toHaveBeenCalledTimes(2)
  })

  it("저장소가 없어도 새로 고친다", () => {
    const reload = jest.fn()
    expect(reloadOnceForChunkError(1, reload, null)).toBe(true)
    expect(reload).toHaveBeenCalled()
  })
})
