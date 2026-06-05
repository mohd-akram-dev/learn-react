import { useEffect, useState } from "react";
import { CARD_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARD_API);
    const json = await data.json();
    const restaurants =
      json?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
    const restaurant = restaurants?.find(
      (res) => res?.card?.card?.info?.id === resId,
    );
    setResInfo(restaurant);
  };

  return resInfo;
};

export default useRestaurantMenu;
