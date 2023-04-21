import RestaurantCard from "./restaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

// using spread operator
/* 
const Body = () => {
  return (
    <>
      <div className="search-container">
        <input className="search-input" type="text" placeholder="Search" />
      </div>
      <div className="restaurant-list">
        <RestaurantCard   {...restaurantList[0].data} />
        <RestaurantCard   {...restaurantList[2].data} />
        <RestaurantCard   {...restaurantList[3].data} />
        <RestaurantCard   {...restaurantList[4].data} />
        <RestaurantCard   {...restaurantList[5].data} />
        <RestaurantCard   {...restaurantList[1].data} />
        
      </div>
    </>
  );
}; 
*/

function filterData(searchText, restaurant) {
  // console.log(restaurant);
  const filterData = restaurant.filter((restaurants) => {
    return restaurants.data.name.includes(searchText)
  });
  // console.log(filterData);
  return filterData;
}

const restaurantCo = restaurantList;

const Body = () => {

  
  const [searchText, setSearchText] = useState("");
  
  const [restaurant, setRestaurant] = useState(restaurantList);
  

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // setRestaurant(restaurantList);
            //console.log(restaurant)
            const data = filterData(searchText, restaurantList);
            setRestaurant(data);
            
            // console.log(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
