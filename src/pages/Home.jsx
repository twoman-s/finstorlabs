import React from "react";
import "./Styles/Home.css";
import img1 from "./../Assets/Images/img1.png";

const Home = () => {
  return (
    <>
      {/* <!--==================== HOME ====================--> */}
      <section className="home" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">Financial dreams Delivered 🙂</h1>
            <p className="home__description">
              Finstorlabs simplifies finance management for you, advices you
              with the right solutions to address your financial concerns and
              plans a secure financial future.
            </p>
            {/* <a href="#about" className="button button--flex">
              Consult
            </a> */}
          </div>
          <img src={img1} alt="" className="home__img" />

          {/* <div className="home__social">
            <span className="home__social-follow">Follow Us</span>

            <div className="home__social-links">
              <a href="https://www.facebook.com/" className="home__social-link">
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                className="home__social-link"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://twitter.com/" className="home__social-link">
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
