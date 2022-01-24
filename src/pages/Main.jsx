import React from "react";
import NavBar from "../Components/NavBar";
import About from "./About";
import Hero from "./Hero";
import Home from "./Home";
import Quote from "./Quote";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Hero />
        <Quote />
        <Home />
        <About />
        <Testimonials />
      </main>
    </>
  );
};

export default Main;
