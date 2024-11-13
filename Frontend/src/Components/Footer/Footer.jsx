import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="text-black">
      <hr className="border border-gray-600" />
      <div className="flex flex-col md:flex-row justify-between items-center my-10 font-WorkSans mx-8">
        <div className="text-center md:text-left">
          <img
            src="https://res.cloudinary.com/dmxlqw5ix/image/upload/v1731066887/qxhi70lws9tx5ssy8ff3.png"
            className="h-16 mx-auto md:mx-0"
            alt="Logo"
          />
          <p className="mt-8 text-lg text-gray-700">
            Dish Will Be For You where You Want It To Be!
          </p>
        </div>
        <div className="mt-6 md:mt-0 text-center md:text-left">
          <p className="font-bold text-xl">Useful Links</p>
          <div className="text-lg text-gray-700 flex flex-col gap-3">
            <a href="/about" className="mt-3 hover:text-green-500">About Us</a>
            <a href="#" className="hover:text-green-500">Blogs</a>
            <a href="/contact-us" className="hover:text-green-500">FAQ</a>
          </div>
        </div>
        <div className="mt-6 md:mt-0 text-center md:text-left">
          <p className="font-bold text-xl">Main Menu</p>
          <div className="text-lg text-gray-700 flex flex-col gap-3">
            <a href="/" className="mt-3 hover:text-green-500">Home</a>
            <a href="/menu" className="hover:text-green-500">Offers</a>
            <a href="/menu" className="hover:text-green-500">Menus</a>
          </div>
        </div>
        <div className="mt-6 md:mt-0 text-center md:text-left">
          <p className="font-bold text-xl">Contact Us</p>
          <div className="text-lg text-gray-700 flex flex-col gap-3">
            <a href="mailto:tastebudstreat29@gmail.com" className="mt-3 hover:text-green-500">
              Tastebudstreat29@gmail.com
            </a>
            <a href="tel:9999882574" className="hover:text-green-500">9999882574</a>
            <a href="#" className="hover:text-green-500">Social Media</a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mx-8 mb-5">
        <div className="flex gap-6">
          <div className="p-2 bg-green-500 rounded-full hover:scale-105 transition-all ease-in-out shadow-xl">
            <a href="mailto:tastebudstreat29@gmail.com" className="text-white">
              <MailOutlineIcon />
            </a>
          </div>
          <div className="p-2 bg-green-500 rounded-full hover:scale-105 transition-all ease-in-out shadow-xl">
            <a href="https://github.com/Arjung352/TasteBudsTreat" className="text-white">
              <GitHubIcon />
            </a>
          </div>
          <div className="p-2 bg-green-500 rounded-full hover:scale-105 transition-all ease-in-out shadow-xl">
            <a href="https://www.instagram.com/tastebudstreat29" className="text-white">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <p className="text-gray-700 text-center md:text-left">
          &copy; 2024 All Rights Reserved | TasteBudsTreat
        </p>
      </div>
    </div>
  );
}

export default Footer;
