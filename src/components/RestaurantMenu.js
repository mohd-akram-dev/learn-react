import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="menu">
      <h1>Restuarant Name</h1>
      <h2>Menu</h2>
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
