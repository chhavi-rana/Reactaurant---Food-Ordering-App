import RestaurantCard from "./restaurantCard";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

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
  const filterData = restaurant.filter((restaurants) => {
    return restaurants.data.name.includes(searchText);
  });
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allrestaurant, setAllRestaurant] = useState([]);
  const [restaurant, setRestaurant] = useState(restaurantList);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  if(allrestaurant === undefined) return <h1>Oh! All restaurants are currently unserviceable</h1>

  return allrestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
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
        {allrestaurant?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
