import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Guide from "./pages/Guide"
import ShopProductList from "./pages/shop/ProductList"
import ShopAll from "./pages/shop/ShopAll"
import FunitureSelection from "./pages/onboarding/FunitureSelection"
import StyleSelection from "./pages/onboarding/StyleSelection"
import FeaturedProduct from "./pages/onboarding/FeaturedProduct"
import FeaturedBrand from "./pages/onboarding/FeaturedBrand"
import Like from "./pages/like"

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
        element: <Login />,
        children: [
          {
            path: "/auth/login",
            element: <Login />,
          }
        ]
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
        path: "/shop/shop_all",
        element: <ShopAll />,
      },
      {
        path: "/like",
        element: <Like />,
      },
      {
        path: "/guide",
        element: <Guide />,
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
