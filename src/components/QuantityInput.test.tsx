import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import QuantityInput from "./QuantityInput"

const setup = (value = 2) => {
  const onCommit = jest.fn()
  const utils = render(<QuantityInput value={value} onCommit={onCommit} label="카멜피아 수량" />)
  const input = screen.getByRole("textbox", { name: "카멜피아 수량" }) as HTMLInputElement
  return { ...utils, input, onCommit }
}

it("숫자를 입력하고 포커스를 빼면 확정", () => {
  const { input, onCommit } = setup()
  fireEvent.change(input, { target: { value: "5" } })
  expect(onCommit).not.toHaveBeenCalled() // 입력 중에는 아직 반영하지 않음
  fireEvent.blur(input)
  expect(onCommit).toHaveBeenCalledWith(5)
})

it("Enter로 확정", () => {
  const { input, onCommit } = setup()
  input.focus()
  fireEvent.change(input, { target: { value: "7" } })
  fireEvent.keyDown(input, { key: "Enter" })
  expect(onCommit).toHaveBeenCalledWith(7)
})

it("숫자가 아닌 글자는 입력되지 않는다", () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: "3a-" } })
  expect(input).toHaveValue("3")
})

it("99를 넘으면 99, 0이면 1로 맞춘다", () => {
  const { input, onCommit } = setup()
  fireEvent.change(input, { target: { value: "150" } })
  fireEvent.blur(input)
  expect(onCommit).toHaveBeenLastCalledWith(99)
  expect(input).toHaveValue("99")

  fireEvent.change(input, { target: { value: "0" } })
  fireEvent.blur(input)
  expect(onCommit).toHaveBeenLastCalledWith(1)
  expect(input).toHaveValue("1")
})

it("빈 칸으로 두면 원래 수량으로 되돌리고 확정하지 않는다", () => {
  const { input, onCommit } = setup(2)
  fireEvent.change(input, { target: { value: "" } })
  fireEvent.blur(input)
  expect(input).toHaveValue("2")
  expect(onCommit).not.toHaveBeenCalled()
})

it("Escape로 입력 취소", () => {
  const { input, onCommit } = setup(2)
  input.focus()
  fireEvent.change(input, { target: { value: "9" } })
  fireEvent.keyDown(input, { key: "Escape" })
  expect(input).toHaveValue("2")
  expect(onCommit).not.toHaveBeenCalled()
})

it("같은 수량이면 확정하지 않는다", () => {
  const { input, onCommit } = setup(2)
  fireEvent.change(input, { target: { value: "2" } })
  fireEvent.blur(input)
  expect(onCommit).not.toHaveBeenCalled()
})

it("+/− 버튼 등으로 값이 바뀌면 표시를 맞춘다", () => {
  const onCommit = jest.fn()
  const { rerender } = render(<QuantityInput value={2} onCommit={onCommit} label="수량" />)
  rerender(<QuantityInput value={4} onCommit={onCommit} label="수량" />)
  expect(screen.getByRole("textbox", { name: "수량" })).toHaveValue("4")
})
