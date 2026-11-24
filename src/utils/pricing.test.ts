import {
  Coupon, DELIVERY_FEES, PricedLine, couponDiscount, eligibleLines, isCouponApplicable, isCouponUsable,
  normalizeBrand, orderAmounts, productTotal, won,
} from "./pricing"

const allCoupon: Coupon = { id: "welcome", scope: "all", rate: 0.1, expiration: 30 }
const onerainCoupon: Coupon = { id: "onerain", scope: "brand", brandKey: "onerain", rate: 0.1, expiration: 15 }
const jamesCoupon: Coupon = { id: "james_lee", scope: "brand", brandKey: "jameslee", rate: 0.1, expiration: 11 }

const camelpia2: PricedLine = { shopName: "ALFDEN", price: 240000, count: 2 } // 480,000
const desk: PricedLine = { shopName: "ALFDEN", price: 300000, count: 1 }
const onerainSofa: PricedLine = { shopName: "One Rain", price: 3230000, count: 1 }

describe("normalizeBrand", () => {
  it.each([
    ["ONERAIN", "onerain"],
    ["One Rain", "onerain"],
    ["One rain", "onerain"],
    ["OneRain", "onerain"],
    ["James Lee - Sofa", "jamesleesofa"],
    ["HC ART", "hcart"],
  ])("%s → %s", (input, expected) => {
    expect(normalizeBrand(input)).toBe(expected)
  })
})

describe("productTotal", () => {
  it("단가 × 수량의 합", () => {
    expect(productTotal([camelpia2, desk])).toBe(780000)
  })
  it("빈 주문은 0", () => {
    expect(productTotal([])).toBe(0)
  })
})

describe("쿠폰 적용 대상", () => {
  it("전 상품 쿠폰은 모든 줄", () => {
    expect(eligibleLines([camelpia2, onerainSofa], allCoupon)).toHaveLength(2)
  })
  it("브랜드 쿠폰은 같은 브랜드 줄만 (표기가 달라도)", () => {
    expect(eligibleLines([camelpia2, onerainSofa], onerainCoupon)).toEqual([onerainSofa])
  })
  it("'James Lee - Sofa'도 James Lee 브랜드로 본다", () => {
    const line = { shopName: "James Lee - Sofa", price: 969000, count: 1 }
    expect(eligibleLines([line], jamesCoupon)).toEqual([line])
  })
  it("brandKey가 없는 브랜드 쿠폰은 적용 대상 없음", () => {
    expect(eligibleLines([camelpia2], { scope: "brand" })).toEqual([])
  })
})

describe("쿠폰 사용 가능 여부", () => {
  it("남은 일수 0 이하이면 만료", () => {
    expect(isCouponUsable({ expiration: 1 })).toBe(true)
    expect(isCouponUsable({ expiration: 0 })).toBe(false)
    expect(isCouponUsable({ expiration: -3 })).toBe(false)
  })
  it("브랜드 상품이 없으면 브랜드 쿠폰은 사용 불가", () => {
    expect(isCouponApplicable([camelpia2], onerainCoupon)).toBe(false)
    expect(isCouponApplicable([camelpia2, onerainSofa], onerainCoupon)).toBe(true)
  })
  it("만료된 전 상품 쿠폰은 사용 불가", () => {
    expect(isCouponApplicable([camelpia2], { ...allCoupon, expiration: 0 })).toBe(false)
  })
})

describe("couponDiscount", () => {
  it("전 상품 쿠폰: 합계의 10%", () => {
    expect(couponDiscount([camelpia2], allCoupon)).toBe(48000)
  })
  it("브랜드 쿠폰: 해당 브랜드 금액에만 10% (다른 브랜드 제외)", () => {
    expect(couponDiscount([onerainSofa, desk], onerainCoupon)).toBe(323000)
  })
  it("적용 대상이 없거나 쿠폰이 없으면 0", () => {
    expect(couponDiscount([camelpia2], onerainCoupon)).toBe(0)
    expect(couponDiscount([camelpia2], null)).toBe(0)
    expect(couponDiscount([camelpia2], undefined)).toBe(0)
  })
  it("원 단위 버림", () => {
    expect(couponDiscount([{ shopName: "A", price: 12345, count: 1 }], allCoupon)).toBe(1234)
  })
})

describe("orderAmounts (주문서 E2E 시나리오와 같은 숫자)", () => {
  it("카멜피아 2개 + 빠른배송 = 580,000원", () => {
    expect(orderAmounts([camelpia2], "빠른배송")).toEqual({ productTotal: 480000, discount: 0, deliveryFee: 100000, final: 580000 })
  })
  it("+ 전 상품 쿠폰 = 532,000원", () => {
    expect(orderAmounts([camelpia2], "빠른배송", allCoupon).final).toBe(532000)
  })
  it("+ 전 상품 쿠폰 + 일반배송 = 482,000원", () => {
    expect(orderAmounts([camelpia2], "일반배송", allCoupon).final).toBe(482000)
  })
  it("일반배송, 쿠폰 없음 = 530,000원", () => {
    expect(orderAmounts([camelpia2], "일반배송").final).toBe(530000)
  })
  it("One Rain + ALFDEN, ONERAIN 쿠폰 = 3,307,000원", () => {
    const a = orderAmounts([onerainSofa, desk], "빠른배송", onerainCoupon)
    expect(a).toEqual({ productTotal: 3530000, discount: 323000, deliveryFee: 100000, final: 3307000 })
  })
  it("One Rain + ALFDEN, 전 상품 쿠폰 = 3,277,000원", () => {
    expect(orderAmounts([onerainSofa, desk], "빠른배송", allCoupon).final).toBe(3277000)
  })
  it("바로 구매 카멜프튼 1개 = 1,694,500원", () => {
    expect(orderAmounts([{ shopName: "ALFDN", price: 1594500, count: 1 }], "빠른배송").final).toBe(1694500)
  })
  it("상품이 없으면 배송비도 0", () => {
    expect(orderAmounts([], "빠른배송")).toEqual({ productTotal: 0, discount: 0, deliveryFee: 0, final: 0 })
  })
  it("배송비 표", () => {
    expect(DELIVERY_FEES).toEqual({ 빠른배송: 100000, 일반배송: 50000 })
  })
})

describe("won", () => {
  it("천 단위 쉼표 + 원", () => {
    expect(won(1594500)).toBe("1,594,500원")
    expect(won(0)).toBe("0원")
  })
})
