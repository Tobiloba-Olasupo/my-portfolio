/** @format */

import React from "react";
import styles from "./contact.module.css";
import "remixicon/fonts/remixicon.css";

const Contact = () => {
  return (
    <div id='contact' className={styles.container}>
      <div className={styles.sectionHeading}>
        <h3 className='sectionTitle'>Contact</h3>
        <h1>
          Let&apos;s Discuss Your Project
        </h1>
        <p>
          You can contact me via WhatsApp, make a phone call, or send a direct
          message on LinkedIn.
        </p>
      </div>

      <div className={styles.contact}>
        <div>
          <button className={styles.contactButton}>Call</button>
        </div>
        <div>
          <button className={styles.contactButton}>WhatsApp</button>
        </div>
        <div>
          <button className={styles.contactButton}>LinkedIn</button>
        </div>
        <div>
          <button className={styles.contactButton}>Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
