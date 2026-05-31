import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { newResList } from "../utils/mockData";
import Slider from "react-slick";
import { CDN_URL } from "../utils/constants";

export const RestaurantSlider = ({ resData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // auto slide
    autoplaySpeed: 2000, // 2 sec
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2>Popular Restaurants</h2>

      <Slider {...settings}>
        {resData.map((restaurant) => {
          return (
            <div key={restaurant.id}>
              <div className="card">
                <img
                  src={CDN_URL + restaurant.cloudinaryImageId}
                  alt={restaurant.name}
                  className="card-img"
                />

                <div className="card-content">
                  <h3>{restaurant.name}</h3>
                  <p>{restaurant.cuisines.join(", ")}</p>
                  <span>⭐ {restaurant.avgRating}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
