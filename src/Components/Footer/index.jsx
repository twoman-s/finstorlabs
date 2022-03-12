import React from "react";
import logo from "./../../Assets/Images/wlogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        {/* <div className="wave" id="wave1"></div> */}
        {/* <div className="wave" id="wave2"></div> */}
      </div>
      <div className="footer-content">
        <div className="fabout">
          <div className="ImgBx">
            <img src={logo} alt="" />
          </div>
          <p>
            We provide expert financial advice to both individuals and
            businesses. With over 7 years of experience we’ll ensure that you’re
            always getting the best guidance from the most professional company
            in the industry.
          </p>
        </div>
        <div className="address">
          <h1>Address</h1>
          <h4>
            <i class="ri-map-pin-line"></i>Mangattuparamba, Near University
            Campus
          </h4>
          <h4>
            <i class="ri-phone-line"></i>+91 9495197609
          </h4>
          <h4>
            <i class="ri-phone-line"></i>+91 7012442080
          </h4>
        </div>
        <div className="social-media">
          <h1>Follow Us</h1>
          <a href="https://www.instagram.com/marketloops" target="_blank">
            <i class="ri-instagram-fill"></i>
          </a>
          <a href="http://t.me/vyshakhvijay" target="_blank">
            <i class="ri-telegram-fill"></i>
          </a>
          <a href="http://youtube.com/vyshakhvijay" target="_blank">
            <i class="ri-youtube-fill"></i>
          </a>
          <h3>Open Hours</h3>
          <p>Mon – Sat : 9 am – 5 pm,</p>
          <p>Sunday : Closed</p>
        </div>
      </div>
      <div className="rights">2022 © All rights reserved by finstorlabs</div>
    </footer>
  );
};

export default Footer;
