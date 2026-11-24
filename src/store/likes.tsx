import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react"
import {
  likeProductData, shopProductData, homeBrandProductData, recentlyProductData, rankingProductData,
  brandShopPanelProductData, brandStoryData, editorPickData, monthlyPostData, styleBrandProductData,
  homeStylingProductData,
} from "../data"
import { sofa01 } from "../assets/images/product"

/**
 * 상품 찜(좋아요) 전역 상태 (Context + useReducer)
 * - 상품 카드·상품 상세·찜 목록이 같은 상태를 본다. 한 곳에서 누르면 모든 화면에 반영된다.
 * - localStorage에 저장하고 다른 탭과 동기화한다.
 * - 목업 데이터의 id는 배열마다 0부터 시작해 겹치므로, "브랜드|모델명|상품명"을 상품 키로 쓴다.
 * - 이미지 URL은 빌드마다 해시가 바뀔 수 있어 저장하지 않고 카탈로그에서 찾는다.
 */

export interface LikeTarget {
  shopName: string
  modelName: string
  productName: string
  price: number
  colors?: string[]
}

export interface LikedProduct extends LikeTarget {
  key: string
  /** 찜한 시각 (최근 찜한 순 정렬용) */
  likedAt: number
}

export const productKey = (p: Pick<LikeTarget, "shopName" | "modelName" | "productName">) =>
  [p.shopName, p.modelName, p.productName].map((s) => (s ?? "").trim()).join("|")

/** 상품 키 → 이미지·카테고리 (목업 데이터 전체에서 모음. 백엔드 연동 전 임시) */
type CatalogEntry = { imgsrc: string; category?: string }
const CATALOG = new Map<string, CatalogEntry>()
const SOURCES: any[][] = [
  likeProductData, shopProductData, homeBrandProductData, recentlyProductData, rankingProductData,
  brandShopPanelProductData, brandStoryData, editorPickData, monthlyPostData, styleBrandProductData,
  homeStylingProductData,
]
for (const list of SOURCES) {
  for (const p of list) {
    if (!p?.productName || !p?.imgsrc) continue
    const key = productKey(p)
    if (!CATALOG.has(key)) CATALOG.set(key, { imgsrc: p.imgsrc, category: p.name })
  }
}
// 상품 상세 화면의 상품 (ProductView의 product 상수와 같은 값)
CATALOG.set(productKey({ shopName: "ALFDN", modelName: "", productName: "카멜프튼" }), { imgsrc: sofa01, category: "소파" })

export const catalogEntry = (key: string): CatalogEntry | undefined => CATALOG.get(key)

/** 처음 방문했을 때 찜 목록 (기존 likeProductData와 같은 상품, 배열 순서 = 최근 찜한 순) */
const SEED_TIME = Date.UTC(2023, 11, 1)
const SEED: LikedProduct[] = likeProductData.map((p, i) => ({
  key: productKey(p), shopName: p.shopName, modelName: p.modelName, productName: p.productName,
  price: p.price, colors: p.colors, likedAt: SEED_TIME - i,
}))

const STORAGE_KEY = "alfuniture:likes:v1"

type Action =
  | { type: "toggle"; product: LikeTarget; at: number }
  | { type: "replace"; items: LikedProduct[] }

function reducer(items: LikedProduct[], action: Action): LikedProduct[] {
  switch (action.type) {
    case "toggle": {
      const key = productKey(action.product)
      if (items.some((i) => i.key === key)) return items.filter((i) => i.key !== key)
      const { shopName, modelName, productName, price, colors } = action.product
      return [{ key, shopName, modelName, productName, price, colors, likedAt: action.at }, ...items]
    }
    case "replace":
      return action.items
  }
}

const isLikedProduct = (v: any): v is LikedProduct =>
  v && typeof v.key === "string" && typeof v.productName === "string" && typeof v.shopName === "string" &&
  typeof v.price === "number" && typeof v.likedAt === "number"

/** 저장된 찜 목록을 읽는다. 저장된 적이 없으면 예시, 깨진 값이면 빈 목록 */
function load(): LikedProduct[] {
  let raw: string | null
  try {
    raw = window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return SEED
  }
  if (raw === null) return SEED
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter(isLikedProduct) : []
  } catch {
    return []
  }
}

interface LikesContextValue {
  /** 최근 찜한 순 */
  items: LikedProduct[]
  isLiked: (product: Pick<LikeTarget, "shopName" | "modelName" | "productName">) => boolean
  toggleLike: (product: LikeTarget) => void
}

const LikesContext = createContext<LikesContextValue | null>(null)

export const LikesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, undefined, load)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // 저장소를 쓸 수 없는 환경에서는 메모리에만 유지
    }
  }, [items])

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) dispatch({ type: "replace", items: load() })
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  const value = useMemo<LikesContextValue>(() => {
    const keys = new Set(items.map((i) => i.key))
    return {
      items: [...items].sort((a, b) => b.likedAt - a.likedAt),
      isLiked: (product) => keys.has(productKey(product)),
      toggleLike: (product) => dispatch({ type: "toggle", product, at: Date.now() }),
    }
  }, [items])

  return <LikesContext.Provider value={value}>{children}</LikesContext.Provider>
}

export function useLikes(): LikesContextValue {
  const ctx = useContext(LikesContext)
  if (!ctx) throw new Error("useLikes는 LikesProvider 안에서만 사용할 수 있습니다")
  return ctx
}
