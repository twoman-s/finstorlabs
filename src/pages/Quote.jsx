import React from "react";
import "./Styles/Quote.css";
import signature from "./../Assets/Images/signature.png";
import warren from "./../Assets/Images/warren.jpg";
const Quote = () => {
  return (
    <section id="quote">
      <div class="quote">
        <div class="qr">
          <i class="fas fa-quote-left"></i>
        </div>
        <div class="q">
          <div class="img">
            <img src={warren} alt="" />
          </div>
          <div class="qt">
            If you don't find a way to make money while you sleep, you will work
            until you die.
          </div>
          <div class="imgw">
            <img src={signature} alt="" />
          </div>
        </div>
        <div class="qr">
          <i class="fas fa-quote-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Quote;
