import React, { useState, useEffect } from "react";
import name from "./name";
import ActionAreaCard from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Favourite() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1000) {
        setSlidesToShow(1);
      } else if (width < 1300) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
      console.log(width);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className="font-WorkSans flex flex-col items-center my-8 mt-20 mx-8">
      <div className="self-start mx-16 max-md:m-0">
        <div>
          <p className="uppercase text-red-600 text-xl font-medium mb-5">
            special dishes
          </p>
        </div>
        <div>
          <p className="text-4xl font-medium mb-8 w-2/5">
            Standout Dishes From Our Menu
          </p>
        </div>
      </div>
      <Slider {...settings}>
        {name.map((value, index) => (
          <ActionAreaCard
            key={index}
            img={value.img}
            about={value.about}
            name={value.name}
            price={value.price}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Favourite;
