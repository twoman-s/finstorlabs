import React from "react";
import "./Styles/About.css";
import logo from "./../Assets/Images/logoo.png";

const About = () => {
  return (
    // <!--==================== ABOUT ====================-->
    <section class="about section container" id="about">
      <div class="about__container grid">
        <img src={logo} alt="" class="about__img" />

        <div class="about__data">
          <h2 class="section__title about__title">Its about "Planning"</h2>

          <p class="about__description">
            A good Financial Planner goes beyond managing a client’s finances;
            he strives to understand a client's desires and focuses his energies
            & expertise to bring them to life. At Finstorlabs, being an expert
            financial adviser is just the beginning. We encourage our advisors
            to earn the trust of our clients and build long term relationships
            with them. We believe Financial Planning is not just about growing
            your investments.
          </p>

          <div class="about__details"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
