import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, odio
          eos! Doloribus ut fuga voluptate quis distinctio expedita neque quia
          recusandae, eligendi delectus eveniet consequatur nihil. Doloremque
          beatae numquam maxime?
        </p>
      </div>
    </div>
  );
};

export default About;
