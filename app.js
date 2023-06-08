import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./styles.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import Offers from "./components/offer";
import Error from "./components/error";
import Help from "./components/help";
import Cart from "./components/cart";
import { Outlet } from "react-router-dom";
import RestaurantInfo from "./components/restaurantDetail";
/* 

AppLayout : (Planning)

Header
    -Logo
    -NavItems(Right Side)
    -Cart

Body
    -SearchBar
    -RestaurantList
        -RestaurantCard
            -Image
            -Name
            -Cuisine
            -Distance

Footer 
    -Links
    -Copyright

*/

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offer",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
