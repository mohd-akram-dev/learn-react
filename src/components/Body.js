import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantSlider } from "./RestaurantSlider";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [list, setList] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=26.4017716&lng=80.314458&str=best%20restaurants&trackingId=439599de-4410-d8b9-7c2c-63c695f8d36b&submitAction=ENTER&queryUniqueId=300eb23a-2a06-291d-4911-053c757c2714",
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.map(
        (item) => item.card.card.info,
      );
    setList(restaurants);
    setSliderData(restaurants);
    setCardData(restaurants);
  };
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  if (onlineStatus === false) {
    return (
      <div className="ofline-card">
        <h1>No Internet Connection</h1>
      </div>
    );
  }

  if (sliderData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // search trigger
            const searchData = list.filter((restaurant) =>
              restaurant.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setSliderData(searchData);
          }}
        >
          Search
        </button>
      </div>

      <div className="resSlider">
        <RestaurantSlider resData={sliderData} />
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = list.filter((res) => res.avgRating >= 4.5);
            setCardData(filterData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {cardData
          .filter((restaurant) => restaurant.avgRating > 4)
          .map((restaurant) => {
            return (
              <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};
