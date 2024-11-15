import React from "react";
function PopularCatagories() {
  return (
    <div
      id="Popular"
      className=" flex flex-col items-center font-WorkSans mt-20"
    >
      <div className=" text-red-600 text-xl uppercase font-medium mb-4">
        Customer Favourite
      </div>
      <div className="text-5xl font-medium mb-8">Popular Catagories</div>
      <div className=" grid grid-cols-4 gap-8">
        <div className="p-12 backdrop-filter backdrop-blur-md bg-opacity-5 border border-gray-100 bg-gray-400 px-16 shadow-md bg-white rounded-2xl hover:scale-105 transition-all ease-in-out">
          <img
            src="src\Components\Home\PopularCatagories\image\burger.png"
            className=" aspect-square rounded-full h-32 w-32 bg-green-300 p-3"
          />
          <p className=" text-center mt-4 text-2xl font-bold">Main Dish</p>
          <p className=" text-center mt-4 text-xl">(46 Dishes)</p>
        </div>
        <div className="p-12 backdrop-filter backdrop-blur-md bg-opacity-5 border border-gray-100 bg-gray-400 px-16 shadow-md bg-white rounded-2xl hover:scale-105 transition-all ease-in-out">
          <img
            src="src\Components\Home\PopularCatagories\image\sandwich.png"
            className=" aspect-square rounded-full h-32 w-32 bg-green-300 p-3"
          />
          <p className=" text-center mt-4 text-2xl font-bold">Break Fast</p>
          <p className=" text-center mt-4 text-xl">(46 Dishes)</p>
        </div>
        <div className="p-12 backdrop-filter backdrop-blur-md bg-opacity-5 border border-gray-100 bg-gray-400 px-16 shadow-md bg-white rounded-2xl hover:scale-105 transition-all ease-in-out">
          <img
            src="src\Components\Home\PopularCatagories\image\dessert.png"
            className=" aspect-square rounded-full h-32 w-32 bg-green-300 p-3"
          />
          <p className=" text-center mt-4 text-2xl font-bold">Dessert</p>
          <p className=" text-center mt-4 text-xl">(46 Dishes)</p>
        </div>
        <div className="p-12 backdrop-filter backdrop-blur-md bg-opacity-5 border border-gray-100 bg-gray-400 px-16 shadow-md bg-white rounded-2xl hover:scale-105 transition-all ease-in-out">
          <img
            src="src\Components\Home\PopularCatagories\image\thali.png"
            className=" aspect-square rounded-full h-32 w-32 bg-green-300 p-3"
          />
          <p className=" text-center mt-4 text-2xl font-bold">Browse All</p>
          <p className=" text-center mt-4 text-xl">(46 Dishes)</p>
        </div>
      </div>
    </div>
  );
}

export default PopularCatagories;
