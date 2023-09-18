/** @format */

import React from "react";
import styles from "./page.module.css"
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Homepage = () => {
  return (
    <div className={styles.mainContainer}>
      <Header/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Homepage;
