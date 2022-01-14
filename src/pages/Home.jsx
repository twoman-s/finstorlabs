import React from "react";
import "./Styles/Home.css";

const Home = () => {
  return (
    <>
      {/* <!--==================== HOME ====================--> */}
      <section class="home" id="home">
        <div class="home__container container grid">
          <img
            src="https://cdn.pixabay.com/photo/2016/06/13/15/07/presentation-1454403_960_720.png"
            alt=""
            class="home__img"
          />

          <div class="home__data">
            <h1 class="home__title">Financial dreams Delivered 🙂</h1>
            <p class="home__description">
              Finstorlabs simplifies finance management for you, advices you
              with the right solutions to address your financial concerns and
              plans a secure financial future.
            </p>
            <a href="#about" class="button button--flex">
              Consult
            </a>
          </div>

          <div class="home__social">
            <span class="home__social-follow">Follow Us</span>

            <div class="home__social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="home__social-link"
              >
                <i class="ri-facebook-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="home__social-link"
              >
                <i class="ri-instagram-line"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                class="home__social-link"
              >
                <i class="ri-twitter-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
