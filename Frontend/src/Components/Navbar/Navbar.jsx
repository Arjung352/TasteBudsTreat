import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, Outlet } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  return (
    <>
      <div className="flex font-WorkSans items-center justify-center text-black backdrop-blur-3xl	 relative">
        <img
          src="https://res.cloudinary.com/dmxlqw5ix/image/upload/v1731066887/qxhi70lws9tx5ssy8ff3.png"
          className=" h-20 "
        />
        <div className="flex w-screen justify-center ml-20">
          <ul className=" flex justify-end text-2xl nav font-normal gap-4">
            <li className="mr-8 mt-1 hover:text-darkOlive">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-8 mt-1 hover:text-darkOlive">
              <NavLink to="/About">About</NavLink>
            </li>
            <li className="mr-8 mt-1 hover:text-darkOlive">
              <NavLink to="/Menu">Menu</NavLink>
            </li>
            <li className="mr-6 mt-1 hover:text-darkOlive">
              <NavLink to="/Contact-Us">Contact-Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-8 mr-3 w-60">
          <span className="flex items-center gap-8">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-5 py-2 rounded-[20px] text-white bg-green-500 hover:bg-olive font-semibold shadow-md transition duration-300 transform hover:scale-105">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedIn>
              <NavLink to="/Cart">
                <ShoppingCartIcon className="hover:text-darkOlive" />
              </NavLink>
            </SignedIn>
          </span>
          <span className="flex items-center">
            <NavLink to="/Cart">
              <img
                src="https://res.cloudinary.com/dmxlqw5ix/image/upload/v1731066991/roipdopnwiti34gyxiq9.png"
                fontSize="large"
                className="hover:text-darkOlive h-7 w-7 "
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
