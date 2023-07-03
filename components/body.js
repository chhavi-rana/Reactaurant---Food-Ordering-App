import RestaurantCard from "./restaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";

function filterData(searchText, restaurant) {
  const filterData = restaurant.filter((restaurants) => {
    return restaurants?.data?.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allrestaurant, setAllRestaurant] = useState([]);
  const [filterRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING",
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const json = await response.json();

      setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    } catch (err) {
      console.log(err);
    }
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <div className="not-online-container">
        <div className="not-online-card">
          <h1 className="not-online-title">
            Oops! You're not online right now
          </h1>
          <p className="not-online-description">Please check back later</p>
        </div>
      </div>
    );
  }

  if (allrestaurant === undefined) {
    return (
      <div className="restaurant-unavailable-container">
        <div className="restaurant-unavailable-card">
          <h1 className="restaurant-unavailable-title">
            Oops! All restaurants are currently unavailable
          </h1>
          <p className="restaurant-unavailable-description">
            Please try again later
          </p>
        </div>
      </div>
    );
  }

  return allrestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search a Restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allrestaurant);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestaurant?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
