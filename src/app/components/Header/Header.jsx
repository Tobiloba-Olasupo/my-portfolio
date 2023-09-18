import React from 'react'
import styles from "./header.module.css"
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <h1>Tobiloba</h1>
        </div>

        <div className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/">Services</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">Contact</Link>
        </div>
    </div>
  )
}

export default Header