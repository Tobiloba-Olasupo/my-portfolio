/** @format */

import React from "react";
import styles from "./contact.module.css";
import "remixicon/fonts/remixicon.css";

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.sectionHeading}>
        <h3 className='sectionTitle'>Contact</h3>
        <h1>
          Let&apos;s Discuss Your <span className='color'>Project</span>
        </h1>
        <p>
          Let&apos;s make something new, different and more meaningful or make
          thing more visual or conceptual.
        </p>
      </div>

      <div className={styles.contact}>
        <div className={styles.contactDetails}>
          <div>
            <div>
              <i className='ri-whatsapp-line'></i>
            </div>
            <div>
              <span>Call/WhatsApp me</span>
              <span>+234 8146974887</span>
            </div>
          </div>
          <div>
            <div>
              <i className='ri-mail-line'></i>
            </div>
            <div>
              <span>Email me</span>
              <span>olasupo44@gmail.com</span>
            </div>
          </div>
        </div>
        <form className={styles.contactForm}>
          <div className={styles.contactInputs}>
            <input
              type='text'
              placeholder='Full name'
              className={styles.input}
            />
            <input
              type='email'
              placeholder='Your email'
              className={styles.input}
            />
          </div>
          <textarea placeholder='Message' className={styles.textarea} />
          <div>
            <button type='submit' className='button'>
              Submit Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
