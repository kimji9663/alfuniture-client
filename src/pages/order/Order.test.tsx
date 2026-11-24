import React from "react"
import { fireEvent, render, screen, within } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import Order, { OrderState } from "./Order"
import { CartProvider, lineId } from "../../store/cart"

const renderOrder = (state?: OrderState) =>
  render(
    <CartProvider>
      <MemoryRouter initialEntries={[{ pathname: "/order", state }]}>
        <Routes>
          <Route path="/order" element={<Order />} />
          <Route path="/" element={<div>HOME</div>} />
        </Routes>
      </MemoryRouter>
    </CartProvider>,
  )

const camelfton = {
  productId: "camelfton", shopName: "ALFDN", modelName: "", productName: "카멜프튼",
  option1: "브라운/화이트", option2: "블루", price: 1594500, deliveryCharge: 0,
}
const payButton = () => screen.getByRole("button", { name: /결제하기$/ })

/** 쿠폰 서랍 열고 셀렉트 펼치기 */
const openCoupons = () => {
  fireEvent.click(screen.getByRole("button", { name: "쿠폰 선택" }))
  fireEvent.click(screen.getByRole("button", { name: "쿠폰을 선택해 주세요" }))
}
const couponItem = (brand: string) => screen.getAllByRole("button").find((b) => b.tagName === "LI" && b.textContent?.startsWith(brand))!

beforeEach(() => window.localStorage.clear())

it("넘겨받은 상품이 없으면 안내", () => {
  renderOrder()
  expect(screen.getByText("주문할 상품이 없습니다.")).toBeInTheDocument()
})

it("바로 구매: 상품·옵션 표시, 1,594,500 + 빠른배송 100,000 = 1,694,500원", () => {
  renderOrder({ source: "buyNow", item: camelfton })
  expect(screen.getByText("ALFDN - 카멜프튼")).toBeInTheDocument()
  expect(screen.getByText("브라운/화이트")).toBeInTheDocument()
  expect(payButton()).toHaveTextContent("1,694,500원 결제하기")
  expect(payButton()).toBeDisabled() // 필수 정보 입력 전
})

it("전 상품 쿠폰 적용·취소", () => {
  renderOrder({ source: "buyNow", item: camelfton })
  openCoupons()
  fireEvent.click(couponItem("Alfuniture"))
  // 1,594,500 × 10% = 159,450 → 1,594,500 - 159,450 + 100,000
  expect(screen.getByText(/전 상품 10% -159,450원/)).toBeInTheDocument()
  expect(payButton()).toHaveTextContent("1,535,050원 결제하기")
  fireEvent.click(screen.getByRole("button", { name: "취소" }))
  expect(payButton()).toHaveTextContent("1,694,500원 결제하기")
})

it("ALFDN 상품만 있으면 브랜드 쿠폰은 모두 선택 불가", () => {
  renderOrder({ source: "buyNow", item: camelfton })
  openCoupons()
  for (const brand of ["Aerobiey", "ONERAIN", "James Lee", "CLODS"]) {
    const li = couponItem(brand)
    expect(li).toHaveAttribute("aria-disabled", "true")
    expect(within(li).getByText("적용 가능한 상품 없음")).toBeInTheDocument()
  }
  expect(screen.getByText("5개 (이 주문에 사용 가능 1개)")).toBeInTheDocument()
})

it("장바구니에서 넘어온 One Rain + ALFDEN 주문: ONERAIN 쿠폰은 One Rain 상품에만 할인", () => {
  const onerain = { productId: "onerain-sofa", shopName: "One Rain", modelName: "", productName: "원레인 4인용 소파", option1: "기본", option2: null, price: 3230000, deliveryCharge: 0 }
  const desk = { productId: "morning-desk", shopName: "ALFDEN", modelName: "", productName: "모닝 데스크", option1: "옐로우 우든", option2: null, price: 300000, deliveryCharge: 0 }
  const items = [onerain, desk].map((i) => ({ ...i, id: lineId(i), count: 1 }))
  window.localStorage.setItem("alfuniture:cart:v1", JSON.stringify(items))
  renderOrder({ source: "cart", ids: items.map((i) => i.id) })
  openCoupons()
  expect(within(couponItem("ONERAIN")).getByText("ONERAIN 상품 3,230,000원에 적용")).toBeInTheDocument()
  fireEvent.click(couponItem("ONERAIN"))
  expect(screen.getByText(/ONERAIN 10% -323,000원/)).toBeInTheDocument()
  expect(payButton()).toHaveTextContent("3,307,000원 결제하기")
})
