import { Page, expect, test } from "@playwright/test"
import { LIKES_KEY, collectPageErrors, likeButton } from "./helpers"

/** 찜 목록 화면의 상품명 (표시 순서대로) */
const likedNames = (page: Page) =>
  page.locator(".MuiPaper-root").evaluateAll((cards) => cards.map((c) => c.querySelectorAll("p")[2]?.textContent?.trim() ?? ""))

test.describe("찜", () => {
  test("첫 방문: 예시 4개, 하트가 모두 켜져 있다", async ({ page }) => {
    await page.goto("/like")
    expect(await likedNames(page)).toEqual(["릴렉스 체어 (3colors)", "1인 모던 쇼파", "기획전 시티 쇼파", "올드 가죽쇼파"])
    const hearts = page.getByRole("button", { name: "좋아요" })
    await expect(hearts).toHaveCount(4)
    for (const h of await hearts.all()) await expect(h).toHaveAttribute("aria-pressed", "true")
  })

  test("상품 목록에서 찜 → 새로 고침 후 유지 → 찜 목록 맨 앞에 이미지와 함께", async ({ page }) => {
    await page.goto("/shop")
    const heart = likeButton(page, "원레인 4인용 소파")
    await expect(heart).toHaveAttribute("aria-pressed", "false")
    await heart.click()
    await expect(heart).toHaveAttribute("aria-pressed", "true")

    await page.reload()
    await expect(likeButton(page, "원레인 4인용 소파")).toHaveAttribute("aria-pressed", "true")

    await page.goto("/like")
    const names = await likedNames(page)
    expect(names[0]).toBe("원레인 4인용 소파")
    expect(names).toHaveLength(5)
    const img = page.locator(".MuiPaper-root").first().locator("img")
    await expect(img).toHaveAttribute("src", /\.webp$/)
    expect(await img.evaluate((i: HTMLImageElement) => i.complete && i.naturalWidth > 0)).toBe(true)
  })

  test("홈 카드·상품 상세에서 찜 → 찜 목록 최근 찜한 순", async ({ page }) => {
    await page.goto("/")
    await likeButton(page, "Basic Sofa").click()
    await page.goto("/shop/product_view")
    await page.getByRole("button", { name: "좋아요" }).first().click()
    await page.goto("/like")
    expect((await likedNames(page)).slice(0, 2)).toEqual(["카멜프튼", "Basic Sofa"])
  })

  test("카테고리 필터 '소파'", async ({ page }) => {
    await page.goto("/shop/product_view")
    await page.getByRole("button", { name: "좋아요" }).first().click()
    await page.goto("/like")
    await page.locator('label[for="소파"]').click()
    const names = await likedNames(page)
    expect(names).toContain("카멜프튼")
    expect(names).not.toContain("릴렉스 체어 (3colors)")
  })

  test("찜 목록에서 해제하면 목록에서 빠지고 상품 목록에서도 꺼진다", async ({ page }) => {
    await page.goto("/shop")
    await likeButton(page, "원레인 4인용 소파").click()
    await page.goto("/like")
    await likeButton(page, "원레인 4인용 소파").click()
    expect(await likedNames(page)).not.toContain("원레인 4인용 소파")
    await page.goto("/shop")
    await expect(likeButton(page, "원레인 4인용 소파")).toHaveAttribute("aria-pressed", "false")
  })

  test("다른 탭에서 찜하면 이 탭에 반영된다", async ({ context }) => {
    const a = await context.newPage()
    const b = await context.newPage()
    await a.goto("/shop")
    await b.goto("/shop")
    await likeButton(b, "알프든 옐로우소파").click()
    await expect(likeButton(a, "알프든 옐로우소파")).toHaveAttribute("aria-pressed", "true")
  })

  test("모두 해제하면 빈 목록 안내, 깨진 저장값도 오류 없이 처리", async ({ page }) => {
    const errors = collectPageErrors(page)
    await page.goto("/like")
    const pressed = page.locator('button[aria-label="좋아요"][aria-pressed="true"]')
    while ((await pressed.count()) > 0) await pressed.first().click()
    await expect(page.getByText("상품이 없습니다.")).toBeVisible()

    await page.evaluate((k) => localStorage.setItem(k, "{oops"), LIKES_KEY)
    await page.reload()
    await expect(page.getByText("상품이 없습니다.")).toBeVisible()
    errors.expectNone()
  })
})
