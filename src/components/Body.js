import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    //State Variable - Super powerful variable - React Hooks
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestro, setFilteredRestro] = useState([]);
    const [searchText, setSearchText] = useState("");

    //initial API fetch
    useEffect(()=>{
        fetchData();
    }, []);

    //Async call using promises
    const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7954108&lng=83.34742279999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestro(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };


return !listOfRestaurants || listOfRestaurants.length === 0 ? (
  <Shimmer />
) : (
  <div className="body">
    <div className="filter">
      <input
        type="text"
        className="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <button
        onClick={() => {
          const filteredRestro = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );

          setFilteredRestro(filteredRestro);
        }}
      >
        Search
      </button>

      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.3
          );
          setFilteredRestro(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
    <div className="restaurant-container">
      {/* Add a conditional check before mapping */}
      {filteredRestro.map((restaurant) => {
        return (
          <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
        );
      })}
    </div>
  </div>
);
// ...

};

export default Body;