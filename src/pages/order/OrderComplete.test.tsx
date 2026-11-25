import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import OrderComplete, { OrderCompleteState, createOrderNo } from "./OrderComplete"
import { dDayLabel } from "../mypage/CouponCard"

const order: OrderCompleteState = {
  orderNo: "20261125-000042",
  lines: [{ productId: "camelpia", shopName: "ALFDEN", productName: "카멜피아", option1: "베이지", option2: "라탄", price: 240000, count: 2 }],
  amounts: { productTotal: 480000, discount: 48000, deliveryFee: 100000, final: 532000 },
  deliveryType: "빠른배송",
  couponName: "전 상품 10%",
}

const renderAt = (state?: OrderCompleteState) =>
  render(
    <MemoryRouter initialEntries={[{ pathname: "/order/complete", state }]}>
      <Routes>
        <Route path="/order/complete" element={<OrderComplete />} />
      </Routes>
    </MemoryRouter>,
  )

it("주문번호·상품·결제 내역을 보여 준다", () => {
  renderAt(order)
  expect(screen.getByRole("heading", { name: "주문이 완료되었어요" })).toBeInTheDocument()
  expect(screen.getByText("20261125-000042")).toBeInTheDocument()
  expect(screen.getByText("ALFDEN - 카멜피아")).toBeInTheDocument()
  expect(screen.getByText("베이지 / 라탄 · 2개")).toBeInTheDocument()
  expect(screen.getByText("쿠폰 (전 상품 10%)")).toBeInTheDocument()
  expect(screen.getByText("-48,000원")).toBeInTheDocument()
  expect(screen.getByText("배송비 (빠른배송)")).toBeInTheDocument()
  expect(screen.getByText("532,000원")).toBeInTheDocument()
  expect(screen.getByRole("button", { name: "주문 내역 보기" })).toBeInTheDocument()
  expect(screen.getByRole("button", { name: "쇼핑 계속하기" })).toBeInTheDocument()
})

it("주문 정보 없이 들어오면 안내", () => {
  renderAt()
  expect(screen.getByRole("heading", { name: "주문 정보가 없어요" })).toBeInTheDocument()
})

it("주문번호 형식: 날짜-6자리", () => {
  expect(createOrderNo(new Date(2026, 10, 5), () => 0.000123)).toBe("20261105-000123")
  expect(createOrderNo()).toMatch(/^\d{8}-\d{6}$/)
})

describe("쿠폰 D-day 표시", () => {
  it.each([
    [-1100, "기간 만료"],
    [-1, "기간 만료"],
    [0, "D-Day"],
    [3, "D-3"],
  ])("%i → %s", (dDay, label) => {
    expect(dDayLabel(dDay)).toBe(label)
  })
})
