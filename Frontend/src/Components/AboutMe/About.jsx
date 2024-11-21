import React from "react";
import Myself from "./Myself/Myself";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Footer from "../Footer/Footer";

function About() {
  return (
    <div className="flex justify-center">
      <div className="w-4/5">
        <div className="min-h-screen text-black flex  p-8 mb-10">
          <div className="flex max-w-[60%] md:grid-cols-[70%_30%] gap-10">
            {/* Left Column: Content */}
            <div className="space-y-10">
              <div className=" backdrop-filter bg-gray-400 backdrop-blur-md bg-opacity-10 border border-gray-100 rounded-xl shadow-lg p-8 transition duration-500 ">
                <h1 className="text-3xl mb-6 text-green-500 text-left">
                  About Us
                </h1>
                <p className="text-lg leading-relaxed text-left">
                  Welcome to <strong>TasteBudsTreat's!</strong> We are{" "}
                  <strong>Ansh Bansal, Arjun Gupta, and Adarsh Sharma</strong>,
                  a trio of food enthusiasts currently in our{" "}
                  <strong>
                    third year of Bachelor of Computer Applications (BCA)
                  </strong>{" "}
                  at{" "}
                  <strong>
                    Sri Guru Tegh Bahadur Institute of Management and IT,
                    affiliated with Guru Gobind Singh Indraprastha University
                    (GGSIPU).
                  </strong>{" "}
                  Our passion for food and technology has inspired us to create
                  this platform, where we aim to share our love for delicious
                  treats with food lovers everywhere. TasteBudsTreat's is here
                  to delight your taste buds with the best culinary experiences!
                </p>
              </div>

              {/* Myself Component will appear here on small screens */}

              <div className=" backdrop-filter bg-gray-400 backdrop-blur-md bg-opacity-10 border border-gray-100 rounded-xl shadow-lg p-8 transition duration-500 ">
                <h1 className="text-3xl  mb-6 text-green-500 text-left">
                  About TasteBudsTreat's
                </h1>
                <p className="text-lg leading-relaxed text-left">
                  At <strong>TasteBudsTreat's</strong>, we believe that food is
                  not just about sustenance but a{" "}
                  <strong>source of joy and togetherness</strong>. Our platform
                  is dedicated to discovering and sharing delectable recipes,
                  food tips, and culinary adventures that ignite the senses.
                  From traditional dishes to innovative creations, we celebrate
                  the diversity and richness of flavors from around the world.
                  Whether you're a seasoned chef or a food enthusiast,{" "}
                  <strong>TasteBudsTreat's is your go-to destination</strong>{" "}
                  for exploring exciting, delicious, and easy-to-follow recipes
                  that will leave you craving more. Join us in this flavorful
                  journey and let your taste buds experience the ultimate treat!
                </p>
              </div>

              <div className=" backdrop-filter bg-gray-400 backdrop-blur-md bg-opacity-10 border border-gray-100 rounded-xl shadow-lg p-8 text-center transition duration-500 ">
                <h1 className="text-3xl  mb-6 text-green-500 text-left">
                  Connect with Us
                </h1>
                <div className="flex justify-start space-x-6 text-3xl">
                  <a
                    href="https://www.instagram.com/_arjungupta29/"
                    target="_"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="hover:text-pink-500 transition duration-300" />
                  </a>
                  <a
                    href="https://github.com/Arjung352/"
                    target="_"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon className="hover:text-gray-500 transition duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arjun-gupta-948b11291"
                    target="_"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className="hover:text-blue-500 transition duration-300" />
                  </a>
                  <a
                    href="mailto:arjung7751@gmail.com"
                    target="_"
                    rel="noopener noreferrer"
                  >
                    <MailOutlineIcon className="hover:text-red-500 transition duration-300" />
                  </a>
                  <a
                    href="https://x.com/_arjungupta29"
                    target="_"
                    rel="noopener noreferrer"
                  >
                    <XIcon className="hover:text-gray-400 transition duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Myself Component on large screens */}
          </div>
          <div className="hidden w-full  md:flex md:justify-end md:items-start h-screen">
            <Myself />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
