import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/home/Home"
import Guide from "./pages/Guide"
import ShopProductList from "./pages/shop/ProductList"
import ShopProductView from "./pages/shop/ProductView"
import ShopAll from "./pages/shop/ShopAll"
import ShopWriteQna from "./pages/shop/WriteQna"
import FunitureSelection from "./pages/onboarding/FunitureSelection"
import StyleSelection from "./pages/onboarding/StyleSelection"
import FeaturedProduct from "./pages/onboarding/FeaturedProduct"
import FeaturedBrand from "./pages/onboarding/FeaturedBrand"
import Like from "./pages/like/Like"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import Cart from "./pages/cart"
import Cart2 from "./pages/cartTest"
import Notification from "./pages/notification"
import Order from "./pages/order/Order"
import Dashboard from "./pages/mypage/Dashboard"

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
        path: "/auth",
        element: <SignIn />,
        children: [
          {
            path: "/auth/sign_in",
            element: <SignIn />,
          }
        ]
      },
      {
        path: "/auth/sign_up",
        element: <SignUp />,
      },
      {
        path: "/onboarding",
        element: <FunitureSelection />,
        children: [
          {
            path: "/onboarding/funiture_selection",
            element: <FunitureSelection />,
          }
        ]
      },
      {
        path: "/onboarding/style_selection",
        element: <StyleSelection />,
      },
      {
        path: "/onboarding/featured_product",
        element: <FeaturedProduct />,
      },
      {
        path: "/onboarding/featured_brand",
        element: <FeaturedBrand />,
      },
      {
        path: "/shop",
        element: <ShopProductList />,
        children: [
          {
            path: "/shop/product_list",
            element: <ShopProductList />,
          },
        ]
      },
      {
        path: "/shop/product_view",
        element: <ShopProductView />,
      },
      {
        path: "/shop/shop_all",
        element: <ShopAll />,
      },
      {
        path: "/shop/write_qna",
        element: <ShopWriteQna />,
      },
      {
        path: "/like",
        element: <Like />,
      },
      {
        path: "/guide",
        element: <Guide />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cart2",
        element: <Cart2 />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/mypage",
        element: <Dashboard />,
        children: [
          {
            path: "/mypage/dashboard",
            element: <Dashboard />,
          },
        ]
      },
    ],
  },
]);

function App() {
  return (
    <>      
      <RouterProvider router={router} />
    </>
  )
}

export default App
