import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LayersIcon from "@mui/icons-material/Layers";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import CreateIcon from "@mui/icons-material/Create";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateTotalCartItems } from "../Redux/Slice/CartSlice";
import {
  SignedIn,
  SignedOut,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { useSelector } from "react-redux";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const setToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { user } = useUser();

  useEffect(() => {
    const updatingCartItems = async () => {
      try {
        const username = localStorage.getItem("UserName");
        const response = await axios.get(
          "https://taste-buds-treat-backend.vercel.app/api/cart/show-cart",
          {
            headers: { username },
          }
        );
        // Return the length of the items in the cart
        return response.data.data.length;
      } catch (error) {
        console.error("Error fetching cart data:", error);
        return 0; // Default to 0 in case of an error
      }
    };

    if (user?.fullName) {
      localStorage.setItem("UserName", user.fullName);
      localStorage.setItem("email", user.emailAddresses[0].emailAddress); // Ensure correct email address is stored
      console.log("User logged in:", user.fullName);

      // Update total cart items after fetching
      updatingCartItems().then((total) =>
        dispatch(updateTotalCartItems(total))
      );
    } else {
      // Clear specific user-related items from local storage
      localStorage.removeItem("UserName");
      localStorage.removeItem("email");
      console.log("User logged out, localStorage cleared");
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to reset overflow style when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  const totalItems = useSelector((state) => state.cart.TotalCartItems);

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
              <ul className="flex max-xl:hidden justify-end text-2xl nav font-normal gap-4">
                <li className="mr-8 mt-1 hover:text-darkOlive">
                  <NavLink
                    to="/"
                    className="gap-1 flex justify-center items-center"
                    aria-label="Home"
                  >
                    <HomeIcon />
                    Home
                  </NavLink>
                </li>
                <li className="mr-8 mt-1 hover:text-darkOlive">
                  <NavLink
                    to="/About"
                    className="gap-1 flex justify-center items-center"
                    aria-label="About"
                  >
                    <InfoIcon />
                    About
                  </NavLink>
                </li>
                <li className="mr-8 mt-1 hover:text-darkOlive">
                  <NavLink
                    to="/Menu"
                    className="gap-1 flex justify-center items-center"
                    aria-label="Menu"
                  >
                    <LayersIcon />
                    Menu
                  </NavLink>
                </li>
                <li className="mr-8 mt-1 hover:text-darkOlive">
                  <NavLink
                    to="/Contact-Us"
                    className="gap-1 flex justify-center items-center"
                    aria-label="Contact"
                  >
                    <PhoneIcon />
                    Contact
                  </NavLink>
                </li>
                <button
                  className="relative mr-6 mt-1 hover:text-darkOlive"
                  onClick={setToggle}
                >
                  <p className="gap-1 flex justify-center items-center">
                    <PersonIcon />
                    Admin {dropdownOpen ? " ↑" : " ↓"}
                  </p>
                  <div
                    className={`absolute rounded-xl left-0 mt-2 backdrop-filter bg-gray-400 backdrop-blur-md bg-opacity-30 shadow-lg p-2 z-10 transition-all duration-300 ease-out transform ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
                  >
                    <NavLink
                      to="/admin"
                      className="block rounded-xl  text-lg px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      to="/Register-restaurant"
                      className="block rounded-xl  text-lg px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Register Restaurant
                    </NavLink>
                    <NavLink
                      to="/Register-menu"
                      className="block rounded-xl  text-lg px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Register Dish
                    </NavLink>
                  </div>
                </button>
              </ul>
            </div>
            <div className="flex gap-8 mr-3 w-60">
              <SignedOut>
                <SignUpButton mode="modal">
                  <button className=" max-lg:text-sm max-lg:py-2 max-lg:w-[5.2rem] max-lg:px-2 px-5 py-2 rounded-[20px] text-white bg-green-500 hover:bg-olive font-semibold shadow-md transition duration-300 transform hover:scale-105">
                    Sign In
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
                <NavLink
                  to="/Cart"
                  className="flex items-center justify-center"
                >
                  {/* Display total items in the cart */}
                  <p className="relative left-8 bottom-4 text-white bg-red-400 px-2 rounded-full text-sm">
                    {totalItems || 0}
                  </p>

                  <ShoppingCartIcon className="hover:text-darkOlive" />
                </NavLink>
              </SignedIn>
              <div className="xl:hidden flex">
                <button onClick={toggleMenu} className="text-black">
                  <MenuIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay Menu */}
      <div
        className={`fixed h-svh top-0  max-xl:w-1/2 max-md:w-3/4 max-sm:w-full navbar-img text-white z-30 flex flex-col justify-between items-center  xl:hidden  transform ${
          isMenuOpen ? "-translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className=" flex justify-between w-full ml-7 mt-3">
          {isMenuOpen === true && (
            <button onClick={toggleMenu}>
              <CloseIcon className="text-black" fontSize="medium" />
            </button>
          )}
          <img
            src="https://res.cloudinary.com/dmxlqw5ix/image/upload/v1731066887/qxhi70lws9tx5ssy8ff3.png"
            className="h-20 max-md:h-16"
            alt="Logo"
          />
        </div>
        <div className="flex mt-5 flex-col self-start mb-10 gap-32">
          <ul className="text-black text-xl text-[1.6rem] flex ml-10 flex-col justify-center items-start font-medium font-work gap-16">
            <li>
              <NavLink
                to="/"
                className="gap-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-black"
                onClick={toggleMenu}
              >
                <HomeIcon className="text-black" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="gap-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-black"
                onClick={toggleMenu}
              >
                <InfoIcon className="text-black" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className="gap-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-black"
                onClick={toggleMenu}
              >
                <LayersIcon className="text-black" />
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="gap-2  flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-black"
                onClick={toggleMenu}
              >
                <PhoneIcon className="text-black" />
                Contact
              </NavLink>
            </li>
            <button
              className="relative hover:text-darkOlive"
              onClick={setToggle}
            >
              <p className="gap-1 flex justify-center items-center">
                <PersonIcon />
                Admin {dropdownOpen ? " <" : " >"}
              </p>
              <div
                className={`absolute rounded-xl left-36 -top-10 mt-2 backdrop-filter bg-gray-400 backdrop-blur-md bg-opacity-30 shadow-lg p-2 z-10 transition-all duration-300 ease-out transform ${
                  dropdownOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4 pointer-events-none"
                }`}
              >
                <NavLink
                  to="/admin"
                  className="block rounded-xl  text-lg px-4 py-2 text-black hover:bg-gray-200"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/Register-restaurant"
                  className="block rounded-xl  text-lg px-4 py-2 text-black hover:bg-gray-200"
                >
                  Register Restaurant
                </NavLink>
                <NavLink
                  to="/Register-menu"
                  className="block rounded-xl  text-lg px-4 py-2 text-black hover:bg-gray-200"
                >
                  Register Dish
                </NavLink>
              </div>
            </button>
          </ul>
        </div>
        <div className=" self-start w-full relative">
          <div className="w-full flex justify-center">
            <hr className="absolute -top-10 w-11/12 text-center border-2 border-gray-400" />
          </div>
          <SignedOut>
            <SignUpButton mode="modal">
              <div className="w-full flex items-center justify-center">
                <button className=" max-md:text-xl w-1/2 max-sm:py-3 max-sm:px-3 px-5 py-5 rounded-[20px] text-white bg-green-500 hover:bg-olive font-semibold shadow-md transition duration-300 transform hover:scale-105">
                  Sign In
                </button>
              </div>
            </SignUpButton>
          </SignedOut>
          <div className="flex flex-col-reverse ml-6 mb-5 gap-10 self-start">
            <SignedIn>
              <UserButton
                showName
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10",
                    userButtonOuterIdentifier: "text-xl",
                  },
                  layout: {
                    userButtonAvatarBox: "order-1",
                    userButtonOuterIdentifier: "order-2",
                  },
                }}
              />
              <NavLink to="/Cart" className="flex items-center justify-start">
                {/* Display total items in the cart */}
                <p className="relative left-9 bottom-4 text-white bg-red-400 px-2 rounded-full text-sm">
                  {totalItems || 0}
                </p>

                <ShoppingCartIcon className="text-black hover:text-darkOlive" />
              </NavLink>
            </SignedIn>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
