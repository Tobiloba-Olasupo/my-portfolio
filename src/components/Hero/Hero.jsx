/** @format */

import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import myPic from "../../../public/myPic.png";
import wordpress from "../../../public/wordpress.png"
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

const Hero = () => {
  return (
    <div id='home' className={styles.container}>
      <div className={styles.heroContent}>
        <h3 className='sectionTitle'>DESIGNER & WORDPRESS EXPERT</h3>
        <h1 className={styles.mainHeading}>
          HI, I AM A DESIGNER EXPERT IN WORDPRESS DEVELOPMENT
        </h1>
        <p className={styles.description}>
          My mission is to design and develop a website that you and your
          audience will love.
        </p>
        <div className={styles.contact}>
          <button className={styles.whatsappButton}><i class="ri-whatsapp-line"></i> <span>LET&apos;S CHAT ON WHATSAPP</span></button>
          <Link href='/' className={styles.emailLink}>
            OR SEND ME AN EMAIL <i className='ri-arrow-right-up-line'></i>
          </Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={myPic} alt='Tobiloba' fill className={styles.image} />
        <div className={styles.wordpress}>
          <Image src={wordpress} alt="wordpress" fill/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
