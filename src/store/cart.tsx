import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react"
import { sofa01, table01 } from "../assets/images/product"

/**
 * 장바구니 전역 상태 (Context + useReducer)
 * - 앱 어디서나 useCart()로 읽고 바꾼다.
 * - localStorage에 저장해서 새로 고침·페이지 이동 후에도 유지한다. 다른 탭과도 동기화한다.
 * - 이미지 URL은 빌드마다 해시가 바뀔 수 있어 저장하지 않고, productId로 PRODUCT_IMAGES에서 찾는다.
 */

export interface CartItem {
  /** 장바구니 줄 ID: 같은 상품이라도 옵션이 다르면 다른 줄 */
  id: string
  productId: string
  shopName: string
  modelName: string
  productName: string
  option1: string
  option2: string | null
  /** 단가 */
  price: number
  count: number
  deliveryCharge: number
}

export type NewCartItem = Omit<CartItem, "id" | "count"> & { count?: number }

/** 장바구니에 담을 수 있는 상품의 이미지 (백엔드 연동 전 임시 카탈로그) */
const PRODUCT_IMAGES: Record<string, string> = {
  camelpia: sofa01,
  "morning-desk": table01,
  camelfton: sofa01,
}
export const productImage = (productId: string) => PRODUCT_IMAGES[productId] ?? ""

export const lineId = (item: Pick<CartItem, "productId" | "option1" | "option2">) =>
  [item.productId, item.option1, item.option2 ?? ""].join("|")

/** 처음 방문했을 때 보여 줄 예시 상품 (기존 cartProductData와 같은 내용) */
const SEED: CartItem[] = [
  { productId: "camelpia", shopName: "ALFDEN", modelName: "[23Series] AD-388", productName: "카멜피아", option1: "베이지", option2: "라탄", price: 240000, count: 2, deliveryCharge: 100000 },
  { productId: "morning-desk", shopName: "ALFDEN", modelName: "[23Series] AD-388", productName: "모닝 데스크", option1: "옐로우 우든", option2: null, price: 300000, count: 1, deliveryCharge: 0 },
].map((item) => ({ ...item, id: lineId(item) }))

const STORAGE_KEY = "alfuniture:cart:v1"
export const MAX_COUNT = 99

type Action =
  | { type: "add"; item: NewCartItem }
  | { type: "remove"; id: string }
  | { type: "setCount"; id: string; count: number }
  | { type: "replace"; items: CartItem[] }

/** 수량은 1~99 정수 */
export const clampCount = (n: number) => Math.min(MAX_COUNT, Math.max(1, Math.floor(n) || 1))

function reducer(items: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "add": {
      const id = lineId(action.item)
      const count = clampCount(action.item.count ?? 1)
      const existing = items.find((i) => i.id === id)
      if (existing) return items.map((i) => (i.id === id ? { ...i, count: clampCount(i.count + count) } : i))
      return [...items, { ...action.item, id, count }]
    }
    case "remove":
      return items.filter((i) => i.id !== action.id)
    case "setCount":
      return items.map((i) => (i.id === action.id ? { ...i, count: clampCount(action.count) } : i))
    case "replace":
      return action.items
  }
}

const isCartItem = (v: any): v is CartItem =>
  v && typeof v.id === "string" && typeof v.productId === "string" && typeof v.productName === "string" &&
  typeof v.price === "number" && typeof v.count === "number" && typeof v.deliveryCharge === "number"

/** 저장된 장바구니를 읽는다. 저장된 적이 없으면 예시 상품, 깨진 값이면 빈 장바구니 */
function load(): CartItem[] {
  let raw: string | null
  try {
    raw = window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return SEED // 저장소를 쓸 수 없는 환경
  }
  if (raw === null) return SEED
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter(isCartItem) : []
  } catch {
    return []
  }
}

interface CartContextValue {
  items: CartItem[]
  addItem: (item: NewCartItem) => void
  removeItem: (id: string) => void
  setCount: (id: string, count: number) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, undefined, load)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // 저장소를 쓸 수 없는 환경(사생활 보호 모드 등)에서는 메모리에만 유지
    }
  }, [items])

  // 다른 탭에서 바뀐 장바구니 반영
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) dispatch({ type: "replace", items: load() })
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addItem: (item) => dispatch({ type: "add", item }),
      removeItem: (id) => dispatch({ type: "remove", id }),
      setCount: (id, count) => dispatch({ type: "setCount", id, count }),
    }),
    [items],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart는 CartProvider 안에서만 사용할 수 있습니다")
  return ctx
}
