import React from "react";
import "./Styles/Products.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "20px",
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
    <section id="products">
      <div className="pHead">
        <h1 className="productHead">Our Products</h1>
      </div>
      <div className="productsWrapper">
        <Slider {...settings}>
          <div className="prcard">
            <div className="iconBx">
              <i className="fas fa-infinity"></i>
            </div>
            <h2 className="phead">Marketloops</h2>
            <div className="prcontent">
              Marketloops helps traders and investors by providing curated stock
              market insights with market news, result updates etc.
            </div>
            <a
              href="https://www.marketloops.in/"
              target="_blank"
              rel="noreferrer"
            >
              Explore Now
            </a>
          </div>
          <div className="prcard">
            <div className="iconBx">
              <i className="fas fa-chart-line"></i>
            </div>
            <h2 className="phead">EasyCharts</h2>
            <div className="prcontent">
              EasyCharts stock screener is a productive too for swing traders
              and day traders. EasyCharts help you to quickly scan momentum
              stocks.
            </div>
            <a
              href="https://www.easycharts.in/"
              target="_blank"
              rel="noreferrer"
            >
              Explore Now
            </a>
          </div>
          <div className="prcard">
            <div className="iconBx">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2 className="phead">Coming Soon</h2>
            <div className="prcontent">
              We are launching new products and services soon to help traders
              and investors.
            </div>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Keep in touch
            </a>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Products;
