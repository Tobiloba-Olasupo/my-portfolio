import Link from 'next/link'
import React from 'react'
import "remixicon/fonts/remixicon.css";
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <span>@ 2023 Tobiloba. All Rights Reserved</span>
        <div className={styles.socials}>
            <Link href="/"><i class="ri-facebook-circle-fill"></i></Link>
            <Link href="/"><i class="ri-linkedin-box-fill"></i></Link>
            <Link href="/"><i class="ri-twitter-fill"></i></Link>
        </div>
    </div>
  )
}

export default Footer