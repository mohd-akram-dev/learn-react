import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{avgRating}</h2>
      <h2>{costForTwoMessage}</h2>
      <ul>
        <li>Biryani</li>
        <li>Kabab</li>
        <li>Burgers</li>
        <li>Pizza</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
