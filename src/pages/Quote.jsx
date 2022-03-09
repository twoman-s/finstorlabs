import React from "react";
import "./Styles/Quote.css";
import signature from "./../Assets/Images/signature.png";

const Quote = () => {
  return (
    // <div className="quote-wrapper">
    //   <div class="box">
    //     <div class="text">
    //       <i class="fas fa-quote-left fa1"></i>
    //       <i class="fas fa-quote-right fa2"></i>
    //       <div>
    //         <p>
    //           If you don't find a way to make money while you sleep, you will
    //           work until you die.
    //         </p>
    //         <img className="signature" src={signature} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section id="quote">
      <div class="quote">
        <div class="qr">
          <i class="fas fa-quote-left"></i>
        </div>
        <div class="q">
          <div class="img">
            <img
              src="https://finstorlabs.in/wp-content/uploads/2021/04/Warren-Buffett-HD-Wallpaper-scaled-1-1024x768.jpg"
              alt=""
            />
          </div>
          <div class="qt">
            If you don't find a way to make money while you sleep, you will work
            until you die.
          </div>
          <div class="imgw">
            <img
              src="https://finstorlabs.in/wp-content/uploads/2021/04/signature12.png"
              alt=""
            />
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
