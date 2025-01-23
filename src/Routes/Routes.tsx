import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products";
import Register from "../pages/Rregister/Register";
import Login from "../pages/Login/Login";
import ContactUs from "../pages/ContactUs/ContactUs";
import Faq from "../pages/FAQ/Faq";
import AboutUs from "../pages/About Us/AboutUs";
import Checkout from "../pages/Checkout/Checkout";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AdminLayout from "../Layouts/AdminLayout/AdminLayout";
import AdminProductList from "../components/AdminProductList/AdminProductList";
import AdminOrders from "../pages/AdminOrders/AdminOrders";
import UserList from "../pages/UserList/UserList";
import UserRole from "../pages/UserRole/UserRole";
import AdminProducts from "../pages/AdminProducts/AdminProducts";
import AddProduct from "../pages/AddProduct/AddProduct";

import WatchOrder from "../pages/Orders/WatchOrder";
import AddReview from "../pages/AddReview/AddReview";
import Cart from "../pages/Cart/Cart";
import PrivateRoute from "../utils/PrivateRoute/PrivateRoute";
import AdminRoute from "../utils/AdminRoute/AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-review/:id",
        element: <AddReview></AddReview>,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout></AdminLayout>
      </AdminRoute>
    ),
    children: [
      {
        path: "products",
        element: (
          <AdminRoute>
            <AdminProducts></AdminProducts>
          </AdminRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <AdminRoute>
            <AddProduct></AddProduct>
          </AdminRoute>
        ),
      },

      {
        path: "orders",
        element: (
          <AdminRoute>
            <AdminOrders></AdminOrders>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <UserList></UserList>
          </AdminRoute>
        ),
      },
      {
        path: "roles",
        element: (
          <AdminRoute>
            <UserRole></UserRole>
          </AdminRoute>
        ),
      },
      {
        path: "product-list",
        element: (
          <AdminRoute>
            <AdminProductList></AdminProductList>
          </AdminRoute>
        ),
      },
      {
        path: "watch-order/:id",
        element: (
          <AdminRoute>
            <WatchOrder></WatchOrder>
          </AdminRoute>
        ),
      },
    ],
  },
]);
