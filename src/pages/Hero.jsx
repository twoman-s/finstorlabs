import React from "react";
import "./Styles/Hero.css";

const Hero = () => {
  return (
    <section>
      <div className="hero" id="hero">
        <div className="content">
          <h1>We help you win the stock market</h1>
          <a className="join__btn" href="#">
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
