import React from "react";
import "./ServicesCard.css";
const ServicesCard = ({ data }) => {
  return (
    <div class="card">
      <div class="imgBx">
        <i class={data.icon}></i>
      </div>
      <div class="card-content">
        <h2 class="head">{data.head}</h2>
        <p>{data.content}</p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default ServicesCard;
