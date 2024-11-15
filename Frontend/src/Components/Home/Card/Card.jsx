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
      <div className="p-8 px-8 backdrop-filter backdrop-blur-md bg-opacity-15 border border-gray-100 bg-gray-300 shadow-md flex flex-col items-center rounded-2xl hover:scale-105 transition-all ease-in-out mb-6">
        <img
          src={prop.img}
          className=" aspect-square rounded-full h-32 w-32 shadow-md shadow-black"
        />
        <div className=" self-start">
          <p className=" mt-4 text-2xl  font-bold">{prop.name}</p>
          <p className=" mt-2 text-sm font-sans uppercase">{prop.about}</p>
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
