import React, { useState, useEffect } from "react";
import "./Myself.css";

const profiles = [
  {
    name: "Arjun Gupta",
    description:
      "I’m a third-year Computer Applications student with a strong passion for Full Stack Development. I specialize in turning creative ideas into dynamic web experiences, balancing both design and performance. Beyond coding, I’m an enthusiastic and quick learner with a strong drive to continuously enhance my skills.",
    imgSrc: "./src/Components/AboutMe/Myself/arjun.png",
  },
  {
    name: "Ansh Bansal",
    description:
      "I’m a third-year Computer Applications student with a strong passion for Full Stack Development. I specialize in turning creative ideas into dynamic web experiences, balancing both design and performance. Beyond coding, I’m an enthusiastic and quick learner with a strong drive to continuously enhance my skills.",
    imgSrc: "./src/Components/AboutMe/Myself/ansh.jpeg",
  },
  {
    name: "Adarsh Sharma",
    description:
      "I’m a third-year Computer Applications student with a strong passion for Full Stack Development. I specialize in turning creative ideas into dynamic web experiences, balancing both design and performance. Beyond coding, I’m an enthusiastic and quick learner with a strong drive to continuously enhance my skills.",
    imgSrc: "./src/Components/AboutMe/Myself/adarsh.jpg",
  },
];

function Myself() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("slide-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("slide-out"); // Trigger slide-out animation

      setTimeout(() => {
        // Update the profile index and trigger slide-in animation
        setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
        setAnimationClass("slide-in"); // Apply slide-in animation
      }, 1000); // Wait for slide-out animation to finish
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="content-container" className="outer">
      <section className="myself-container bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <img
          src={profiles[currentIndex].imgSrc}
          alt={profiles[currentIndex].name}
          className={`my-pic ${animationClass}`}
        />
        <h2 className={`name  ${animationClass}`}>
          {profiles[currentIndex].name}
        </h2>
        <p className={`about-me ${animationClass}`}>
          {profiles[currentIndex].description}
        </p>
      </section>
    </div>
  );
}

export default Myself;
