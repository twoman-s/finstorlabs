import React, { useEffect } from "react";
import "./Styles/Testimonials.css";
import quote from "./../Assets/Images/quote.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./Data/TestimonialsData";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
  };
  return (
    <section>
      <div className="testimonials">
        <h1>Testimonials</h1>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {data.map((testimonoal) => {
              return (
                <div className="tcard">
                  <div className="timgBx">
                    <img src={testimonoal.img} alt={testimonoal.name} />
                  </div>
                  <p className="tcontent">
                    <img className="tquote" src={quote} alt="" />
                    {testimonoal.testimony}
                  </p>
                  <p className="tname">
                    <span>{testimonoal.name}</span> {testimonoal.designation}
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
