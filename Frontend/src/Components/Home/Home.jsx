import React from "react";
import { useNavigate } from "react-router-dom";
import Favourite from "./Card/Favourite";
import Testimonials from "./Testimonials/Testimonials";
import ServicesSection from "./ServiceSection/ServiceSection";
import PopularCatagories from "./PopularCatagories/PopularCatagories";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./home.css";
function Home() {
  const recipie = useNavigate();
  const register = useNavigate();
  const redirect = () => {
    recipie("/menu");
  };
  const redirectRegister = () => {
    register("/about");
  };
  return (
    <div className="relative">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className=" w-4/5 overflow-x-hidden">
          <div className=" flex justify-center mt-16 max-md:flex-col-reverse">
            <div className=" w-1/3 flex flex-col justify-center align-middle max-md:items-center max-md:w-full">
              <p className=" font-Salsa text-6xl max-md:text-4xl max-md:w-3/4 max-md:text-center">
                It's Not just Food, it's an experience.
              </p>
              <div className="max-md:flex z-10 max-md:flex-row max-md:w-2/4 max-sm:w-full  max-xl:flex-col max-xl:justify-center max-xl:items-center text-lg max-md:justify-between  max-md:mt-6 font-WorkSans font-semibold">
                <button
                  className="button max-xl:w-full max-md:w-2/5 max-md:px-4 max-md:py-2 px-8 py-2 max-md:m-0 bg-green-500 w-2/5   hover:scale-105 transition-all duration-300 hover:bg-olive"
                  onClick={redirect}
                >
                  Menu
                </button>
                <button
                  className="button max-md:px-4 max-md:py-2 px-8 py-2 max-md:m-0 max-xl:w-full max-xl:ml-0 max-md:ml-11 max-md:w-auto bg-stone-400  hover:scale-105 transition-all duration-300 hover:bg-stone-600 ml-11"
                  onClick={redirectRegister}
                >
                  Know-More
                </button>
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <img
                className="h-fit w-auto"
                src=".\images\salad-with-fresh-vegetables-plate-top-view_169016-29107-removebg-preview.png"
              />
            </div>
          </div>
          <PopularCatagories />
          <Favourite />
          <Testimonials />
          <ServicesSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
