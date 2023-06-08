import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState();

  return (
    <>
      <h1>{"Restaurant Id - " + resId}</h1>
    </>
  );
};

export default RestaurantInfo;
