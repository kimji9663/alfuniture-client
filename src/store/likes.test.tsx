import React from "react"
import { act, renderHook } from "@testing-library/react"
import { LikeTarget, LikesProvider, catalogEntry, productKey, useLikes } from "./likes"

const KEY = "alfuniture:likes:v1"
const wrapper = ({ children }: { children: React.ReactNode }) => <LikesProvider>{children}</LikesProvider>
const setup = () => renderHook(() => useLikes(), { wrapper })

const onerainSofa: LikeTarget = { shopName: "One Rain", modelName: "[3Color] OR-205", productName: "원레인 4인용 소파", price: 3230000 }
const camelfton: LikeTarget = { shopName: "ALFDN", modelName: "", productName: "카멜프튼", price: 1594500 }

beforeEach(() => {
  window.localStorage.clear()
  jest.restoreAllMocks()
})

describe("상품 키", () => {
  it("브랜드|모델명|상품명 (앞뒤 공백 제거)", () => {
    expect(productKey({ shopName: "Henredo", modelName: "[22s] HRD-210", productName: "1인 모던 쇼파 " })).toBe("Henredo|[22s] HRD-210|1인 모던 쇼파")
  })
})

describe("초기값", () => {
  it("저장된 적이 없으면 예시 4개, 모두 찜 상태", () => {
    const { result } = setup()
    expect(result.current.items).toHaveLength(4)
    expect(result.current.items.every((p) => result.current.isLiked(p))).toBe(true)
  })
  it("저장값이 깨졌으면 빈 목록", () => {
    window.localStorage.setItem(KEY, "{oops")
    expect(setup().result.current.items).toEqual([])
  })
})

describe("찜 토글", () => {
  it("찜하면 최근 찜한 순으로 맨 앞에 추가, 다시 누르면 해제", () => {
    const { result } = setup()
    expect(result.current.isLiked(onerainSofa)).toBe(false)
    act(() => result.current.toggleLike(onerainSofa))
    expect(result.current.isLiked(onerainSofa)).toBe(true)
    expect(result.current.items[0].productName).toBe("원레인 4인용 소파")
    act(() => result.current.toggleLike(onerainSofa))
    expect(result.current.isLiked(onerainSofa)).toBe(false)
    expect(result.current.items).toHaveLength(4)
  })
  it("나중에 찜한 상품이 앞에 온다", () => {
    const now = jest.spyOn(Date, "now")
    const { result } = setup()
    now.mockReturnValue(Date.UTC(2026, 10, 25, 1))
    act(() => result.current.toggleLike(onerainSofa))
    now.mockReturnValue(Date.UTC(2026, 10, 25, 2))
    act(() => result.current.toggleLike(camelfton))
    expect(result.current.items.slice(0, 2).map((p) => p.productName)).toEqual(["카멜프튼", "원레인 4인용 소파"])
  })
  it("localStorage에 저장된다", () => {
    const { result } = setup()
    act(() => result.current.toggleLike(camelfton))
    const saved = JSON.parse(window.localStorage.getItem(KEY) ?? "[]")
    expect(saved.some((p: any) => p.productName === "카멜프튼")).toBe(true)
    expect(JSON.stringify(saved)).not.toMatch(/\.webp/)
  })
})

describe("카탈로그 (이미지·카테고리)", () => {
  it("목업 상품의 이미지와 카테고리를 키로 찾는다", () => {
    const entry = catalogEntry(productKey({ shopName: "Henredo", modelName: "[23s] HRD-0152", productName: "릴렉스 체어 (3colors)" }))
    expect(entry?.imgsrc).toBeTruthy()
    expect(entry?.category).toBe("의자")
  })
  it("상품 상세 상품(카멜프튼)도 들어 있다", () => {
    expect(catalogEntry(productKey(camelfton))).toMatchObject({ category: "소파" })
  })
})

it("다른 탭에서 바뀐 값을 storage 이벤트로 반영", () => {
  const { result } = setup()
  window.localStorage.setItem(KEY, JSON.stringify([]))
  act(() => { window.dispatchEvent(new StorageEvent("storage", { key: KEY })) })
  expect(result.current.items).toEqual([])
})
