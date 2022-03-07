import React, { useEffect } from "react";
import "./Styles/Testimonials.css";
import quote from "./../Assets/Images/quote.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./Data/TestimonialsData";
const PrevButton = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="far fa-arrow-alt-circle-left"></i>
    </div>
  );
};
const NextButton = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="far fa-arrow-alt-circle-right"></i>
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
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
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <section className="testimonialsSection">
      <div className="tHead">
        <h1 className="testimonialsHead">Testimonials</h1>
      </div>
      <div className="testimonials">
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
