/** @format */

import React from "react";
import styles from "./portfolio.module.css";
import Projects from "./Projects";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div id="portfolio" className={styles.container}>
      <div>
        <h3 className='sectionTitle'>Portfolio</h3>
        <h1>
          My Creative Works
          <br />
          <span className='color'>Latest Projects</span>
        </h1>
        <p>
          I have selected and mentioned here some of my latest projects to share
          with you.
        </p>
      </div>

      <div className={styles.projects}>
        {Projects.map((project, index) => {
          return (
            <div key={index} className={styles.project}>
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.projectDetails}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Link href={project.URL} className={styles.link}>
                  Visit Website
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
