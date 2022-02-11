import React from "react";
import "./Styles/Quote.css";
import signature from "./../Assets/Images/signature.png";

const Quote = () => {
  return (
    <div className="quote-wrapper">
      <div class="box">
        <i class="fas fa-quote-right fa2"></i>
        <div class="text">
          <i class="fas fa-quote-left fa1"></i>
          <div>
            <p>
              If you don't find a way to make money while you sleep, you will
              work until you die.
            </p>
            <img className="signature" src={signature} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
