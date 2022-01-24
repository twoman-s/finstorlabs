import React from "react";
import "./Styles/About.css";
import img2 from "./../Assets/Images/img4.gif";

const About = () => {
  return (
    // <!--==================== ABOUT ====================-->
    <section className="about section container" id="about">
      <div className="about__container grid">
        <div className="about__data">
          <h2 className="section__title about__title">Its about "Planning"</h2>
          <p className="about__description">
            A good Financial Planner goes beyond managing a client’s finances;
            he strives to understand a client's desires and focuses his energies
            & expertise to bring them to life. At Finstorlabs, being an expert
            financial adviser is just the beginning. We encourage our advisors
            to earn the trust of our clients and build long term relationships
            with them. We believe Financial Planning is not just about growing
            your investments.
          </p>

          <div className="about__details"></div>
        </div>
        <img src={img2} alt="about" className="about__img" />
      </div>
    </section>
  );
};

export default About;
