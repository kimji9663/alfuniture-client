import fs from "fs"
import path from "path"
import { Page, expect, test } from "@playwright/test"

const indexHtml = fs.readFileSync(path.join(__dirname, "../build/index.html"), "utf8")

/**
 * 새 버전 배포 직후 상황 재현: 예전 청크 파일이 지워져서
 * Netlify(_redirects: /* /index.html 200)가 JS 대신 index.html을 돌려주는 경우
 */
async function serveHtmlForChunks(page: Page, shouldBreak: () => boolean) {
  await page.route(/\/static\/js\/.+\.chunk\.js$/, (route) =>
    shouldBreak() ? route.fulfill({ status: 200, contentType: "text/html", body: indexHtml }) : route.continue(),
  )
}

test.describe("오류 처리", () => {
  test("없는 주소 → 404 안내 → 홈으로", async ({ page }) => {
    await page.goto("/no-such-page")
    await expect(page.getByRole("heading", { name: "페이지를 찾을 수 없어요" })).toBeVisible()
    await expect(page.getByRole("main")).toHaveCount(1) // Layout 안에서 main 중첩 없음
    await page.getByRole("button", { name: "홈으로" }).click()
    await expect(page.getByText("2023 Furniture")).toBeVisible()
  })

  test("배포 후 청크 로드 실패 → 자동으로 한 번 새로 고쳐서 복구", async ({ page }) => {
    // HTML 문서 요청 수 (처음 접속 1, 새로 고침마다 +1). 새로 고침은 문서부터 다시 받으므로 청크 요청보다 먼저 센다
    let documents = 0
    page.on("request", (r) => { if (r.resourceType() === "document") documents++ })
    await page.goto("/")
    await expect(page.getByText("2023 Furniture")).toBeVisible()
    // 새로 고침 전까지만 청크 요청을 index.html로 응답 (새로 고침 후에는 새 버전 청크가 정상 응답)
    await serveHtmlForChunks(page, () => documents === 1)

    await page.getByRole("link", { name: "LIKE" }).click() // /like 청크 요청 → 실패
    // 자동 새로 고침 후 새 청크를 정상으로 받아 찜 화면 표시
    await expect(page.getByRole("tab", { name: "상품" })).toBeVisible({ timeout: 15_000 })
    await expect(page).toHaveURL(/\/like$/)
    expect(documents).toBe(2) // 새로 고침은 정확히 한 번
  })

  test("새로 고친 뒤에도 계속 실패하면 멈추고 '다시 시도' 버튼 (무한 새로 고침 없음)", async ({ page }) => {
    let loads = 0
    page.on("load", () => loads++)
    await page.goto("/")
    await expect(page.getByText("2023 Furniture")).toBeVisible()
    await serveHtmlForChunks(page, () => true) // 계속 실패

    await page.getByRole("link", { name: "LIKE" }).click()
    await expect(page.getByRole("heading", { name: "페이지를 불러오지 못했어요" })).toBeVisible({ timeout: 15_000 })
    await expect(page.getByRole("button", { name: "다시 시도" })).toBeVisible()
    await page.waitForTimeout(1500)
    expect(loads).toBe(2) // 처음 1번 + 자동 새로 고침 1번
  })
})
