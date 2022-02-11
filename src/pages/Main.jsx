import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import About from "./About";
import Hero from "./Hero";
import Home from "./Home";
import Partners from "./Partners";
import Products from "./Products";
import Quote from "./Quote";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Hero />
        <Quote />
        <Products />
        <Home />
        <About />
        <Partners />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default Main;
