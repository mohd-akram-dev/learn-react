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
    <div
      className="m-3 p-3 w-[280] h-85
      border-solid
      border-teal-200
      border-2
      bg-gray-300 
      hover:bg-white 
      rounded-2xl
      hover:shadow-lg
      hover:border-teal-500
      hover:cursor-pointer
      transition-all duration-300"
      key={id}
    >
      <img
        className="w-80 h-35 rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
        alt="{name}"
      />
      <h4 className="text-sm font-bold mt-2">{name}</h4>
      <h5 className="flex-wrap">{cuisines.join(", ")}</h5>
      <p className="star">{avgRating}</p>
      <p className="cuisine">{costForTwo}</p>
      <p className="cuisine">₹{costForTwo} For Two</p>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div className="absolute bg-black text-white m-2 p-2">
          <label htmlFor="">Promoted</label>
        </div>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
