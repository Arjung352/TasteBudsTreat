import React from "react";
import Myself from "./Myself/Myself";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Chatbot from "../ChatBot/Chatbot";

function About() {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex flex-col items-center">
        <Chatbot />
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row max-md:pt-0 py-8">
            <div className="lg:hidden w-full mb-8">
              <Myself />
            </div>

            <div className="flex-1 flex flex-col  justify-center space-y-8 max-md:flex-col max-md:items-center max-md:justify-center">
              <div className="backdrop-filter max-md:w-11/12 bg-gray-400 backdrop-blur-md bg-opacity-10 border border-gray-100 rounded-xl shadow-lg p-6 transition duration-500">
                <h1 className="text-2xl sm:text-3xl mb-4 text-green-500 text-left">
                  About Us
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-left">
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

              {/* About TasteBudsTreat's */}
              <div className="backdrop-filter max-md:w-11/12 bg-gray-400 backdrop-blur-md bg-opacity-10 border border-gray-100 rounded-xl shadow-lg p-6 transition duration-500">
                <h1 className="text-2xl sm:text-3xl mb-4 text-green-500 text-left">
                  About TasteBudsTreat's
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-left">
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

              {/* Connect with Us */}
              <div className="backdrop-filter bg-gray-400 backdrop-blur-md bg-opacity-10 border border-gray-100 rounded-xl shadow-lg p-6 transition duration-500">
                <h1 className="text-2xl sm:text-3xl mb-4 text-green-500 text-left">
                  Connect with Us
                </h1>
                <div className="flex justify-start space-x-6 text-2xl sm:text-3xl">
                  <a
                    href="https://www.instagram.com/_arjungupta29/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition duration-300"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://github.com/Arjung352/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-500 transition duration-300"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arjun-gupta-948b11291"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="mailto:arjung7751@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition duration-300"
                  >
                    <MailOutlineIcon />
                  </a>
                  <a
                    href="https://x.com/_arjungupta29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    <XIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/3">
              <Myself />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
