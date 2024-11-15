import React, { useEffect, useState } from "react";
import axios from "axios";
import TuneIcon from "@mui/icons-material/Tune";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";

function Menu() {
  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [foodType, setFoodType] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurantResponse = await axios.get(
          "http://localhost:5000/api/restaurant/get-all"
        );
        setRestaurants(restaurantResponse.data.data);

        const foodResponse = await axios.get(
          "http://localhost:5000/api/upload/all-Dish"
        );
        setFood(foodResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  // Filtered food based on selections
  const filteredFood = food.filter(
    (item) =>
      (!selectedRestaurant || item.restaurantId === selectedRestaurant) &&
      (!foodType || item.foodType === foodType) &&
      (!foodCategory || item.category === foodCategory)
  );

  return (
    <div className="flex justify-center">
      <div className="w-4/5 font-WorkSans">
        <div className="flex gap-7 mt-10 items-center text-gray-500">
          <p className="p-2 bg-white border-gray-300 border rounded-xl">
            Filters <TuneIcon />
          </p>
          {restaurants.length > 0 ? (
            <select
              id="Restaurant"
              name="Restaurant"
              value={selectedRestaurant}
              onChange={(e) => setSelectedRestaurant(e.target.value)}
              className="p-2 border border-gray-300 rounded-xl focus:outline-none"
            >
              <option value="">All Restaurants</option>
              {restaurants.map((rest) => (
                <option key={rest._id} value={rest._id}>
                  {rest.title}
                </option>
              ))}
            </select>
          ) : (
            <p>No restaurants found</p>
          )}
          <select
            id="FoodType"
            name="FoodType"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            className="p-2 border border-gray-300 rounded-xl focus:outline-none w-56"
          >
            <option value="">All Food Types</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non - Vegetarian">Non-Vegetarian</option>
          </select>
          <select
            id="FoodCategory"
            name="FoodCategory"
            value={foodCategory}
            onChange={(e) => setFoodCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded-xl focus:outline-none"
          >
            <option value="">All Categories</option>
            {[...new Set(food.map((dish) => dish.category))].map(
              (uniqueCategory, index) => (
                <option value={uniqueCategory} key={index}>
                  {uniqueCategory}
                </option>
              )
            )}
          </select>
        </div>
        {/* Ispiration for your first order */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-2xl font-medium font-WorkSans self-start">
            Inspiration For Your First Order
          </p>

          <Slider {...settings}>
            {food.map((value, index) => (
              <div
                key={index}
                className=" relative cursor-pointer mt-8 flex flex-col items-center hover:scale-105 transition-all ease-in-out"
              >
                <img
                  className="aspect-square rounded-full h-32 w-32 shadow-md shadow-black"
                  src={value.image}
                />
                <p className="w-32 text-center mt-3">{value.dishName}</p>
              </div>
            ))}
          </Slider>
        </div>
        {/* Top Brands For You */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-2xl font-medium font-WorkSans self-start">
            Top Brands For You
          </p>
          <Slider {...settings}>
            {restaurants.map((value, index) => (
              <div
                key={index}
                className=" relative cursor-pointer mt-8 flex flex-col items-center hover:scale-105 transition-all ease-in-out"
              >
                <img
                  className="aspect-square rounded-full h-32 w-32 shadow-md shadow-black"
                  src={value.image}
                />
                <p className="w-32 text-center mt-3">{value.title}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <p className="text-2xl font-medium font-WorkSans self-start">
            Dishish Near You!
          </p>
        </div>
        <div className="grid grid-cols-4 gap-x-10 mb-10 gap-y-10">
          {filteredFood.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl duration-300 hover:scale-105 transition-all ease-in-out mb-6"
            >
              <img
                src={value.image}
                className="max-h-full max-w-full rounded-xl m-auto block"
              />
              <div className="self-start px-3">
                <p className="mt-4 text-xl font-medium">{value.dishName}</p>
                <p className="mt-2 text-sm font-sans uppercase">
                  {value.foodType}
                </p>
              </div>
              <div className="flex justify-between w-full mt-2 px-3">
                <p>₹{value.price}</p>
                <p>{value.category}</p>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Menu;
