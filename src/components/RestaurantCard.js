import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
  } = resData;

  return (
    <div className="res-card" key={id}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="" />
      <h4 className="res-name">{name}</h4>
      <h5 className="cuisine">{cuisines.join(", ")}</h5>
      <p className="star">{avgRating}</p>
      <p className="cuisine">{costForTwo}</p>
      <p className="cuisine">₹{costForTwo} For Two</p>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default RestaurantCard;
