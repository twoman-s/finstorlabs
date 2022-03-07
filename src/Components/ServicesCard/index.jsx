import React from "react";
import "./ServicesCard.css";
const ServicesCard = ({ data }) => {
  return (
    <div className="card">
      <div className="imgBx">
        <i className={data.icon}></i>
      </div>
      <div className="card-content">
        <h2 className="head">{data.head}</h2>
        <p>{data.content}</p>
        {/* <a href="#">Read More</a> */}
      </div>
    </div>
  );
};

export default ServicesCard;
