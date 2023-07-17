import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Layout from "./components/Layout"

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
