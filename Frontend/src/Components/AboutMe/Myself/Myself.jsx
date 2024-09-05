import React from "react";
import "./Myself.css";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
function Myself() {
  return (
    <div className="outter">
      <div className="Myself h-fit">
        <div className="Pic bg-[url('https://www.vegrecipesofindia.com/wp-content/themes/veg-recipes-2020/assets/icons/logo/logomark.svg')] pic-container">
          <img
            src="./src/Components/AboutMe/Myself/Me.png"
            alt="Arjun"
            className="MyPic"
          />
          <p className="Name poetsen-one-regular">Arjun Gupta</p>
        </div>
        <div className="AboutMe">
          <p className=" font-semibold font-sans pb-2">
            Hi, I am Arjun Gupta A 2nd Year BCA Student In SGTBIMIT Affiliated
            in IPU.A MERN Stack Developer with a passion for building dynamic
            and responsive web applications. Skilled in FRONT-END technologies
            such as HTML, CSS, JavaScript, and ReactJS, as well as BACK-END
            technologies including Node.js, PHP, Express.js, My-SQL and MongoDB.
            Comfortable working with frameworks and libraries like Bootstrap,
            Material-UI, and Tailwind CSS. Dedicated to continuous learning and
            staying up-to-date with the latest industry trends.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Myself;
