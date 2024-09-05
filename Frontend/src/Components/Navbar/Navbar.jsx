import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex flex-col items-center justify-center font-sans text-black font-semibold relative">
        <img
          src="src\Components\Navbar\taste_buds_logo_-_green-removebg-preview.png"
          className=" h-20 w-25 "
        />
        <div className="flex w-screen justify-center">
          <ul className=" flex justify-end font-normal text-2xl nav font-Nato">
            <li className="mr-8 mt-1 hover:text-darkOlive">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-8 mt-1 hover:text-darkOlive">
              <NavLink to="/Recipies">Recipies</NavLink>
            </li>
            <li className="mr-8 mt-1 hover:text-darkOlive">
              <NavLink to="/About">About</NavLink>
            </li>
            <li className="mr-6 mt-1 hover:text-darkOlive">
              <NavLink to="/Signin">Register</NavLink>
            </li>
          </ul>
          <span className="mt-2 absolute right-4 top-0">
            <NavLink to="/Cart">
              <ShoppingCartIcon
                fontSize="large"
                className="hover:text-darkOlive"
              />
            </NavLink>
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar;
