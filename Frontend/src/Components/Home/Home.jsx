import React from "react";
import { useNavigate } from "react-router-dom";
import Favourite from "./Card/Favourite";
import Testimonials from "../Testimonials/Testimonials";
import ServicesSection from "../ServiceSection/ServiceSection";

import "./home.css";
function Home() {
  const recipie = useNavigate();
  const register = useNavigate();
  const redirect = () => {
    recipie("/Recipies");
  };
  const redirectRegister = () => {
    register("/Register");
  };
  return (
    <div className=" flex justify-center">
      <div className=" w-4/5 mt-5">
        <div className=" flex justify-center h-1/4">
          <div className=" w-1/3 flex flex-col justify-center align-middle mt-24">
            <p className=" font-Salsa text-6xl">
              It's Not just Food, it's an experience.
            </p>
            <div className=" z-10 text-lg font-WorkSans font-semibold">
              <button
                className="button w-2/5  hover:bg-darkOlive"
                onClick={redirect}
              >
                Menu
              </button>
              <button
                className="button bg-stone-300 hover:bg-peach text-black ml-11"
                onClick={redirectRegister}
              >
                Know-More
              </button>
            </div>
          </div>
          <div className=" flex justify-center">
            <img
              className="h-fit w-auto"
              src="\src\Components\Home\salad-with-fresh-vegetables-plate-top-view_169016-29107-removebg-preview.png"
            />
          </div>
        </div>
        <Favourite />
        <Testimonials />
        <ServicesSection />
      </div>
    </div>
  );
}

export default Home;
