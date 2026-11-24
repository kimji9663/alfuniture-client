import React from "react"
import { act, renderHook } from "@testing-library/react"
import { CartProvider, NewCartItem, lineId, productImage, useCart } from "./cart"

const KEY = "alfuniture:cart:v1"
const wrapper = ({ children }: { children: React.ReactNode }) => <CartProvider>{children}</CartProvider>
const setup = () => renderHook(() => useCart(), { wrapper })

const camelfton: NewCartItem = {
  productId: "camelfton", shopName: "ALFDN", modelName: "", productName: "카멜프튼",
  option1: "브라운/화이트", option2: "블루", price: 1594500, deliveryCharge: 0,
}
const stored = () => JSON.parse(window.localStorage.getItem(KEY) ?? "null")

beforeEach(() => window.localStorage.clear())

describe("초기값", () => {
  it("저장된 적이 없으면 예시 상품 2개", () => {
    const { result } = setup()
    expect(result.current.items.map((i) => i.productName)).toEqual(["카멜피아", "모닝 데스크"])
  })
  it("저장된 장바구니를 읽는다", () => {
    window.localStorage.setItem(KEY, JSON.stringify([{ ...camelfton, id: lineId(camelfton), count: 3 }]))
    const { result } = setup()
    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0].count).toBe(3)
  })
  it("저장값이 깨졌으면 빈 장바구니", () => {
    window.localStorage.setItem(KEY, "{not json")
    expect(setup().result.current.items).toEqual([])
  })
  it("형식이 맞지 않는 항목은 버린다", () => {
    window.localStorage.setItem(KEY, JSON.stringify([{ id: 1 }, { ...camelfton, id: "x", count: 1 }]))
    expect(setup().result.current.items.map((i) => i.id)).toEqual(["x"])
  })
})

describe("담기", () => {
  it("새 상품은 끝에 추가되고 localStorage에 저장된다", () => {
    const { result } = setup()
    act(() => result.current.addItem(camelfton))
    expect(result.current.items).toHaveLength(3)
    expect(result.current.items[2]).toMatchObject({ productName: "카멜프튼", count: 1, id: "camelfton|브라운/화이트|블루" })
    expect(stored()).toHaveLength(3)
  })
  it("같은 상품·같은 옵션은 줄이 늘지 않고 수량이 더해진다", () => {
    const { result } = setup()
    act(() => result.current.addItem(camelfton))
    act(() => result.current.addItem({ ...camelfton, count: 2 }))
    const lines = result.current.items.filter((i) => i.productId === "camelfton")
    expect(lines).toHaveLength(1)
    expect(lines[0].count).toBe(3)
  })
  it("옵션이 다르면 다른 줄", () => {
    const { result } = setup()
    act(() => result.current.addItem(camelfton))
    act(() => result.current.addItem({ ...camelfton, option2: "그레이" }))
    expect(result.current.items.filter((i) => i.productId === "camelfton")).toHaveLength(2)
  })
})

describe("수량·삭제", () => {
  it("수량은 1~99로 제한", () => {
    const { result } = setup()
    const id = result.current.items[0].id
    act(() => result.current.setCount(id, 0))
    expect(result.current.items[0].count).toBe(1)
    act(() => result.current.setCount(id, 150))
    expect(result.current.items[0].count).toBe(99)
  })
  it("원본 객체를 직접 고치지 않는다 (이전 버그)", () => {
    const { result } = setup()
    const before = result.current.items[0]
    act(() => result.current.setCount(before.id, before.count + 1))
    expect(before.count).toBe(2)
    expect(result.current.items[0]).not.toBe(before)
    expect(result.current.items[0].count).toBe(3)
  })
  it("삭제", () => {
    const { result } = setup()
    act(() => result.current.removeItem(result.current.items[1].id))
    expect(result.current.items.map((i) => i.productName)).toEqual(["카멜피아"])
    expect(stored()).toHaveLength(1)
  })
})

describe("탭 간 동기화", () => {
  it("다른 탭에서 바뀐 값을 storage 이벤트로 반영", () => {
    const { result } = setup()
    window.localStorage.setItem(KEY, JSON.stringify([]))
    act(() => { window.dispatchEvent(new StorageEvent("storage", { key: KEY })) })
    expect(result.current.items).toEqual([])
  })
})

it("이미지는 productId로 찾는다 (URL은 저장하지 않음)", () => {
  expect(productImage("camelpia")).toBeTruthy()
  expect(productImage("unknown")).toBe("")
  const { result } = setup()
  expect(JSON.stringify(result.current.items)).not.toMatch(/\.webp/)
})

it("Provider 밖에서 쓰면 오류", () => {
  const spy = jest.spyOn(console, "error").mockImplementation(() => {})
  expect(() => renderHook(() => useCart())).toThrow(/CartProvider/)
  spy.mockRestore()
})
