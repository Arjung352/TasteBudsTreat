import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex gap-4 flex-col font-WorkSans items-center justify-center text-black  relative">
        <img
          src="src\Components\Navbar\taste_buds_logo_-_green-removebg-preview.png"
          className=" h-20 w-25 "
        />
        <div className="flex w-screen justify-center">
          <ul className=" flex justify-end text-2xl nav font-semibold gap-4">
            <li className="mr-8 mt-1 hover:text-darkOlive">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-8 mt-1 hover:text-darkOlive">
              <NavLink to="/About">About</NavLink>
            </li>
            <li className="mr-8 mt-1 hover:text-darkOlive">
              <NavLink to="/Recipies">Menu</NavLink>
            </li>
            <li className="mr-6 mt-1 hover:text-darkOlive">
              <NavLink to="/Contact-Us">Contact-Us</NavLink>
            </li>
          </ul>
          <span className="mt-2 absolute right-16 top-0">
            <NavLink to="/Cart">
              <ShoppingCartIcon
                fontSize="large"
                className="hover:text-darkOlive"
              />
            </NavLink>
          </span>
          <span className="mt-2 absolute right-2 top-0">
            <NavLink to="/Cart">
              <img
                src="src\Components\Navbar\google-gemini-icon.png"
                fontSize="large"
                className="hover:text-darkOlive aspect-square h-9 "
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
