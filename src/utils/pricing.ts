/**
 * 주문 금액 계산 (순수 함수: 화면과 분리해서 테스트할 수 있게)
 *
 * 규칙
 * - 쿠폰은 주문당 1장. 종류는 두 가지 (2026-11-25 결정)
 *   - 전 상품 쿠폰(scope "all"): 주문 상품 금액 합계의 비율 할인
 *   - 브랜드 쿠폰(scope "brand"): 해당 브랜드 상품 금액 합계에만 비율 할인. 해당 브랜드 상품이 없으면 사용 불가
 *   - 할인액은 원 단위 버림
 * - 배송비: 주문서에서 고른 배송방법 요금 하나만 받는다 (장바구니의 상품별 배송비는 예상값)
 * - 결제금액 = 상품 금액 합계 - 쿠폰 할인 + 배송비 (0원 미만이 되지 않게)
 */

export interface PricedLine {
  price: number
  count: number
  /** 브랜드 쿠폰 적용 대상 판별용 */
  shopName: string
}

export type DeliveryType = "빠른배송" | "일반배송"

export const DELIVERY_FEES: Record<DeliveryType, number> = {
  빠른배송: 100000,
  일반배송: 50000,
}

export type CouponScope = "all" | "brand"

export interface Coupon {
  id: string
  scope: CouponScope
  /** 브랜드 쿠폰의 브랜드 키 (normalizeBrand 결과와 비교). 전 상품 쿠폰은 없음 */
  brandKey?: string
  /** 할인율 (0.1 = 10%) */
  rate: number
  /** 남은 일수. 0 이하이면 만료 */
  expiration: number
}

/**
 * 브랜드 이름 표기를 맞춘다: 소문자 + 영문·숫자·한글만 남김
 * 예) "ONERAIN", "One Rain", "One rain" → "onerain" / "James Lee - Sofa" → "jamesleesofa" ("jameslee"로 시작하므로 James Lee 상품)
 */
export const normalizeBrand = (name: string) => name.toLowerCase().replace(/[^a-z0-9가-힣]/g, "")

export const isCouponUsable = (coupon: Pick<Coupon, "expiration">) => coupon.expiration > 0

/** 쿠폰이 적용되는 주문 줄 */
export function eligibleLines<T extends PricedLine>(lines: T[], coupon: Pick<Coupon, "scope" | "brandKey">): T[] {
  if (coupon.scope === "all") return lines
  const key = coupon.brandKey ?? ""
  return key ? lines.filter((l) => normalizeBrand(l.shopName).startsWith(key)) : []
}

/** 만료되지 않았고, 적용할 상품이 하나 이상 있으면 사용 가능 */
export const isCouponApplicable = (lines: PricedLine[], coupon: Coupon) =>
  isCouponUsable(coupon) && eligibleLines(lines, coupon).length > 0

export const productTotal = (lines: Pick<PricedLine, "price" | "count">[]) =>
  lines.reduce((sum, l) => sum + l.price * l.count, 0)

export const couponDiscount = (lines: PricedLine[], coupon?: Coupon | null) =>
  coupon && isCouponApplicable(lines, coupon) ? Math.floor(productTotal(eligibleLines(lines, coupon)) * coupon.rate) : 0

export const deliveryFee = (type: DeliveryType) => DELIVERY_FEES[type]

export interface OrderAmounts {
  productTotal: number
  discount: number
  deliveryFee: number
  final: number
}

export function orderAmounts(lines: PricedLine[], delivery: DeliveryType, coupon?: Coupon | null): OrderAmounts {
  const total = productTotal(lines)
  const discount = couponDiscount(lines, coupon)
  const fee = lines.length ? deliveryFee(delivery) : 0
  return { productTotal: total, discount, deliveryFee: fee, final: Math.max(0, total - discount + fee) }
}

export const won = (n: number) => `${n.toLocaleString("ko-KR")}원`
