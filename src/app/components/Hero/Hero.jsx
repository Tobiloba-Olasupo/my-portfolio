/** @format */

import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import myPic from "../../../../public/myPic.jpg";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

const Hero = () => {
  return (
    <div id='home' className={styles.container}>
      <div className={styles.heroContent}>
        <h3 className='sectionTitle'>Welcome</h3>
        <h1 className={styles.mainHeading}>
          Tobiloba Olasupo,
          <br/>
          <span className='color'>Creative</span> Web
          Designer
        </h1>
        <p>
          I&apos;ve been making websites with WordPress for more than 3 years now, and I
          believe I can assist you. If you have any projects, let&apos;s work
          together.
        </p>
        <div className={styles.buttons}>
          <button className='button'>My Portfolio</button>
          <Link href='/' className={styles.contactLink}>
            Contact <i className='ri-arrow-right-up-line'></i>
          </Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={myPic} alt='Tobiloba' fill className={styles.image} />
      </div>
    </div>
  );
};

export default Hero;
