import React from "react";
import Slider from "react-slick"; 
function PopularCatagories() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col items-center font-WorkSans mt-20">
      <div className="text-red-600 text-xl uppercase font-medium mb-4">
        Customer Favourite
      </div>
      <div className="text-5xl font-medium mb-8">Popular Categories</div>

      {/* Carousel for small screens */}
      <div className="block md:hidden w-full">
        <Slider {...carouselSettings}>
          <div className="p-6 shadow-md bg-white rounded-2xl hover:scale-105 transition-all ease-in-out">
            <img
              src="src/Components/Home/PopularCatagories/image/burger.png"
              className="aspect-square rounded-full h-32 w-32 bg-green-300 p-3 mx-auto" // Ensure images are centered
              alt="Main Dish"
            />
            <p className="text-center mt-4 text-2xl font-bold">Main Dish</p>
            <p className="text-center mt-2 text-xl">(46 Dishes)</p>
          </div>
          <div className="p-6 shadow-md bg-white rounded-2xl hover:scale-105 transition-all ease-in-out">
            <img
              src="src/Components/Home/PopularCatagories/image/sandwich.png"
              className="aspect-square rounded-full h-32 w-32 bg-green-300 p-3 mx-auto"
              alt="Breakfast"
            />
            <p className="text-center mt-4 text-2xl font-bold">Breakfast</p>
            <p className="text-center mt-2 text-xl">(46 Dishes)</p>
          </div>
          <div className="p-6 shadow-md bg-white rounded-2xl hover:scale-105 transition-all ease-in-out">
            <img
              src="src/Components/Home/PopularCatagories/image/dessert.png"
              className="aspect-square rounded-full h-32 w-32 bg-green-300 p-3 mx-auto"
              alt="Dessert"
            />
            <p className="text-center mt-4 text-2xl font-bold">Dessert</p>
            <p className="text-center mt-2 text-xl">(46 Dishes)</p>
          </div>
          <div className="p-6 shadow-md bg-white rounded-2xl hover:scale-105 transition-all ease-in-out">
            <img
              src="src/Components/Home/PopularCatagories/image/thali.png"
              className="aspect-square rounded-full h-32 w-32 bg-green-300 p-3 mx-auto"
              alt="Browse All"
            />
            <p className="text-center mt-4 text-2xl font-bold">Browse All</p>
            <p className="text-center mt-2 text-xl">(46 Dishes)</p>
          </div>
        </Slider>
      </div>

      {/* Grid for larger screens */}
      <div className="hidden md:grid md:grid-cols-4 md:gap-8 w-full">
        <div className="p-12 px-16 shadow-md bg-white rounded-2xl hover:scale-105 transition-all ease-in-out">
          <img
            src="src/Components/Home/PopularCatagories/image/burger.png"
            className="aspect-square rounded-full h-32 w-32 bg-green-300 p-3 mx-auto"
            alt="Main Dish"
          />
          <p className="text-center mt-4 text-2xl font-bold">Main Dish</p>
          <p className="text-center mt-4 text-xl">(46 Dishes)</p>
        </div>
        <div className="p-12 px-16 shadow-md bg-white rounded-2xl hover:scale-105 transition-all ease-in-out">
          <img
            src="src/Components/Home/PopularCatagories/image/sandwich.png"
            className="aspect-square rounded-full h-32 w-32 bg-green-300 p-3 mx-auto"
            alt="Breakfast"
          />
          <p className="text-center mt-4 text-2xl font-bold">Breakfast</p>
          <p className="text-center mt-4 text-xl">(46 Dishes)</p>
        </div>
        <div className="p-12 px-16 shadow-md bg-white rounded-2xl hover:scale-105 transition-all ease-in-out">
          <img
            src="src/Components/Home/PopularCatagories/image/dessert.png"
            className="aspect-square rounded-full h-32 w-32 bg-green-300 p-3 mx-auto"
            alt="Dessert"
          />
          <p className="text-center mt-4 text-2xl font-bold">Dessert</p>
          <p className="text-center mt-4 text-xl">(46 Dishes)</p>
        </div>
        <div className="p-12 px-16 shadow-md bg-white rounded-2xl hover:scale-105 transition-all ease-in-out">
          <img
            src="src/Components/Home/PopularCatagories/image/thali.png"
            className="aspect-square rounded-full h-32 w-32 bg-green-300 p-3 mx-auto"
            alt="Browse All"
          />
          <p className="text-center mt-4 text-2xl font-bold">Browse All</p>
          <p className="text-center mt-4 text-xl">(46 Dishes)</p>
        </div>
      </div>
    </div>
  );
}

export default PopularCatagories;
