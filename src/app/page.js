/** @format */

import React from "react";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Benefits from "@/components/Benefits/Benefits";
import Footer from "@/components/Footer/Footer";

const Homepage = () => {
  return (
    <div className={styles.mainContainer}>
      <Hero />
      <Portfolio />
      <Benefits/>
      <Footer/>
    </div>
  );
};

export default Homepage;
