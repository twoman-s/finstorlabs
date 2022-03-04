import React, { useEffect } from "react";
import "./Navbar.css";
import plogo from "./../../Assets/Images/plogo.png";
import { useNavigate } from "react-router-dom";

const NavBar = ({ data }) => {
  const navigate = useNavigate();
  useEffect(() => {
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");
    const logoImg = document.getElementById("logo");

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }

    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
      const navMenu = document.getElementById("nav-menu");
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove("show-menu");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));

    /*=============== CHANGE BACKGROUND HEADER ===============*/
    function scrollHeader() {
      const header = document.getElementById("header");
      const menu = document.getElementById("menu");
      header.style.backgroundColor = "";
      // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
      if (this.scrollY >= 80) {
        header.classList.add("scroll-header");
        header.style.backgroundColor = "#fff";
      } else {
        header.classList.remove("scroll-header");
        header.style.backgroundColor = "";
      }
    }
    window.addEventListener("scroll", scrollHeader);
    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections = document.querySelectorAll("section[id]");
    function scrollActive() {
      const scrollY = window.pageYOffset + 90;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    }
    window.addEventListener("scroll", scrollActive);
  }, []);

  const handleScrollClick = (e) => {
    e.preventDefault();
    if (data === "coursedetails") {
      navigate("/");
    } else {
      var id = e.target.getAttribute("href").slice(1);
      const section = document.getElementById(id);
      window.scrollTo({
        top: section.offsetTop - 90,
        behavior: "smooth",
      });
    }
  };
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={plogo} alt="Finstorblabs" id="logo" />
        </a>

        <div className="nav__menu" id="nav-menu">
          {data ? (
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#hero"
                  className="nav__link active-link"
                  onClick={handleScrollClick}
                >
                  Home
                </a>
              </li>
            </ul>
          ) : (
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#hero"
                  className="nav__link active-link"
                  onClick={handleScrollClick}
                >
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#services"
                  className="nav__link"
                  onClick={handleScrollClick}
                >
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#aboutus"
                  className="nav__link"
                  onClick={handleScrollClick}
                >
                  About Us
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contactus"
                  className="nav__link"
                  onClick={handleScrollClick}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          )}

          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__btns">
          {/* <i className="ri-moon-line change-theme" id="theme-button"></i> */}

          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line" id="menu"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
