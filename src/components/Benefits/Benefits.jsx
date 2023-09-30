/** @format */

import React from "react";
import styles from "./benefits.module.css";
import Link from "next/link";

const Benefits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainHeadingContainer}>
        <h1 className={styles.mainHeading}>
          HIGH TECHNOLOGY TO GROW YOUR BUSINESS
        </h1>
      </div>

      <div className={styles.benefitsContainer}>
        <div className={styles.benefit}>
          <p className={styles.benefitTitle}>RESPONSIVE LAYOUTS</p>
          <p className={styles.benefitDescription}>
            Your website will work perfectly on any platform, mobile or desktop.
          </p>
        </div>

        <div className={styles.benefit}>
          <p className={styles.benefitTitle}>SEO OPTIMIZATION</p>
          <p className={styles.benefitDescription}>
            Your target audience will find your site and services on Google.
          </p>
        </div>

        <div className={styles.benefit}>
          <p className={styles.benefitTitle}>HIGH PERFORMANCE</p>
          <p className={styles.benefitDescription}>
            Designed and optimized to load your site faster, providing excellent
            user experience.
          </p>
        </div>
      </div>

      <div className={styles.contact}>
        <Link href="https://wa.link/sj8wry">
        <button className={styles.whatsappButton}><i class="ri-whatsapp-line"></i> <span>LET&apos;S CHAT ON WHATSAPP</span></button>
        </Link>
      </div>
    </div>
  );
};

export default Benefits;
