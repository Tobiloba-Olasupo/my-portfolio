/** @format */

import React from "react";
import styles from "./footer.module.css";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>
        <span>TOBI @ ALL RIGHTS RESERVED</span>
      </div>
      <div>
        <div className={styles.links}>
          <div>
            <Link
              className={styles.emailLink}
              href='mailto:olasupokhalid44@gmail.com'>
              olasupokhalid44@gmail.com
            </Link>
          </div>
          <div className={styles.socialIcons}>
            <Link className={styles.socialIcon} href='#'>
              <i class='ri-instagram-line'></i>
            </Link>
            <Link className={styles.socialIcon} href='#'>
              <i class='ri-linkedin-fill'></i>
            </Link>
            <Link className={styles.socialIcon} href='#'>
              <i class='ri-twitter-x-line'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
