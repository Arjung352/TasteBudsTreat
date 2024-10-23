import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./Crousal.css";
import { useNavigate } from "react-router-dom";
function ActionAreaCard(prop) {
  const redirecting = useNavigate();
  const redirect = () => {
    redirecting("/cart");
  };
  return (
    <div>
      <div className="p-8 px-8 shadow-md flex flex-col items-center bg-white rounded-2xl hover:scale-105 transition-all ease-in-out mb-6">
        <img
          src="src\Components\Home\PopularCatagories\image\burger.png"
          className=" aspect-square rounded-full h-32 w-32 bg-green-300 p-3"
        />
        <div className=" self-start">
          <p className=" mt-4 text-2xl font-bold">Main Dish</p>
          <p className=" mt-2 text-xl uppercase">(description)</p>
        </div>
        <div className="flex justify-between w-full mt-2">
          <p>12000</p>
          <p className="">
            <StarIcon /> (4.9)
          </p>
        </div>
      </div>
    </div>
  );
}
export default ActionAreaCard;
