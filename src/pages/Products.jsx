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
          <div class="prcard">
            <div class="primgBx">
              <img
                src="https://i0.wp.com/nextlevelpodcast.com/wp-content/uploads/2020/01/Focus-Lens-NextLevelPodcast.jpg?fit=876%2C874&ssl=1"
                alt=""
              />
              <div class="prhead">
                <i class="fas fa-infinity"></i>
                <h3>Marketloops</h3>
              </div>
            </div>
            <div class="prcontent">
              <a href="https://www.marketloops.in/" target="_blank">
                Marketloops
              </a>
              <p>
                Marketloops helps traders and investors by providing curated
                stock market insights with market news, result updates etc.
              </p>
            </div>
          </div>
          <div class="prcard">
            <div class="primgBx">
              <img
                src="https://i0.wp.com/nextlevelpodcast.com/wp-content/uploads/2020/01/Focus-Lens-NextLevelPodcast.jpg?fit=876%2C874&ssl=1"
                alt=""
              />
              <div class="prhead">
                <i class="far fa-chart-bar"></i>
                <h3>EasyCharts</h3>
              </div>
            </div>
            <div class="prcontent">
              <a href="https://www.easycharts.in/" target="_blank">
                EasyCharts
              </a>

              <p>
                EasyCharts stock screener is a productive too for swing traders
                and day traders. EasyCharts help you to quickly scan momentum
                stocks.
              </p>
            </div>
          </div>
          <div class="prcard">
            <div class="primgBx">
              <img
                src="https://i0.wp.com/nextlevelpodcast.com/wp-content/uploads/2020/01/Focus-Lens-NextLevelPodcast.jpg?fit=876%2C874&ssl=1"
                alt=""
              />
              <div class="prhead">
                <i class="fas fa-bullseye"></i>
                <h3>Coming Soon</h3>
              </div>
            </div>
            <div class="prcontent">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Keep in touch
              </a>
              <p>
                We are launching new products and services soon to help traders
                and investors.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Products;

{
  /* <article class="pcard">
    

            <div class="card__img">
              <h2 className="cardHead">Marketloops</h2>
              <p>
                Marketloops helps traders and investors by providing curated
                stock market insights with market news, result updates etc.
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
              <h2 className="cardHead">EasyCharts</h2>
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
          <article class="pcard">
            <div class="card__img">
              <h2 className="cardHead">Coming Soon</h2>
              <p>
                We are launching new products and services soon to help traders
                and investors.
              </p>
            </div>
            <div class="card__name">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Keep in touch
              </a>
            </div>
          </article> */
}
