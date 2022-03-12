import React from "react";
import "./Styles/Quote.css";
import signature from "./../Assets/Images/signature.png";
import warren from "./../Assets/Images/warren.jpg";
const Quote = () => {
  return (
    <section className="secquote">
      <div className="quote">
        <div className="qr">
          <i className="fas fa-quote-left"></i>
        </div>
        <div className="q">
          <div className="img">
            <img src={warren} alt="" />
          </div>
          <div className="qt">
            If you don't find a way to make money while you sleep, you will work
            until you die.
          </div>
          <div className="imgw">
            <img src={signature} alt="" />
          </div>
        </div>
        <div className="qr">
          <i className="fas fa-quote-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Quote;
