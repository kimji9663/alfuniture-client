import { expect, test } from "@playwright/test"
import { CART_KEY, cartBuyButton, cartCard, cartPayment, chooseProductOptions, collectPageErrors, bottomButton } from "./helpers"

test.describe("장바구니", () => {
  test("첫 방문: 예시 상품 2개, 결제금액 880,000원, 버튼은 상품 종류 수", async ({ page }) => {
    await page.goto("/cart")
    await expect(cartCard(page, "카멜피아")).toBeVisible()
    await expect(cartCard(page, "모닝 데스크")).toBeVisible()
    expect(await cartPayment(page)).toContain("880,000원")
    await expect(cartBuyButton(page)).toHaveText("2개 선택상품 구매하기")
  })

  test("수량 변경은 새로 고침과 페이지 이동 뒤에도 유지된다", async ({ page }) => {
    await page.goto("/cart")
    await cartCard(page, "카멜피아").getByRole("button", { name: "+" }).click()
    expect(await cartPayment(page)).toContain("1,120,000원")

    await page.reload()
    expect(await cartPayment(page)).toContain("1,120,000원")

    await page.goto("/")
    await page.getByRole("link", { name: "알림" }).waitFor()
    await page.goto("/cart")
    expect(await cartPayment(page)).toContain("1,120,000원")
  })

  test("선택 해제 후 다른 상품을 삭제해도 선택 상태가 어긋나지 않는다 (이전 인덱스 버그)", async ({ page }) => {
    await page.goto("/cart")
    await cartCard(page, "카멜피아").getByRole("checkbox").uncheck()
    expect(await cartPayment(page)).toContain("300,000원")

    await cartCard(page, "모닝 데스크").locator("svg").last().click() // X 아이콘
    await expect(page.getByText("모닝 데스크", { exact: true })).toHaveCount(0)
    await expect(cartCard(page, "카멜피아").getByRole("checkbox")).not.toBeChecked()
    expect(await cartPayment(page)).toMatch(/결제금액 0원/)
    await expect(cartBuyButton(page)).toBeDisabled()
  })

  test("상품 상세에서 옵션 없이 담으면 필수 옵션 안내", async ({ page }) => {
    await page.goto("/shop/product_view")
    await bottomButton(page, "장바구니").click() // 옵션 서랍 열기
    await bottomButton(page, "장바구니").click()
    await expect(page.getByText("필수 옵션을 선택해주세요.")).toBeVisible()
  })

  test("색상은 2개까지만 선택된다", async ({ page }) => {
    await page.goto("/shop/product_view")
    await bottomButton(page, "장바구니").click()
    for (const c of ["브라운", "화이트", "블랙"]) await page.locator(`label[for="check_${c}"]`).click()
    await expect(page.locator("#check_브라운")).toBeChecked()
    await expect(page.locator("#check_화이트")).toBeChecked()
    await expect(page.locator("#check_블랙")).not.toBeChecked()
  })

  test("상품 상세에서 담기 → 안내 → 장바구니에 옵션과 함께 표시, 같은 옵션은 수량 합산", async ({ page }) => {
    const errors = collectPageErrors(page)
    await page.goto("/shop/product_view")
    await bottomButton(page, "장바구니").click()
    await chooseProductOptions(page)
    await bottomButton(page, "장바구니").click()
    await expect(page.getByText(/장바구니에 담으시겠습/)).toBeVisible()
    await page.getByRole("button", { name: "확인" }).click()
    await expect(page.getByText("장바구니에 담았습니다.")).toBeVisible()
    await page.getByRole("button", { name: "장바구니 보기" }).click()

    await expect(page).toHaveURL(/\/cart$/)
    const card = cartCard(page, "카멜프튼")
    await expect(card).toContainText("브라운/화이트")
    await expect(card).toContainText("블루")
    await expect(card.getByRole("checkbox")).toBeChecked() // 새로 담은 상품은 자동 선택
    expect(await cartPayment(page)).toContain("2,474,500원") // 240,000×2 + 100,000 + 300,000 + 1,594,500
    await expect(cartBuyButton(page)).toHaveText("3개 선택상품 구매하기")

    // 같은 옵션으로 다시 담기
    await page.goto("/shop/product_view")
    await bottomButton(page, "장바구니").click()
    await chooseProductOptions(page)
    await bottomButton(page, "장바구니").click()
    await page.getByRole("button", { name: "확인" }).click()
    await page.goto("/cart")
    await expect(page.getByText("카멜프튼", { exact: true })).toHaveCount(1)
    await expect(cartCard(page, "카멜프튼").getByLabel("카멜프튼 수량")).toHaveValue("2")
    errors.expectNone()
  })

  test("담기 확인을 연속으로 눌러도 한 번만 담긴다", async ({ page }) => {
    await page.goto("/shop/product_view")
    await bottomButton(page, "장바구니").click()
    await chooseProductOptions(page)
    await bottomButton(page, "장바구니").click()
    // 같은 버튼을 화면이 바뀌기 전에 두 번 클릭
    await page.getByRole("button", { name: "확인" }).evaluate((b: HTMLButtonElement) => { b.click(); b.click() })
    const count = await page.evaluate((k) => JSON.parse(localStorage.getItem(k) ?? "[]").find((i: any) => i.productName === "카멜프튼")?.count, CART_KEY)
    expect(count).toBe(1)
  })

  test("다른 탭에서 삭제하면 이 탭에 반영된다", async ({ context }) => {
    const a = await context.newPage()
    const b = await context.newPage()
    await a.goto("/cart")
    await b.goto("/cart")
    await cartCard(b, "모닝 데스크").locator("svg").last().click()
    await expect(a.getByText("모닝 데스크", { exact: true })).toHaveCount(0)
  })

  test("저장값이 깨져도 오류 없이 빈 장바구니", async ({ page }) => {
    const errors = collectPageErrors(page)
    await page.goto("/cart")
    await page.evaluate((k) => localStorage.setItem(k, "{not json"), CART_KEY)
    await page.reload()
    await expect(page.getByText("장바구니에 담은 상품이 없습니다.")).toBeVisible()
    errors.expectNone()
  })
})
