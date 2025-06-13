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
import PrivateRoutes from "./PrivateRoutes";
import ProductDetails from "../pages/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct";
import ProductCategorize from "../pages/ProductCategorize";
import Cart from "../pages/Cart";


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
    path: "/product-categories/:category",
    element: <ProductCategorize/>
  },
  {
    path: "/cart",
    element: <PrivateRoutes><Cart/></PrivateRoutes>
  },
  {
    path: "/all-products",
    element: <PrivateRoutes><AllProduct /></PrivateRoutes>
  },
  {
    path: "/all-products/:id",
    element: <PrivateRoutes><ProductDetails /></PrivateRoutes>
  },
  {
    path: "/update-product/:id",
    element: <PrivateRoutes> <UpdateProduct /> </PrivateRoutes>
  },
  {
    path: "/add-products",
    element: <PrivateRoutes><AddProduct /></PrivateRoutes>
  },
  {
    path: "/my-products",
    element: <PrivateRoutes><MyProduct /></PrivateRoutes>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "*",
    element: <ErrorPage />
  }

]);





