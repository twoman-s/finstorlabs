import React from "react";
import "./Styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero" >
        <div className="blend">
        <div className="content">
          <h1>We help you win the stock market</h1>
          <a className="join__btn" href="#">
            Join Us
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
