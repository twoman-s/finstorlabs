import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import About from "./About";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import Partners from "./Partners";
import Services from "./Services";
import Quote from "./Quote";
import Testimonials from "./Testimonials";
import Products from "./Products";

const Main = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Hero />
        <Quote />
        <Products />
        <About />
        <Services />
        <Partners />
        <Testimonials />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};

export default Main;
