import React from "react";
import "./Styles/Hero.css";
import hero from "./../Assets/Images/hero2.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section id="hero">
      <div className="heroContainer">
        <div className="heroContent">
          <h1>Learn Stock Trading Simply</h1>
          <p>
            We provide the best stock market training in Kerala. Master
            technical analysis and trading with our online course.
          </p>
          <Link className="herobtn" to="/coursedetails">
            Know More
          </Link>
        </div>
        <div className="heroImg">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
