import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("pizza"));
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.card?.card?.info;

  return (
    <div className="menu justify-center">
      <div className="justify-center">
        <button
          className="p-2 rounded-lg bg-black text-white cursor-pointer"
          onClick={handleAddItem}
        >
          Add +
        </button>
      </div>
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
