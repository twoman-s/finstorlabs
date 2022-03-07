import React from "react";
import "./Styles/Products.css";
import easycharts from "./../Assets/Images/easycharts.png";
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
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "300px",
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
          slidesToShow: 2,
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
          <article class="pcard">
            <div class="card__img">
              <img
                src="https://www.marketloops.in/wp-content/uploads/2021/01/PicsArt_01-18-04.38.061.jpg"
                alt=""
              />
              <p>
                Helps traders and investors by providing curated stock market
                insights with market news, result updates etc.
              </p>
            </div>
            <div class="card__name">
              <a href="https://www.marketloops.in/" target="_blank">
                Explore Now
              </a>
            </div>
          </article>
          <article class="pcard">
            <div class="card__img">
              <img src={easycharts} alt="" />
              <p>
                EasyCharts stock screener is a productive too for swing traders
                and day traders. EasyCharts help you to quickly scan momentum
                stocks.
              </p>
            </div>
            <div class="card__name">
              <a href="https://www.easycharts.in/" target="_blank">
                Explore Now
              </a>
            </div>
          </article>
        </Slider>
        {/* <article class="pcard">
          <div class="card__img">
            <img src={marketloops} alt="" />
          </div>
          <div class="card__name">
            <p>Explore Now</p>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Products;
