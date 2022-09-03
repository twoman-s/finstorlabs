import React from "react";
import "./Styles/Partners.css";
import hdfc from "./../Assets/Partners/hdfc.png";
import zerodha from "./../Assets/Partners/zerodha.png";
import smallcase from "./../Assets/Partners/smallcase.png";
import tradingview from "./../Assets/Partners/tradingview.png";
import upstox from "./../Assets/Partners/upstox.png";
import levelup from "./../Assets/Partners/levelup.png";
const Partners = () => {
  return (
    <section id="partners">
      <div className="partners-wrapper">
        <div className="pHead">
          <h1>Our Partners</h1>
        </div>
        <div className="partners">
          <div className="partnerlist zerodha">
            <a href="https://zerodha.com/open-account?c=ZMPEOO" target="_blank" rel="noreferrer">
              <img src={zerodha} alt="" />
            </a>
          </div>
          <div className="partnerlist upstox" target="_blank" rel="noreferrer">
            <a href="https://bit.ly/2QSQvD2">
              <img src={upstox} alt="" />
            </a>
          </div>
          <div className="partnerlist smallcase">
            <img src={smallcase} alt="" />
          </div>
          <div className="partnerlist hdfc">
            <img src={hdfc} alt="" />
          </div>
          <div className="partnerlist adityabirla">
            <img src={tradingview} alt="" />
          </div>
          <div className="partnerlist tickertape">
            <img src={levelup} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
