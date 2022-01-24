import React, { useEffect } from "react";
import "./Styles/Testimonials.css";
import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";
import quote from "./../Assets/Images/quote.png";

const Testimonials = () => {
  useEffect(() => {
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grapCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      loop: true,
    });
  }, []);
  return (
    <section>
      <div className="testimonials">
        <h1>Testimonials</h1>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonialBox">
                <img src={quote} alt="quote" className="quote" />
                <div className="contents">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus quibusdam totam ipsam ipsa consequuntur alias
                    explicabo placeat, soluta pariatur id vel vitae in neque
                    modi velit? Explicabo nam rem impedit.
                  </p>
                  <div className="details">
                    <div className="imgIcon">
                      <img
                        src="https://finstorlabs.in/wp-content/uploads/2021/04/d4c97941-358f-4d6c-85c3-315f75f2ce96-300x300.jpg"
                        alt=""
                      />
                    </div>
                    <h3>
                      Arun Kumar
                      <br />
                      <span>Entrepreneur</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonialBox">
                <img src={quote} alt="quote" className="quote" />
                <div className="contents">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus quibusdam totam ipsam ipsa consequuntur alias
                    explicabo placeat, soluta pariatur id vel vitae in neque
                    modi velit? Explicabo nam rem impedit.
                  </p>
                  <div className="details">
                    <div className="imgIcon">
                      <img
                        src="https://finstorlabs.in/wp-content/uploads/2021/04/d4c97941-358f-4d6c-85c3-315f75f2ce96-300x300.jpg"
                        alt=""
                      />
                    </div>
                    <h3>
                      Arun Kumar
                      <br />
                      <span>Entrepreneur</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonialBox">
                <img src={quote} alt="quote" className="quote" />
                <div className="contents">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus quibusdam totam ipsam ipsa consequuntur alias
                    explicabo placeat, soluta pariatur id vel vitae in neque
                    modi velit? Explicabo nam rem impedit.
                  </p>
                  <div className="details">
                    <div className="imgIcon">
                      <img
                        src="https://finstorlabs.in/wp-content/uploads/2021/04/d4c97941-358f-4d6c-85c3-315f75f2ce96-300x300.jpg"
                        alt=""
                      />
                    </div>
                    <h3>
                      Arun Kumar
                      <br />
                      <span>Entrepreneur</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
