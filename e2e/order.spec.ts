import { Page, expect, test } from "@playwright/test"
import {
  CART_KEY, cartBuyButton, cartCard, chooseProductOptions, collectPageErrors, couponItem, openCouponList, orderAmounts,
  payButton, seedStorage, bottomButton,
} from "./helpers"

/** 장바구니에서 카멜피아(240,000 × 2)만 선택해 주문서로 */
async function orderCamelpiaOnly(page: Page) {
  await page.goto("/cart")
  await cartCard(page, "모닝 데스크").getByRole("checkbox").uncheck()
  await cartBuyButton(page).click()
  await expect(page).toHaveURL(/\/order$/)
}

/** 필수 정보 입력 (주소는 외부 다음 우편번호 대신 컴포넌트의 onComplete를 직접 호출) */
async function fillRequired(page: Page) {
  await page.locator("input[name=recipient]").nth(0).fill("홍길동")
  await page.locator("input[name=recipient]").nth(1).fill("01012345678")
  await page.getByRole("button", { name: "우편번호 검색" }).click()
  const ok = await page.evaluate(() => {
    for (const el of Array.from(document.querySelectorAll(".MuiModal-root div"))) {
      const key = Object.keys(el).find((k) => k.startsWith("__reactFiber"))
      for (let f = key ? (el as any)[key] : null; f; f = f.return) {
        if (typeof f.memoizedProps?.onComplete === "function") {
          f.memoizedProps.onComplete({ zonecode: "06236", address: "서울 강남구 테헤란로 123" })
          return true
        }
      }
    }
    return false
  })
  expect(ok).toBe(true)
  // 약관 전체 동의 (주문서의 "기본 배송지로 등록"과 id가 겹쳐 두 번째 요소)
  await page.locator("#check_agree_all").nth(1).dispatchEvent("click")
  await page.locator(".MuiAccordionSummary-root").filter({ hasText: "결제방법" }).click()
  await page.getByRole("button", { name: /선택하기/ }).click()
  await page.locator("li", { hasText: "신한카드" }).click() // ListItemButton(li)은 role=button
}

test.describe("주문서", () => {
  test("넘겨받은 상품 없이 들어오면 안내", async ({ page }) => {
    await page.goto("/order")
    await expect(page.getByText("주문할 상품이 없습니다.")).toBeVisible()
  })

  test("장바구니에서 고른 상품만, 480,000 + 빠른배송 100,000 = 580,000원", async ({ page }) => {
    await orderCamelpiaOnly(page)
    await expect(page.getByText("ALFDEN - 카멜피아")).toBeVisible()
    await expect(page.getByText("ALFDEN - 모닝 데스크")).toHaveCount(0)
    expect(await orderAmounts(page)).toEqual({ productTotal: "480,000원", coupon: "0원", delivery: "100,000원", total: "580,000원" })
    await expect(payButton(page)).toHaveText("580,000원 결제하기")
    await expect(payButton(page)).toBeDisabled() // 필수 정보 입력 전

    await page.reload() // location.state 유지
    await expect(page.getByText("ALFDEN - 카멜피아")).toBeVisible()
  })

  test("쿠폰 목록: 전 상품/브랜드 묶음, ALFDEN만 있으면 브랜드 쿠폰 선택 불가", async ({ page }) => {
    await orderCamelpiaOnly(page)
    await openCouponList(page)
    await expect(page.locator(".MuiListSubheader-root")).toHaveText(["전 상품 쿠폰", "브랜드 쿠폰"])
    await expect(couponItem(page, "Alfuniture")).toContainText("주문 상품 전체")
    for (const brand of ["Aerobiey", "ONERAIN", "James Lee", "CLODS"]) {
      await expect(couponItem(page, brand)).toHaveAttribute("aria-disabled", "true")
      await expect(couponItem(page, brand)).toContainText("적용 가능한 상품 없음")
    }
    await expect(page.getByText("5개 (이 주문에 사용 가능 1개)")).toBeVisible()
  })

  test("전 상품 쿠폰 → 일반배송 → 쿠폰 취소", async ({ page }) => {
    await orderCamelpiaOnly(page)
    await openCouponList(page)
    await couponItem(page, "Alfuniture").click()
    await expect(page.getByText(/전 상품 10% -48,000원/)).toBeVisible()
    expect((await orderAmounts(page)).total).toBe("532,000원")

    await page.locator(".MuiAccordionSummary-root").filter({ hasText: "배송방법 선택" }).click()
    await page.locator('label[for="check_normal"]').click()
    expect(await orderAmounts(page)).toMatchObject({ delivery: "50,000원", total: "482,000원" })

    await page.getByRole("button", { name: "취소" }).click()
    expect((await orderAmounts(page)).total).toBe("530,000원")
  })

  test("결제: 필수 정보 입력 후 활성, 연속 클릭해도 한 번, 주문 완료 화면, 주문한 상품만 장바구니에서 빠짐", async ({ page }) => {
    const errors = collectPageErrors(page)
    await orderCamelpiaOnly(page)
    await fillRequired(page)
    await expect(payButton(page)).toBeEnabled()
    await payButton(page).evaluate((b: HTMLButtonElement) => { b.click(); b.click() })

    // 주문 완료 화면: 주문번호, 상품, 결제금액
    await expect(page).toHaveURL(/\/order\/complete$/)
    await expect(page.getByRole("heading", { name: "주문이 완료되었어요" })).toBeVisible()
    await expect(page.getByText(/주문번호 \d{8}-\d{6}/)).toBeVisible()
    await expect(page.getByText("ALFDEN - 카멜피아")).toBeVisible()
    await expect(page.getByText("주문 상품 1개")).toBeVisible()
    await expect(page.locator("section[aria-label='결제 정보']")).toContainText("총 결제금액580,000원")

    const cart = await page.evaluate((k) => JSON.parse(localStorage.getItem(k) ?? "[]").map((i: any) => i.productName), CART_KEY)
    expect(cart).toEqual(["모닝 데스크"])

    // 뒤로 가기로 결제 화면에 돌아오지 않는다 (replace)
    await page.goBack()
    await expect(page).toHaveURL(/\/cart$/)

    await page.goForward()
    await page.getByRole("button", { name: "쇼핑 계속하기" }).click()
    await expect(page.getByText("2023 Furniture")).toBeVisible()
    errors.expectNone()
  })

  test("상품 상세 바로 구매: 카멜프튼 1,694,500원, 장바구니에는 담지 않음", async ({ page }) => {
    await page.goto("/shop/product_view")
    await expect(page.getByText("1,594,500원")).toBeVisible()
    await bottomButton(page, "구매하기").click()
    await chooseProductOptions(page)
    await bottomButton(page, "구매하기").click()
    await expect(page).toHaveURL(/\/order$/)
    await expect(page.getByText("ALFDN - 카멜프튼")).toBeVisible()
    await expect(page.getByText("브라운/화이트")).toBeVisible()
    expect((await orderAmounts(page)).total).toBe("1,694,500원")
    const cartLen = await page.evaluate((k) => JSON.parse(localStorage.getItem(k) ?? "[]").length, CART_KEY)
    expect(cartLen).toBe(2) // 예시 2개 그대로
  })

  test.describe("브랜드 쿠폰 (One Rain 3,230,000 + ALFDEN 300,000)", () => {
    test.beforeEach(async ({ page }) => {
      const items = [
        { productId: "onerain-sofa", shopName: "One Rain", modelName: "", productName: "원레인 4인용 소파", option1: "기본", option2: null, price: 3230000, count: 1, deliveryCharge: 0 },
        { productId: "morning-desk", shopName: "ALFDEN", modelName: "", productName: "모닝 데스크", option1: "옐로우 우든", option2: null, price: 300000, count: 1, deliveryCharge: 0 },
      ].map((i) => ({ ...i, id: [i.productId, i.option1, i.option2 ?? ""].join("|") }))
      await seedStorage(page, CART_KEY, items)
      await page.goto("/cart")
      await cartBuyButton(page).click()
      await openCouponList(page)
    })

    test("ONERAIN 쿠폰만 사용 가능 ('One Rain' 표기도 인식)", async ({ page }) => {
      await expect(couponItem(page, "ONERAIN")).toContainText("ONERAIN 상품 3,230,000원에 적용")
      await expect(couponItem(page, "ONERAIN")).not.toHaveAttribute("aria-disabled", "true")
      await expect(couponItem(page, "James Lee")).toHaveAttribute("aria-disabled", "true")
      await expect(page.getByText("5개 (이 주문에 사용 가능 2개)")).toBeVisible()
    })

    test("ONERAIN 쿠폰은 One Rain 상품에만 할인 → 3,307,000원, 전 상품 쿠폰으로 바꾸면 3,277,000원", async ({ page }) => {
      await couponItem(page, "ONERAIN").click()
      await expect(page.getByText(/ONERAIN 10% -323,000원/)).toBeVisible()
      expect(await orderAmounts(page)).toMatchObject({ coupon: "-323,000원", total: "3,307,000원" })

      await page.getByRole("button", { name: "취소" }).click()
      await openCouponList(page)
      await couponItem(page, "Alfuniture").click()
      expect(await orderAmounts(page)).toMatchObject({ coupon: "-353,000원", total: "3,277,000원" })
    })
  })
})
