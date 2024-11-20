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
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { user } = useUser();

  useEffect(() => {
    if (user?.fullName) {
      localStorage.setItem("UserName", user.fullName);
    }
  }, [user]);

  return (
    <>
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
              <button className="px-5 py-2 rounded-[20px] text-white bg-green-500 hover:bg-olive font-semibold shadow-md transition duration-300 transform hover:scale-105">
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
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <CloseIcon className="text-black" /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-black/60 text-white z-30 flex flex-col items-center py-4 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {[
          { to: "/", label: "Home", Icon: HomeIcon },
          { to: "/about", label: "About", Icon: PersonIcon },
          { to: "/menu", label: "menus", Icon: LayersIcon },
          { to: "/contact-us", label: "Contact-Us", Icon: PhoneIcon },
        ].map(({ to, label, Icon }, index) => (
          <li key={index} className="mb-4 list-none">
            <NavLink
              to={to}
              onClick={toggleMenu}
              className="flex gap-2 items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
            >
              <Icon className="text-white" />
              {label}
            </NavLink>
          </li>
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
