import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
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

// 장바구니 카드의 컨트롤은 상품명이 들어간 접근성 이름으로 찾는다 (예: "카멜피아 선택", "카멜피아 삭제")
const checkbox = (name: string) => screen.getByRole("checkbox", { name: `${name} 선택` })
const deleteButton = (name: string) => screen.getByRole("button", { name: `${name} 삭제` })
const plusButton = (name: string) => screen.getByRole("button", { name: `${name} 수량 늘리기` })
const total = () => screen.getByTestId("cart-total")
const buyButton = () => screen.getByRole("button", { name: /선택상품 구매하기/ })

beforeEach(() => window.localStorage.clear())

it("예시 상품 2개, 결제금액 880,000원, 버튼은 상품 종류 수 \"2개\"", () => {
  renderCart()
  expect(total()).toHaveTextContent("880,000원")
  expect(buyButton()).toHaveTextContent("2개 선택상품 구매하기")
})

it("수량 + → 결제금액·수량 표시 갱신, 버튼 숫자는 종류 수 그대로", () => {
  renderCart()
  fireEvent.click(plusButton("카멜피아"))
  expect(total()).toHaveTextContent("1,120,000원")
  expect(screen.getByLabelText("카멜피아 수량")).toHaveValue("3")
  expect(buyButton()).toHaveTextContent("2개 선택상품")
})

it("선택 해제 후 다른 상품을 삭제해도 선택 상태가 어긋나지 않는다 (이전 인덱스 버그)", () => {
  renderCart()
  fireEvent.click(checkbox("카멜피아"))
  expect(total()).toHaveTextContent("300,000원")
  fireEvent.click(deleteButton("모닝 데스크"))
  expect(screen.queryByText("모닝 데스크")).not.toBeInTheDocument()
  expect(checkbox("카멜피아")).not.toBeChecked()
  expect(total()).toHaveTextContent(/^0원$/)
  expect(buyButton()).toBeDisabled()
})

it("구매하기 → 선택한 상품만 주문서로 (580,000원)", () => {
  renderCart()
  fireEvent.click(checkbox("모닝 데스크"))
  fireEvent.click(buyButton())
  expect(screen.getByText("ALFDEN - 카멜피아")).toBeInTheDocument()
  expect(screen.queryByText("ALFDEN - 모닝 데스크")).not.toBeInTheDocument()
  expect(screen.getByRole("button", { name: "580,000원 결제하기" })).toBeDisabled()
})

it("모두 삭제하면 빈 장바구니 안내", () => {
  renderCart()
  fireEvent.click(deleteButton("카멜피아"))
  fireEvent.click(deleteButton("모닝 데스크"))
  expect(screen.getByText("장바구니에 담은 상품이 없습니다.")).toBeInTheDocument()
})
