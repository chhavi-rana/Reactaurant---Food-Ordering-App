import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./styles.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import AboutUs from "./components/about";
import Error from "./components/error";

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
      <Body />
      <Footer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
