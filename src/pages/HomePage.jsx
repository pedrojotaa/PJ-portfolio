import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default HomePage;
