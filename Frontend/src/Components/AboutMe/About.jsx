import React from "react";
import Myself from "./Myself/Myself";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
function About() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
        marginTop: "1rem",
      }}
    />
  );
  return (
    <div className="flex justify-center">
      <div className="w-4/5 flex flex-row ">
        <div className=" font-semibold font-2xl mr-16 mt-8 font-Nato">
          <h1 className="font-bold text-4xl mb-4 text-olive">About Us</h1>
          <h2 className="text-3xl mb-4">Namaste</h2>
          <p>
            We are glad that you are here and thank you for stopping by on
            TasteBudsTreat's which has pure vegetarian recipes, mostly Indian
            but some World Cuisine as well. There are many Eggless Baking
            Recipes as well. Most of the recipes are in step by step pictorial
            guide. They are easy to understand and relate too. Some recipes have
            short videos with the stepwise photo guide.
          </p>
          <ColoredLine color={"black"} />
          <h1 className="font-bold text-4xl mb-4 mt-4 text-olive">Who am I</h1>
          <h2 className="text-3xl mb-4">Hello!</h2>
          <p>
            Hi, I am Arjun Gupta A 2nd Year BCA Student In SGTBIMIT Affiliated
            in IPU.A MERN Stack Developer with a passion for building dynamic
            and responsive web applications. Skilled in FRONT-END technologies
            such as HTML, CSS, JavaScript, and ReactJS, as well as BACK-END
            technologies including Node.js, PHP, Express.js, My-SQL and MongoDB.
            Comfortable working with frameworks and libraries like Bootstrap,
            Material-UI, and Tailwind CSS. Dedicated to continuous learning and
            staying up-to-date with the latest industry trends.
          </p>
          <ColoredLine color={"black"} />
          <h1 className="font-bold text-4xl mb-4 mt-4 text-olive">
            Connect me!
          </h1>
          <div>
            <a href="https://www.instagram.com/_arjungupta29/" target="_">
              <InstagramIcon className="mr-2 cursor-pointer" />
            </a>
            <a href="https://github.com/Arjung352/" target="_">
              <GitHubIcon className="mr-2 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-gupta-948b11291"
              target="_"
            >
              <LinkedInIcon className="cursor-pointer mr-2" />
            </a>
            <a href="mailto:arjung7751@gmail.com" target="_">
              <MailOutlineIcon className="cursor-pointer mr-2" />
            </a>
            <a href="https://x.com/_arjungupta29" target="_">
              <XIcon className="cursor-pointer" />
            </a>
          </div>
        </div>
        <Myself />
      </div>
    </div>
  );
}
export default About;
