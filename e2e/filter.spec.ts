import { Page, expect, test } from "@playwright/test"
import { collectPageErrors } from "./helpers"

const ALL = ["원레인 4인용 소파", "알프든 옐로우소파", "제임스리 아트체어", "HC 아트 우든체어"]

/** 목록에 보이는 상품명 */
const shown = async (page: Page) => {
  const visible: string[] = []
  for (const name of ALL) if (await page.getByText(name, { exact: true }).isVisible()) visible.push(name)
  return visible
}
const filterButton = (page: Page, label: RegExp | string) =>
  page.locator("button").filter({ hasText: label }).first()
const drawer = (page: Page) => page.locator(".MuiDrawer-paper")

/** 필터 서랍을 열고 옵션을 고른 뒤 적용 */
async function applyOptions(page: Page, type: string, options: string[]) {
  await filterButton(page, new RegExp(`^${type}`)).click()
  for (const o of options) await drawer(page).getByText(o, { exact: true }).click()
  await drawer(page).getByRole("button", { name: "제품 보러가기" }).click()
  await expect(drawer(page)).toBeHidden()
}

test.describe("상품 목록 필터", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/shop")
    await expect(page.getByText(ALL[0], { exact: true })).toBeVisible()
  })

  test("처음엔 전체 4개", async ({ page }) => {
    expect(await shown(page)).toEqual(ALL)
    await expect(page.getByText(/^상품 \d+개$/)).toHaveCount(0)
  })

  test("같은 분류는 OR, 분류끼리는 AND, 버튼에 고른 값 요약", async ({ page }) => {
    const errors = collectPageErrors(page)
    await applyOptions(page, "컬러", ["옐로우", "퍼플"])
    expect(await shown(page)).toEqual(["원레인 4인용 소파", "알프든 옐로우소파"])
    await expect(page.getByText("상품 2개")).toBeVisible()
    await expect(filterButton(page, "옐로우 외1")).toBeVisible()

    await applyOptions(page, "재질", ["가죽/인조가죽"])
    expect(await shown(page)).toEqual(["원레인 4인용 소파"])
    await expect(page.getByText("상품 1개")).toBeVisible()

    await page.getByRole("button", { name: "필터 초기화" }).click()
    expect(await shown(page)).toEqual(ALL)
    await expect(filterButton(page, /^컬러$/)).toBeVisible()
    errors.expectNone()
  })

  test("가격 범위: 입력값 적용, 버튼 요약, 다시 열면 값 유지", async ({ page }) => {
    await filterButton(page, /^가격$/).click()
    await page.getByLabel("최소 가격").fill("200000")
    await page.getByLabel("최대 가격").fill("1500000")
    await drawer(page).getByRole("button", { name: "제품 보러가기" }).click()
    expect(await shown(page)).toEqual(["알프든 옐로우소파", "제임스리 아트체어"])
    await expect(filterButton(page, "20만~150만원")).toBeVisible()

    await filterButton(page, "20만~150만원").click()
    await expect(page.getByLabel("최소 가격")).toHaveValue("200000")
    await expect(page.getByLabel("최대 가격")).toHaveValue("1500000")
  })

  test("맞는 상품이 없으면 안내와 초기화 버튼", async ({ page }) => {
    await applyOptions(page, "컬러", ["핑크"])
    await expect(page.getByText("조건에 맞는 상품이 없습니다.")).toBeVisible()
    await expect(page.getByText("상품 0개")).toBeVisible()
    await page.getByRole("button", { name: "필터 초기화" }).last().click()
    expect(await shown(page)).toEqual(ALL)
  })

  test("고른 옵션 태그의 X로 해제", async ({ page }) => {
    await filterButton(page, /^스타일/).click()
    await drawer(page).getByText("모던", { exact: true }).click()
    await drawer(page).getByText("북유럽", { exact: true }).click()
    // 상단 태그 중 '모던' 해제
    await drawer(page).locator("div").filter({ hasText: /^모던$/ }).getByRole("button").click()
    await drawer(page).getByRole("button", { name: "제품 보러가기" }).click()
    expect(await shown(page)).toEqual(["알프든 옐로우소파", "HC 아트 우든체어"])
  })
})
