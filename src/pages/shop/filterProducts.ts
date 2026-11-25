/**
 * 상품 목록 필터 (순수 함수)
 *
 * 규칙
 * - 같은 분류 안에서는 OR: 고른 값 중 하나라도 상품에 있으면 통과 (예: 컬러 레드 또는 옐로우)
 * - 분류끼리는 AND: 고른 분류를 모두 통과해야 표시 (예: 컬러 AND 재질)
 * - 가격: min 이상, max 이하. 값이 없거나 0이면 그 쪽 제한 없음
 * - 아무것도 고르지 않은 분류는 거르지 않는다
 */

/** 가격을 뺀 필터 분류 (filters.tsx의 FilterTypes 키와 같음) */
export type AttributeFilterType = "원목" | "컬러" | "재질" | "스타일"

export type ProductFilterAttributes = Partial<Record<AttributeFilterType, string[]>>

export interface FilterableProduct {
  price: number
  filters?: ProductFilterAttributes
}

export interface PriceRange {
  min?: number | null
  max?: number | null
}

/** 분류별 고른 값 이름 (예: { 컬러: ["레드", "옐로우"] }) */
export type SelectedFilters = Partial<Record<string, string[]>>

const has = (n: number | null | undefined): n is number => typeof n === "number" && Number.isFinite(n) && n > 0

export const isPriceRangeActive = (range: PriceRange) => has(range.min) || has(range.max)

export function matchesFilters(product: FilterableProduct, selected: SelectedFilters, price: PriceRange = {}): boolean {
  for (const [type, names] of Object.entries(selected)) {
    if (!names || names.length === 0 || type === "가격") continue
    const values = product.filters?.[type as AttributeFilterType] ?? []
    if (!names.some((n) => values.includes(n))) return false
  }
  if (has(price.min) && product.price < price.min) return false
  if (has(price.max) && product.price > price.max) return false
  return true
}

export function filterProducts<T extends FilterableProduct>(products: T[], selected: SelectedFilters, price: PriceRange = {}): T[] {
  return products.filter((p) => matchesFilters(p, selected, price))
}

/** 가격 버튼에 보여 줄 요약 (예: "13만~143만원", "100만원 이하") */
export function priceSummary(range: PriceRange): string | null {
  const man = (n: number) => `${Math.round(n / 10000).toLocaleString("ko-KR")}만`
  if (has(range.min) && has(range.max)) return `${man(range.min)}~${man(range.max)}원`
  if (has(range.min)) return `${man(range.min)}원 이상`
  if (has(range.max)) return `${man(range.max)}원 이하`
  return null
}
