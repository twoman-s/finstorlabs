import React from "react";
import NavBar from "../Components/NavBar";
import About from "./About";
import Home from "./Home";

const Main = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
};

export default Main;
