/** @format */
"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen/>
      ) : (
        <div className={styles.mainContainer}>
          <Header />
          <Hero />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Homepage;
