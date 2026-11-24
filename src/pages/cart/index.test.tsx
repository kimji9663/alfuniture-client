import React from "react"
import { fireEvent, render, screen, within } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import CartPage from "."
import Order from "../order/Order"
import { CartProvider } from "../../store/cart"

const renderCart = () =>
  render(
    <CartProvider>
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </MemoryRouter>
    </CartProvider>,
  )

/** 상품명이 들어 있는 장바구니 카드 (체크박스를 하나만 포함하는 가장 바깥 요소) */
const card = (name: string) => {
  let el: HTMLElement | null = screen.getByText(name)
  while (el?.parentElement && el.parentElement.querySelectorAll('input[type="checkbox"]').length <= 1) el = el.parentElement
  return el as HTMLElement
}
const payment = () => screen.getByText("결제금액").parentElement!.textContent
const buyButton = () => screen.getByRole("button", { name: /선택상품 구매하기/ })

beforeEach(() => window.localStorage.clear())

it("예시 상품 2개, 결제금액 880,000원, 버튼은 상품 종류 수 \"2개\"", () => {
  renderCart()
  expect(payment()).toMatch("880,000원")
  expect(buyButton()).toHaveTextContent("2개 선택상품 구매하기")
})

it("수량 + → 결제금액·수량 표시 갱신, 버튼 숫자는 종류 수 그대로", () => {
  renderCart()
  fireEvent.click(within(card("카멜피아")).getByRole("button", { name: "+" }))
  expect(payment()).toMatch("1,120,000원")
  expect(within(card("카멜피아")).getByLabelText("카멜피아 수량")).toHaveValue("3")
  expect(buyButton()).toHaveTextContent("2개 선택상품")
})

it("선택 해제 후 다른 상품을 삭제해도 선택 상태가 어긋나지 않는다 (이전 인덱스 버그)", () => {
  renderCart()
  fireEvent.click(within(card("카멜피아")).getByRole("checkbox"))
  expect(payment()).toMatch("300,000원")
  // 모닝 데스크 삭제 (X 아이콘)
  const x = within(card("모닝 데스크")).getByText(/icon_x_black/).closest("svg")!
  fireEvent.click(x)
  expect(screen.queryByText("모닝 데스크")).not.toBeInTheDocument()
  expect(within(card("카멜피아")).getByRole("checkbox")).not.toBeChecked()
  expect(payment()).toMatch("0원")
  expect(buyButton()).toBeDisabled()
})

it("구매하기 → 선택한 상품만 주문서로 (580,000원)", () => {
  renderCart()
  fireEvent.click(within(card("모닝 데스크")).getByRole("checkbox"))
  fireEvent.click(buyButton())
  expect(screen.getByText("ALFDEN - 카멜피아")).toBeInTheDocument()
  expect(screen.queryByText("ALFDEN - 모닝 데스크")).not.toBeInTheDocument()
  expect(screen.getByRole("button", { name: "580,000원 결제하기" })).toBeDisabled()
})

it("모두 삭제하면 빈 장바구니 안내", () => {
  renderCart()
  for (const name of ["카멜피아", "모닝 데스크"]) {
    fireEvent.click(within(card(name)).getByText(/icon_x_black/).closest("svg")!)
  }
  expect(screen.getByText("장바구니에 담은 상품이 없습니다.")).toBeInTheDocument()
})
