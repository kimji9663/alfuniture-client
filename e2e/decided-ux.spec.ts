import { expect, test } from "@playwright/test"
import { bottomButton } from "./helpers"

test.describe("옵션 서랍 접근성", () => {
  test("서랍이 열려도 하단 버튼이 스크린리더에서 보이고 Tab으로 갈 수 있다", async ({ page }) => {
    await page.goto("/shop/product_view")
    await bottomButton(page, "구매하기").click() // 서랍 열기
    await expect(page.getByText("색상조합")).toBeVisible()

    // 하단 버튼은 aria-hidden 조상 없이 접근 가능
    for (const name of ["장바구니", "구매하기"] as const) {
      const hidden = await bottomButton(page, name).evaluate((el) => !!el.closest('[aria-hidden="true"]'))
      expect(hidden).toBe(false)
    }
    // 서랍 뒤 본문(가려진 내용)은 숨김
    const bodyHidden = await page.getByText("배송비 및 관부가세 포함").evaluate((el) => !!el.closest('[aria-hidden="true"]'))
    expect(bodyHidden).toBe(true)

    // 키보드로 하단 버튼까지 이동
    await bottomButton(page, "장바구니").focus()
    await expect(bottomButton(page, "장바구니")).toBeFocused()
  })
})

test.describe("마이페이지 쿠폰 만료 표시", () => {
  test("만료된 쿠폰은 'D--…' 대신 '기간 만료'로, 받기 버튼은 비활성", async ({ page }) => {
    await page.goto("/mypage/coupon")
    await expect(page.getByText(/기간 만료/).first()).toBeVisible()
    expect(await page.locator("body").innerText()).not.toMatch(/D--\d/)

    // 쿠폰 받기 탭: 만료 쿠폰의 버튼은 비활성
    await page.getByRole("tab").nth(1).click()
    const expiredButtons = page.getByRole("button", { name: "기간 만료" })
    await expect(expiredButtons.first()).toBeDisabled()
    await expect(page.getByRole("button", { name: "쿠폰 받기" })).toHaveCount(0) // 목업은 모두 만료
  })
})

test.describe("주문 완료 화면", () => {
  test("주소창으로 바로 들어오면 안내", async ({ page }) => {
    await page.goto("/order/complete")
    await expect(page.getByRole("heading", { name: "주문 정보가 없어요" })).toBeVisible()
    await page.getByRole("button", { name: "주문 내역 보기" }).click()
    await expect(page).toHaveURL(/\/mypage\/my_order$/)
  })
})
