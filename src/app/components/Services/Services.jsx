/** @format */

import React from "react";
import styles from "./services.module.css";
import "remixicon/fonts/remixicon.css";

const Services = () => {
  return (
    <div id='services' className={styles.container}>
      <div className={styles.servicesContent}>
        <h3 className='sectionTitle'>My Skills</h3>
        <h1>
          Hire Me For Your Next <span className='color'>Project</span>
        </h1>
        <p>
          As a designer and a WordPress Expert, I assist companies in reaching
          their desired objectives.
        </p>
        <div>
          <button className='button'>Hire Me</button>
        </div>
      </div>

      <div className={styles.services}>
        <div>
          <div>
            <i className='ri-macbook-line'></i>
            <h2>Website Design</h2>
            <span>
              Create user interface design with unique & modern ideas.
            </span>
          </div>
          <div>
            <i className='ri-code-box-line'></i>
            <h2>Web Development</h2>
            <span>
              Create user interface design with unique & modern ideas.
            </span>
          </div>
        </div>

        <div>
          <div>
            <i className='ri-brush-line'></i>
            <h2>Graphics Design</h2>
            <span>
              Create user interface design with unique & modern ideas.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
