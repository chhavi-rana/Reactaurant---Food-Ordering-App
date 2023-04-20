import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
