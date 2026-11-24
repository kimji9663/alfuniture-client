import { createBrowserRouter, RouterProvider } from "react-router-dom"
import type { ComponentType } from "react"
import Layout from "./components/Layout"
import { CartProvider } from "./store/cart"
import { LikesProvider } from "./store/likes"
// 홈은 첫 진입 페이지이자 LCP 페이지라 메인 번들에 둔다
import Home from "./pages/home/Home"

/**
 * 라우트 단위 코드 분할.
 * React Router의 `lazy`를 쓰면 다음 페이지 청크를 받는 동안 현재 화면을 그대로 유지한다
 * (React.lazy + Suspense처럼 빈 화면이 깜빡이지 않음).
 */
const page = (load: () => Promise<{ default: ComponentType }>) => async () => {
  const { default: Component } = await load()
  return { Component }
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
        ],
      },
      {
        path: "/profile",
        lazy: page(() => import("./pages/home/Profile")),
      },
      {
        path: "/auth",
        lazy: page(() => import("./pages/auth/SignIn")),
        children: [
          {
            path: "/auth/sign_in",
            lazy: page(() => import("./pages/auth/SignIn")),
          }
        ]
      },
      {
        path: "/auth/sign_up",
        lazy: page(() => import("./pages/auth/SignUp")),
      },
      {
        path: "/onboarding",
        lazy: page(() => import("./pages/onboarding/FunitureSelection")),
        children: [
          {
            path: "/onboarding/funiture_selection",
            lazy: page(() => import("./pages/onboarding/FunitureSelection")),
          }
        ]
      },
      {
        path: "/onboarding/style_selection",
        lazy: page(() => import("./pages/onboarding/StyleSelection")),
      },
      {
        path: "/onboarding/featured_product",
        lazy: page(() => import("./pages/onboarding/FeaturedProduct")),
      },
      {
        path: "/onboarding/loading_curation",
        lazy: page(() => import("./pages/onboarding/LoadingCuration")),
      },
      {
        path: "/onboarding/featured_brand",
        lazy: page(() => import("./pages/onboarding/FeaturedBrand")),
      },
      {
        path: "/shop",
        lazy: page(() => import("./pages/shop/ProductList")),
        children: [
          {
            path: "/shop/product_list",
            lazy: page(() => import("./pages/shop/ProductList")),
          },
        ]
      },
      {
        path: "/shop/product_view",
        lazy: page(() => import("./pages/shop/ProductView")),
      },
      {
        path: "/shop/shop_all",
        lazy: page(() => import("./pages/shop/ShopAll")),
      },
      {
        path: "/shop/write_qna",
        lazy: page(() => import("./pages/shop/WriteQna")),
      },
      {
        path: "/like",
        lazy: page(() => import("./pages/like/Like")),
      },
      {
        path: "/guide",
        lazy: page(() => import("./pages/Guide")),
      },
      {
        path: "/cart",
        lazy: page(() => import("./pages/cart")),
      },
      {
        path: "/notification",
        lazy: page(() => import("./pages/notification")),
      },
      {
        path: "/order",
        lazy: page(() => import("./pages/order/Order")),
      },
      {
        path: "/mypage",
        lazy: page(() => import("./pages/mypage/Dashboard")),
        children: [
          {
            path: "/mypage/dashboard",
            lazy: page(() => import("./pages/mypage/Dashboard")),
          },
        ]
      },
      {
        path: "/mypage/my_info",
        lazy: page(() => import("./pages/mypage/MyInformation")),
      },
      {
        path: "/mypage/my_order",
        lazy: page(() => import("./pages/mypage/MyOrder")),
      },
      {
        path: "/mypage/recently_product",
        lazy: page(() => import("./pages/mypage/RecentlyProduct")),
      },
      {
        path: "/mypage/order_detail",
        lazy: page(() => import("./pages/mypage/OrderDetail")),
      },
      {
        path: "/mypage/delivery_detail",
        lazy: page(() => import("./pages/mypage/DeliveryDetail")),
      },
      {
        path: "/mypage/coupon",
        lazy: page(() => import("./pages/mypage/Coupon")),
      },
      {
        path: "/mypage/review",
        lazy: page(() => import("./pages/mypage/Review")),
      },
      {
        path: "/mypage/write_review",
        lazy: page(() => import("./pages/mypage/WriteReview")),
      },
      {
        path: "/mypage/modify_review",
        lazy: page(() => import("./pages/mypage/WriteReview")),
      },
      {
        path: "/style",
        lazy: page(() => import("./pages/style/Style")),
      },
      {
        path: "/style/ranking",
        lazy: page(() => import("./pages/style/RankingList")),
      },
      {
        path: "/style/home_styling",
        lazy: page(() => import("./pages/style/HomeStyling")),
      },
      {
        path: "/style/brand",
        lazy: page(() => import("./pages/style/Brand")),
      },
      {
        path: "/brand_story/aerobiey",
        lazy: page(() => import("./pages/postmagazine/BrandStory")),
      },
      {
        path: "/editor_pick/henredn",
        lazy: page(() => import("./pages/postmagazine/EditorPick")),
      },
      {
        path: "/monthly_post/umasqu",
        lazy: page(() => import("./pages/postmagazine/MonthlyPost")),
      },
      {
        path: "/style/reels",
        lazy: page(() => import("./pages/style/Reels")),
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <LikesProvider>
        <RouterProvider router={router} />
      </LikesProvider>
    </CartProvider>
  )
}

export default App
