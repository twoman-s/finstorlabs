import React from "react";
import ServicesCard from "../Components/ServicesCard";
import "./Styles/Products.css";
import { data } from "./Data/ServicesData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 969,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="products-wrapper">
      <h1>Our Services</h1>
      <Slider {...settings}>
        {data.map((service) => {
          return <ServicesCard data={service} />;
        })}
      </Slider>
    </div>
  );
};

export default Products;
