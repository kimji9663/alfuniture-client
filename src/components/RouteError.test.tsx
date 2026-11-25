import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"
import RouteError from "./RouteError"
import NotFound from "../pages/NotFound"
import { reloadOnceForChunkError } from "../utils/chunkError"

jest.mock("../utils/chunkError", () => ({
  ...jest.requireActual("../utils/chunkError"),
  reloadOnceForChunkError: jest.fn(),
}))
const reloadMock = reloadOnceForChunkError as jest.Mock

const Boom = () => {
  throw new Error("렌더링 중 오류")
}

const renderAt = (path: string) => {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        errorElement: <RouteError />,
        children: [
          { path: "boom", element: <Boom /> },
          {
            path: "lazy",
            lazy: () => Promise.reject(Object.assign(new Error("Loading chunk 42 failed."), { name: "ChunkLoadError" })),
          },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
    { initialEntries: [path] },
  )
  return render(<RouterProvider router={router} />)
}

beforeEach(() => {
  reloadMock.mockReset()
  // 라우터·React가 잡은 오류를 콘솔에 찍는 것은 의도된 동작이라 테스트 출력에서 숨긴다
  jest.spyOn(console, "error").mockImplementation(() => {})
  jest.spyOn(console, "warn").mockImplementation(() => {})
})
afterEach(() => jest.restoreAllMocks())

it("렌더링 오류 → 흰 화면 대신 '문제가 발생했어요'와 버튼", async () => {
  renderAt("/boom")
  expect(await screen.findByRole("heading", { name: "문제가 발생했어요" })).toBeInTheDocument()
  expect(screen.getByRole("button", { name: "다시 시도" })).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "홈으로" })).toHaveAttribute("href", "/")
  expect(screen.getByRole("main")).toBeInTheDocument()
  expect(reloadMock).not.toHaveBeenCalled()
})

it("청크 로드 실패 → 자동 새로 고침 시작, 로딩 안내", async () => {
  reloadMock.mockReturnValue(true)
  renderAt("/lazy")
  expect(await screen.findByRole("heading", { name: "새 버전을 불러오고 있어요" })).toBeInTheDocument()
  await waitFor(() => expect(reloadMock).toHaveBeenCalledTimes(1))
  expect(screen.getByRole("status")).toBeInTheDocument() // 스크린리더에 로딩 상태 알림
})

it("청크 로드 실패가 반복되면 새로 고침을 멈추고 수동 버튼", async () => {
  reloadMock.mockReturnValue(false)
  renderAt("/lazy")
  expect(await screen.findByRole("heading", { name: "페이지를 불러오지 못했어요" })).toBeInTheDocument()
  expect(screen.getByRole("button", { name: "다시 시도" })).toBeInTheDocument()
})

it("없는 주소 → '페이지를 찾을 수 없어요'", async () => {
  renderAt("/no-such-page")
  expect(await screen.findByRole("heading", { name: "페이지를 찾을 수 없어요" })).toBeInTheDocument()
  expect(screen.getByRole("button", { name: "홈으로" })).toBeInTheDocument()
})
