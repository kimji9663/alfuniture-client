import fs from "fs"
import path from "path"
import { expect, test } from "@playwright/test"
import { collectPageErrors } from "./helpers"

// App.tsx 라우터에 등록된 모든 경로 (새 경로를 추가하면 자동으로 포함됨, 404용 "*"는 errors.spec.ts에서 따로)
const routes = Array.from(
  new Set([...fs.readFileSync(path.join(__dirname, "../src/App.tsx"), "utf8").matchAll(/path:\s*"([^"]+)"/g)].map((m) => m[1])),
).filter((r) => r.startsWith("/"))

test.describe("모든 경로 스모크", () => {
  test("경로 목록을 읽었다", () => {
    expect(routes.length).toBeGreaterThan(30)
  })

  for (const route of routes) {
    test(`${route} 렌더링, 예외·청크 로드 실패 없음`, async ({ page }) => {
      const errors = collectPageErrors(page)
      const failed: string[] = []
      page.on("requestfailed", (r) => failed.push(r.url()))
      await page.goto(route)
      await expect(page.locator("#root")).not.toBeEmpty()
      await expect.poll(async () => (await page.locator("#root").innerText()).trim().length).toBeGreaterThan(0)
      expect(failed.filter((u) => u.includes("/static/js/"))).toEqual([])
      // 같은 id가 두 번 나오면 라벨·스크린리더가 엉뚱한 요소를 가리킨다
      const duplicateIds = await page.evaluate(() => {
        const seen = new Map<string, number>()
        document.querySelectorAll("[id]").forEach((el) => seen.set(el.id, (seen.get(el.id) ?? 0) + 1))
        return Array.from(seen).filter(([id, n]) => id && n > 1).map(([id, n]) => `${id}×${n}`)
      })
      expect(duplicateIds, `중복 id: ${duplicateIds.join(", ")}`).toEqual([])
      errors.expectNone()
    })
  }
})

test("하단 내비게이션: 새로 고침 없이 페이지 이동 (코드 분할 청크 로드)", async ({ page }) => {
  await page.goto("/")
  await page.evaluate(() => ((window as any).__spa = true))
  for (const [label, url] of [["STYLE", /\/style$/], ["SHOP", /\/shop\/shop_all$/], ["LIKE", /\/like$/], ["MY", /\/mypage$/], ["HOME", /\/home$/]] as const) {
    await page.getByRole("link", { name: label }).click()
    await expect(page).toHaveURL(url)
  }
  expect(await page.evaluate(() => (window as any).__spa)).toBe(true)
})
