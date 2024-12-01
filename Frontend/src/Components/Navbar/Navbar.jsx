import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LayersIcon from "@mui/icons-material/Layers";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { user } = useUser();

  useEffect(() => {
    if (user?.fullName) {
      // User is logged in, store the username in localStorage
      localStorage.setItem("UserName", user.fullName);
      localStorage.setItem("email", user.emailAddresses);
      console.log("User logged in:", user.fullName);
    } else {
      // User is logged out, clear the username from localStorage
      localStorage.clear();
      console.log("User logged out, localStorage cleared");
    }
  }, [user]);

  return (
    <>
      <nav>
        <div className="flex p-1 max-md:p-1">
          <div className="w-full flex font-WorkSans items-center justify-center text-black relative">
            <img
              src="https://res.cloudinary.com/dmxlqw5ix/image/upload/v1731066887/qxhi70lws9tx5ssy8ff3.png"
              className="h-20 max-md:h-16"
              alt="Logo"
            />
            <div className="flex w-screen justify-center ml-20">
              <ul className=" flex max-md:hidden justify-end text-2xl nav font-normal gap-4">
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
              <SignedOut>
                <SignInButton mode="modal">
                  <button className=" max-md:text-sm max-md:py-1 max-md:w-[5.2rem] max-md:px-2 px-5 py-2 rounded-[20px] text-white bg-green-500 hover:bg-olive font-semibold shadow-md transition duration-300 transform hover:scale-105">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
                <NavLink to="/Cart" className="flex items-center">
                  <ShoppingCartIcon className="hover:text-darkOlive" />
                </NavLink>
              </SignedIn>
              <div className="md:hidden flex">
                {isMenuOpen === true ? (
                  <button onClick={toggleMenu}>
                    <CloseIcon className="text-black" />
                  </button>
                ) : (
                  <button onClick={toggleMenu} className="text-black">
                    <MenuIcon />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay Menu */}
      <div
        className={`absolute top-16 left-0 w-full overflow-hidden bg-black/60 text-white z-30 flex flex-col items-center py-4 md:hidden  transform ${
          isMenuOpen ? "-translate-x-0" : "translate-x-full hidden"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="text-white text-xl flex flex-col justify-center items-center font-medium font-work space-y-4">
          <li>
            <NavLink
              to="/"
              className="gap-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
              onClick={toggleMenu}
            >
              <HomeIcon className="text-white" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="gap-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
              onClick={toggleMenu}
            >
              <PersonIcon className="text-white" />
              About-Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className="gap-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
              onClick={toggleMenu}
            >
              <LayersIcon className="text-white" />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className="gap-2  flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
              onClick={toggleMenu}
            >
              <PhoneIcon className="text-white" />
              Contact-Us
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
