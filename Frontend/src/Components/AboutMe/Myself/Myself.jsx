import React, { useState, useEffect } from "react";
import "./Myself.css";

const profiles = [
  {
    name: "Ansh Bansal",
    description: "I’m a third-year Computer Applications student with a strong passion for Full Stack Development. I specialize in turning creative ideas into dynamic web experiences, balancing both design and performance. Beyond coding, I’m an enthusiastic and quick learner with a strong drive to continuously enhance my skills.",
    imgSrc: "./src/Components/AboutMe/Myself/ansh.jpeg",
  },
  {
    name: "Adarsh Sharma",
    description: "I’m a third-year Computer Applications student with a strong passion for Full Stack Development. I specialize in turning creative ideas into dynamic web experiences, balancing both design and performance. Beyond coding, I’m an enthusiastic and quick learner with a strong drive to continuously enhance my skills.",
    imgSrc: "./src/Components/AboutMe/Myself/adarsh.jpg",
  },
  {
    name: "Arjun Gupta",
    description: "I’m a third-year Computer Applications student with a strong passion for Full Stack Development. I specialize in turning creative ideas into dynamic web experiences, balancing both design and performance. Beyond coding, I’m an enthusiastic and quick learner with a strong drive to continuously enhance my skills.",
    imgSrc: "./src/Components/AboutMe/Myself/arjun.png",
  },
];

function Myself() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="outer">
      <article className="myself-container">
        <img
          src={profiles[currentIndex].imgSrc}
          alt={profiles[currentIndex].name}
          className="my-pic"
        />
        <h2 className="name">{profiles[currentIndex].name}</h2>
        <p className="about-me">{profiles[currentIndex].description}</p>
      </article>
    </section>
  );
}

export default Myself;
