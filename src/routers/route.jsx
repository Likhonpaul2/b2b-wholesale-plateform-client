import { createBrowserRouter } from "react-router";
import MyLayouts from "../Layouts/MyLayouts";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AllProduct from "../pages/AllProduct";
import AddProduct from "../pages/AddProduct";
import Categorizes from "../pages/Categorizes";
import MyProduct from "../pages/MyProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayouts />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />
      }
    ]
  },
  {
    path: "/categories",
    element: <Categorizes />
  },
  {
    path: "/all-products",
    element: <AllProduct />
  },
  {
    path: "/add-products",
    element: <AddProduct />
  },
  {
    path: "/my-products",
    element: <MyProduct />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "*",
    element: <ErrorPage />
  }

]);





