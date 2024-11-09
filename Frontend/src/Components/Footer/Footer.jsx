import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div>
      <hr className=" border border-gray-400" />
      <div className="flex justify-between my-10 font-WorkSans mx-8">
        <div>
          <img
            src="https://res.cloudinary.com/dmxlqw5ix/image/upload/v1731066887/qxhi70lws9tx5ssy8ff3.png"
            className="h-16 "
          />
          <p className="mt-8 w-4/6 font- text-lg text-gray-600">
            Dish Will Be For You where You Want It To Be!
          </p>
        </div>
        <div>
          <p className="font-bold text-xl">Usefull Links</p>
          <div className="text-lg text-gray-600 flex flex-col gap-3">
            <a className="mt-3">About Us</a>
            <a>Blogs</a>
            <a>FAQ</a>
          </div>
        </div>
        <div>
          <a className="font-bold text-xl">Main Menu</a>
          <div className="text-lg text-gray-600 flex flex-col gap-3">
            <a className="mt-3">Home</a>
            <a>Offers</a>
            <a>Menus</a>
          </div>
        </div>
        <div>
          <a className="font-bold text-xl">Contact-Us</a>
          <div className="text-lg text-gray-600 flex flex-col gap-3">
            <a href="mailto:tastebudstreat29@gmail.com" className="mt-3">
              Tastebudstreat29@gmail.com
            </a>
            <a href="tel:9999882574">9999882574</a>
            <a>Social Media</a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center relative">
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
        <p className="absolute left-[29rem] top-2 text-gray-600">
          &copy; 2024 All Rights Reserved | TasteBudsTreat
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
