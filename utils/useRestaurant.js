import { useEffect, useState } from "react";
import { swiggy_menu_api_URL, RESTAURANT_TYPE_KEY } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      const json = await response.json();

      // Set restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
    } catch (error) {
      setRestaurant(null);
      console.log(error);
    }
  }

  return restaurant;
};

export default useRestaurant;
