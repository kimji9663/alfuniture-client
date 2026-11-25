import { Locator, Page, expect } from "@playwright/test"

export const CART_KEY = "alfuniture:cart:v1"
export const LIKES_KEY = "alfuniture:likes:v1"

/** 장바구니 카드: 상품명이 들어 있고 체크박스를 가진 가장 가까운 상위 요소 */
export const cartCard = (page: Page, productName: string): Locator =>
  page.getByText(productName, { exact: true }).locator('xpath=ancestor::div[.//input[@type="checkbox"]][1]')

/** 장바구니 "결제금액" 줄의 금액 텍스트 */
export const cartPayment = async (page: Page) =>
  (await page.getByText("결제금액", { exact: true }).locator("xpath=..").innerText()).replace(/\s+/g, " ")

export const cartBuyButton = (page: Page) => page.getByRole("button", { name: /선택상품 구매하기/ })

/** 상품 카드(세로·가로)의 좋아요 버튼: 상품명을 포함하는 가장 가까운 상위 요소 안의 버튼 */
export const likeButton = (page: Page, productName: string): Locator =>
  page
    .getByText(productName, { exact: true })
    .first()
    .locator('xpath=ancestor::*[.//button[@aria-label="좋아요"]][1]')
    .getByRole("button", { name: "좋아요" })

/**
 * 상품 상세 하단의 "장바구니" / "구매하기" 버튼
 * 옵션 서랍이 열려 있어도 스크린리더에서 사라지지 않으므로(서랍을 스크롤 영역에 붙임) 역할(role)로 찾는다.
 * (이전에는 MUI가 aria-hidden을 붙여 글자로만 찾을 수 있었음)
 */
export const bottomButton = (page: Page, name: "장바구니" | "구매하기") =>
  page.getByRole("button", { name, exact: true })

/** 상품 상세에서 옵션 고르기 (색상 2개 + 옵션 1개) */
export async function chooseProductOptions(page: Page, colors = ["브라운", "화이트"], option = "블루") {
  for (const c of colors) await page.locator(`label[for="check_${c}"]`).click()
  await page.getByRole("button", { name: "컬러 선택" }).click()
  await page.getByRole("listitem").filter({ hasText: new RegExp(`^${option}$`) }).click()
}

/** 주문서 결제금액 영역(아코디언)을 펼치고 항목별 금액을 읽는다 */
export async function orderAmounts(page: Page) {
  const summary = page.locator(".MuiAccordionSummary-root").filter({ hasText: "결제금액" })
  if ((await summary.getAttribute("aria-expanded")) === "false") await summary.click()
  const row = async (label: string) =>
    (await page.locator(".MuiAccordionDetails-root p").filter({ hasText: label }).locator("xpath=following-sibling::p").first().innerText()).trim()
  return {
    productTotal: await row("총 상품금액"),
    coupon: await row("쿠폰 사용"),
    delivery: await row("배송비"),
    total: await row("총 결제금액"),
  }
}

export const payButton = (page: Page) => page.getByRole("button", { name: /결제하기$/ })

/** 쿠폰 서랍을 열고 셀렉트를 펼친다 */
export async function openCouponList(page: Page) {
  await page.getByRole("button", { name: "쿠폰 선택" }).click()
  await page.getByRole("button", { name: "쿠폰을 선택해 주세요" }).click()
}
export const couponItem = (page: Page, brand: string) =>
  page.locator("li.MuiListItemButton-root").filter({ hasText: new RegExp(`^${brand}`) })

/** localStorage를 미리 채운 채로 시작 (첫 페이지 로드 전에 주입) */
export async function seedStorage(page: Page, key: string, value: unknown) {
  await page.addInitScript(([k, v]) => {
    if (!window.sessionStorage.getItem("__seeded_" + k)) {
      window.localStorage.setItem(k, v)
      window.sessionStorage.setItem("__seeded_" + k, "1")
    }
  }, [key, JSON.stringify(value)])
}

/** 페이지 오류(처리되지 않은 예외)를 모은다 */
export function collectPageErrors(page: Page) {
  const errors: string[] = []
  page.on("pageerror", (e) => errors.push(e.message))
  return { errors, expectNone: () => expect(errors, errors.join("\n")).toEqual([]) }
}
