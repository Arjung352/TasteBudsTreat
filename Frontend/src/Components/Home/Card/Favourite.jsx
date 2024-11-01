import React from "react";
import name from "./name";
import ActionAreaCard from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Favourite() {
  var settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className=" font-WorkSans flex flex-col items-center my-8 mt-20 mx-8">
      <div className=" self-start mx-16">
        <div>
          <p className=" uppercase text-red-600 text-xl font-medium mb-5">
            special dishes
          </p>
        </div>
        <div>
          <p className="text-4xl font-medium mb-8 w-2/5">
            Standout Dishes From Our Menu
          </p>
        </div>
      </div>
      <Slider {...settings} className=" flex ">
        {name.map((value, index) => (
          <ActionAreaCard
            key={index}
            img={value.img}
            about={value.about}
            name={value.name}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Favourite;
