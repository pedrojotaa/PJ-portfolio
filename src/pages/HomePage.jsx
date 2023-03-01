import React from "react";
import Navbar from "../components/Navbar";
import About from '../components/About'
import Feature from "../components/Feature";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <About/>
      {/* <Feature />
      <Projects/>
      <Footer/> */}
    </>
  );
}

export default HomePage;
