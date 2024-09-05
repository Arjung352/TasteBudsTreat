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
    <Slider {...settings} className=" h-4/6 flex ">
      {name.map((value, index) => (
        <ActionAreaCard
          key={index}
          img={value.img}
          about={value.about}
          name={value.name}
        />
      ))}
    </Slider>
  );
}

export default Favourite;
