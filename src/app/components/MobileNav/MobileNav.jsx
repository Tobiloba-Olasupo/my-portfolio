/** @format */

import React from "react";
import styles from "./mobilenav.module.css";
import Link from "next/link";

const MobileNav = ({ open }) => {
    
  return (
    <>
      {open ? (
        <div className={styles.container}>
          <div className={styles.nav}>
            <Link href='#home' className={styles.link}>
              Home
            </Link>
            <Link href='#services' className={styles.link}>
              Services
            </Link>
            <Link href='#portfolio' className={styles.link}>
              Portfolio
            </Link>
            <Link href='#contact' className={styles.link}>
              Contact
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MobileNav;
