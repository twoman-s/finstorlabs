import React from "react";
import "./Styles/Hero.css";
import hero from "./../Assets/Images/hero2.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section id="hero">
      <div className="heroContainer">
        <div className="heroContent">
          <h1>We help you win the Stock Market</h1>
          <p>Join the next billion revolution</p>
          <Link to="/coursedetails">Join Us</Link>
        </div>
        <div className="heroImg">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
