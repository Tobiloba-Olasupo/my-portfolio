/** @format */
"use client";

import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import MobileNav from "../MobileNav/MobileNav";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link className={styles.logoLink} href='/'>
        <i class="ri-bubble-chart-fill"></i> <h1>Tobi</h1>
        </Link>
      </div>

      <div className={styles.nav}>
        <Link href='#'>Home</Link>
        <Link href='#services'>Services</Link>
        <Link href='#portfolio'>Portfolio</Link>
        <Link href='#contact'>Contact</Link>
      </div>

      <div className={styles.hamburger}>
        <i
          open={open}
          onClick={() => setOpen(!open)}
          className={open ? "ri-close-line" : "ri-menu-line"}></i>
      </div>
      <MobileNav open={open} />
    </div>
  );
};

export default Header;
