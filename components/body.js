import RestaurantCard from "./restaurantCard";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";

import Shimmer from "./shimmer";
import AboutUs from "./about";

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
    return restaurants?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
  });
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allrestaurant, setAllRestaurant] = useState([]);
  const [filterRestaurant, setFilteredRestaurant] = useState([]);
  const [restaurant, setRestaurant] = useState(restaurantList);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try{
      const response = await fetch("https://api.npoint.io/0f631fea97432f43ca61",{
        method:"GET",
        headers: {
          accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    
    const json = await response.json();
    console.log(json);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }catch (err) {
      console.log(err);
    }
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
            const data = filterData(searchText, allrestaurant);
            setFilteredRestaurant(data);

            // console.log(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestaurant?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
