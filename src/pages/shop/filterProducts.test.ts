import { filterProducts, isPriceRangeActive, matchesFilters, priceSummary } from "./filterProducts"
import { shopProductData } from "../../data"

const names = (list: { productName: string }[]) => list.map((p) => p.productName)
const ALL = ["원레인 4인용 소파", "알프든 옐로우소파", "제임스리 아트체어", "HC 아트 우든체어"]

describe("filterProducts (실제 상품 목록 데이터)", () => {
  it("아무것도 고르지 않으면 전체", () => {
    expect(names(filterProducts(shopProductData, {}))).toEqual(ALL)
    expect(names(filterProducts(shopProductData, { 컬러: [] }, {}))).toEqual(ALL)
  })

  it("같은 분류 안은 OR: 컬러 옐로우 또는 퍼플", () => {
    expect(names(filterProducts(shopProductData, { 컬러: ["옐로우", "퍼플"] }))).toEqual(["원레인 4인용 소파", "알프든 옐로우소파"])
  })

  it("분류끼리는 AND: 컬러 레드 AND 재질 가죽", () => {
    expect(names(filterProducts(shopProductData, { 컬러: ["레드"], 재질: ["가죽/인조가죽"] }))).toEqual(["제임스리 아트체어"])
  })

  it("원목: 속성이 없는 상품(소파)은 원목 필터에서 빠진다", () => {
    expect(names(filterProducts(shopProductData, { 원목: ["원목/우드"] }))).toEqual(["알프든 옐로우소파", "HC 아트 우든체어"])
  })

  it("스타일: 모던", () => {
    expect(names(filterProducts(shopProductData, { 스타일: ["모던"] }))).toEqual(["원레인 4인용 소파", "제임스리 아트체어"])
  })

  it("가격 범위: 20만~150만원", () => {
    expect(names(filterProducts(shopProductData, {}, { min: 200000, max: 1500000 }))).toEqual(["알프든 옐로우소파", "제임스리 아트체어"])
  })

  it("가격 경계값은 포함 (이상·이하)", () => {
    expect(names(filterProducts(shopProductData, {}, { min: 230000, max: 230000 }))).toEqual(["제임스리 아트체어"])
  })

  it("가격 한쪽만: 100만원 이하", () => {
    expect(names(filterProducts(shopProductData, {}, { max: 1000000 }))).toEqual(["제임스리 아트체어", "HC 아트 우든체어"])
  })

  it("옵션 + 가격 조합", () => {
    expect(names(filterProducts(shopProductData, { 재질: ["원목, 우드"] }, { max: 200000 }))).toEqual(["HC 아트 우든체어"])
  })

  it("맞는 상품이 없으면 빈 목록", () => {
    expect(filterProducts(shopProductData, { 컬러: ["핑크"] })).toEqual([])
  })

  it("'가격' 키에 들어온 옵션 이름은 무시한다", () => {
    expect(names(filterProducts(shopProductData, { 가격: ["아무거나"] }))).toEqual(ALL)
  })
})

describe("matchesFilters", () => {
  it("filters 속성이 없는 상품은 옵션 필터를 통과하지 못한다", () => {
    expect(matchesFilters({ price: 1000 }, { 컬러: ["레드"] })).toBe(false)
    expect(matchesFilters({ price: 1000 }, {})).toBe(true)
  })
  it("가격 0·음수·null은 제한 없음", () => {
    expect(matchesFilters({ price: 1000 }, {}, { min: 0, max: null })).toBe(true)
    expect(matchesFilters({ price: 1000 }, {}, { min: -5 })).toBe(true)
  })
})

describe("가격 표시", () => {
  it("isPriceRangeActive", () => {
    expect(isPriceRangeActive({})).toBe(false)
    expect(isPriceRangeActive({ min: 0, max: null })).toBe(false)
    expect(isPriceRangeActive({ max: 10000 })).toBe(true)
  })
  it("priceSummary", () => {
    expect(priceSummary({})).toBeNull()
    expect(priceSummary({ min: 130000, max: 1430000 })).toBe("13만~143만원")
    expect(priceSummary({ min: 200000 })).toBe("20만원 이상")
    expect(priceSummary({ max: 1000000 })).toBe("100만원 이하")
  })
})
