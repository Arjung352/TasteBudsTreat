import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <hr className=" border border-gray-400" />
      <div className="flex justify-between my-10 font-WorkSans max-md:mx-4 mx-8 max-md:flex-col max-md:gap-5">
        <div className="flex flex-col items-center justify-center text-center max-md:flex-col max-md:items-center max-md:justify-center">
          <img
            src="https://res.cloudinary.com/dmxlqw5ix/image/upload/v1731066887/qxhi70lws9tx5ssy8ff3.png"
            className="h-16"
            alt="Logo"
          />
          <p className="mt-8 w-4/6 text-lg text-gray-600">
            Dish Will Be For You where You Want It To Be!
          </p>
        </div>

        <div>
          <p className="font-bold text-xl">Usefull Links</p>
          <div className="text-lg text-gray-600 flex flex-col gap-3">
            <Link className="mt-3" to="/About">
              About Us
            </Link>
            <Link to="https://blogingdotblog.netlify.app/" target="_blank">
              Blogs
            </Link>
            <Link to="/Contact-Us#FAQ">FAQ</Link>
          </div>
        </div>
        <div>
          <Link className="font-bold text-xl">Main Menu</Link>
          <div className="text-lg text-gray-600 flex flex-col gap-3">
            <Link className="mt-3" to="/">
              Home
            </Link>
            <Link to="/#Popular">Popular</Link>
            <Link to="/menu">Menu</Link>
          </div>
        </div>
        <div>
          <Link className="font-bold text-xl">Contact-Us</Link>
          <div className="text-lg text-gray-600 flex flex-col gap-3">
            <Link to="mailto:tastebudstreat29@gmail.com" className="mt-3">
              Tastebudstreat29@gmail.com
            </Link>
            <Link to="https://www.instagram.com/tastebudstreat29/">
              Instagram
            </Link>
            <Link>Social Media</Link>
          </div>
        </div>
      </div>
      <div className=" relative flex justify-between items-center max-md:flex-col">
        <div className="flex gap-6 mx-8 mb-5">
          <div className="p-2 bg-green-500 rounded-full hover:scale-105 transition-all ease-in-out shadow-xl">
            <a href="mailto:tastebudstreat29@gmail.com" className="text-white">
              <MailOutlineIcon />
            </a>
          </div>
          <div className="p-2 bg-green-500 rounded-full hover:scale-105 transition-all ease-in-out shadow-xl">
            <a
              href="https://github.com/Arjung352/TasteBudsTreat"
              className="text-white"
            >
              <GitHubIcon />
            </a>
          </div>
          <div className="p-2 bg-green-500 rounded-full hover:scale-105 transition-all ease-in-out shadow-xl">
            <a
              href="https://www.instagram.com/tastebudstreat29"
              className="text-white"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
        <p className=" max-md:text-center md:absolute md:left-[33rem] md:top-2 text-gray-600">
          &copy; 2024 All Rights Reserved | TasteBudsTreat
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
