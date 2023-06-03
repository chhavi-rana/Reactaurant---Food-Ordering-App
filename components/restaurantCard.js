import { IMG_CDN_URL } from "../constants";

// Receiving data from dominos object
/* 
const Dominos = {
    cloudinaryImageId : "hxhddq5lravcvcxmujbl",
    name : "Domino's Pizza" ,
    cuisines : ["Pizzas", "Italian", "Pastas", "Desserts"],
    rating : 4.3

}
 */

// Hard coded data
/*
const RestaurantCard = () => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hxhddq5lravcvcxmujbl"} alt="Dominos-pic" />
            <h2>Domino's Pizza</h2>
            <h4>Pizzas, Italian, Pastas, Desserts</h4>
            <h4>Rating : 4.3</h4>
        </div>
    );
};
 */

/* 
const RestaurantCard = () => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurantList[0].data?.cloudinaryImageId} alt="Dominos-pic" />
            <h2>{restaurantList[0].data?.name}</h2>
            <h4>{restaurantList[0].data?.cuisines.join(", ")}</h4>
            <h4>Distance : {restaurantList[0].data?.lastMileTravel} km</h4>
        </div>
    );
}; 

 */

/* 
const RestaurantCard = (props) =>{
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props.restaurant.data?.cloudinaryImageId} />
            <h2>{props.restaurant.data?.name}</h2>
            <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
            <h4>Distance : {props.restaurant.data?.lastMileTravel} km</h4>
        </div>
    );
};
 */

//object destructuring
/* 
const RestaurantCard = ({restaurant}) =>{
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurant.data?.cloudinaryImageId} />
            <h2>{restaurant.data?.name}</h2>
            <h3>{restaurant.data?.cuisines.join(", ")}</h3>
            <h4>Distance : {restaurant.data?.lastMileTravel} km</h4>
        </div>
    );
};
 */
/* 
const RestaurantCard = ({restaurant}) =>{
    const {name, cloudinaryImageId, cuisines, lastMileTravel} = restaurant.data;
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>Distance : {lastMileTravel} km</h4>
        </div>
    );
};
 */

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  deliveryTime,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>Delivery Time : {deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
