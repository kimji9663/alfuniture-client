import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Guide from "./pages/Guide"
import BrandList from "./pages/shop/BrandList"
import ProductList from "./pages/shop/ProductList"
import ShopAll from "./pages/shop/ShopAll"
import FunitureSelection from "./pages/onboarding/FunitureSelection"
import StyleSelection from "./pages/onboarding/StyleSelection"
import FeaturedFuniture from "./pages/onboarding/FeaturedFuniture"
import FeaturedBrand from "./pages/onboarding/FeaturedBrand"

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
        path: "/onboarding/featured_funiture",
        element: <FeaturedFuniture />,
      },
      {
        path: "/onboarding/featured_brand",
        element: <FeaturedBrand />,
      },
      {
        path: "/shop",
        element: <ProductList />,
        children: [
          {
            path: "/shop/product_list",
            element: <ProductList />,
          },
        ]
      },
      {
        path: "/shop/shop_all",
        element: <ShopAll />,
      },
      {
        path: "/shop/brand_list",
        element: <BrandList />,
      },
      {
        path: "/shop/product_list",
        element: <ProductList />,
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
