import React, { useState, useEffect } from "react";
import "./Myself.css"; 

const profiles = [
  {
    name: "Ansh Bansal",
    description:"I’m a third-year Computer Applications student with a strong passion for Full Stack Development. I specialize in turning creative ideas into dynamic web experiences, balancing both design and performance. Beyond coding, I stay current with web trends and love experimenting with new design concepts. I’m an enthusiastic and quick learner with a strong drive to continuously enhance my skills.",
    imgSrc: "./src/Components/AboutMe/Myself/Ansh.png", 
  },
  {
    name: "Adarsh Sharma",
    description:
      "Hi, I am Adarsh Sharma. A 2nd Year BCA Student. I am enthusiastic about coding and learning new technologies. Skilled in React and Node.js, I love to build interactive web applications.",
    imgSrc: "./src/Components/AboutMe/Myself/Adarsh.png", 
  },
  {
    name: "Arjun Gupta",
    description:
      "Hi, I am Arjun Gupta. A 2nd Year BCA Student In SGTBIMIT. A MERN Stack Developer with a passion for building dynamic and responsive web applications. Skilled in both frontend and backend technologies.",
    imgSrc: "./src/Components/AboutMe/Myself/Arjun.png", 
  },
];

function Myself() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="outer">
      <div className="Myself h-fit">
        <div className="Pic bg-[url('https://www.vegrecipesofindia.com/wp-content/themes/veg-recipes-2020/assets/icons/logo/logomark.svg')] pic-container">
          <img
            src={profiles[currentIndex].imgSrc}
            alt={profiles[currentIndex].name}
            className="MyPic"
          />
          <p className="Name poetsen-one-regular">{profiles[currentIndex].name}</p>
        </div>
        <div className="AboutMe">
          <p className="font-semibold font-sans pb-2">
            {profiles[currentIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Myself;
