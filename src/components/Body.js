import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

export const Body = () => {
  const [list, setList] = useState(resList);
  return (
    <div className="body">
      <div className="search">
        <input type="text" />
        <button className="search-btn">Search</button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = list.filter((res) => res.data.avgRating > 4);
            setList(filterData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {list.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
