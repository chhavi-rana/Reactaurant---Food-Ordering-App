import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  async function getRestaurantsInfo() {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        resId
    );
    const json = response.json();
    console.log(json);
  }

  return (
    <>
      <h1>{"Restaurant Id - " + resId}</h1>
    </>
  );
};

export default RestaurantInfo;
