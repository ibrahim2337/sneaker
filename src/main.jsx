import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import Categories from "./pages/Categories/Categories.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import FAQ from "./pages/FAQ/FAQ.jsx";
import ReturnPolicy from "./pages/ReturnPolicy/ReturnPolicy.jsx";
import ShoppingPolicy from "./pages/ShippingPolicy/ShippingPolicy.jsx";
import CustomerSupport from "./pages/CustomerSupport/CustomerSupport.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/return",
        element: <ReturnPolicy />,
      },
      {
        path: "/shipping",
        element: <ShoppingPolicy />,
      },
      {
        path: "/support",
        element: <CustomerSupport />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
