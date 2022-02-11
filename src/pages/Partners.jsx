import React from "react";
import "./Styles/Partners.css";
const Partners = () => {
  return (
    <div className="partners-wrapper">
      <h1>Our Partners</h1>
      <div className="partners">
        <div className="partnerlist zerodha">
          <img
            src="https://finstorlabs.in/wp-content/uploads/2021/04/z1.png"
            alt=""
          />
        </div>
        <div className="partnerlist upstox">
          <img
            src="https://finstorlabs.in/wp-content/uploads/2021/04/u1.png"
            alt=""
          />
        </div>
        <div className="partnerlist smallcase">
          <img
            src="https://finstorlabs.in/wp-content/uploads/2021/04/s1.png"
            alt=""
          />
        </div>
        <div className="partnerlist hdfc">
          <img
            src="https://finstorlabs.in/wp-content/uploads/2021/04/h1.png"
            alt=""
          />
        </div>
        <div className="partnerlist adityabirla">
          <img
            src="https://finstorlabs.in/wp-content/uploads/2021/04/a1.png"
            alt=""
          />
        </div>
        <div className="partnerlist tickertape">
          <img
            src="https://www.tickertape.in/images/svg/logos/tickertape-logo.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
