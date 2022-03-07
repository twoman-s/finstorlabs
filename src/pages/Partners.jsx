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
    <div className="partners-wrapper">
      <div className="pHead">
        <h1>Our Partners</h1>
      </div>
      <div className="partners">
        <div className="partnerlist zerodha">
          <img src={zerodha} alt="" />
        </div>
        <div className="partnerlist upstox">
          <img src={upstox} alt="" />
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
  );
};

export default Partners;
