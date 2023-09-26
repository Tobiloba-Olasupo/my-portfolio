/** @format */

import React from "react";
import styles from "./portfolio.module.css";
import Projects from "./Projects";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div id='portfolio' className={styles.container}>
      <div>
        <h3 className='sectionTitle'>Portfolio</h3>
        <h1>My Creative Works</h1>
        <p>
          Here&apos;s a glimpse of some of my recent and exciting projects. Each
          of them reflects my focus on user-centered design and my commitment to
          excellence in user experience.
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
                <Link href={project.URL}>
                  <button className={styles.button}>Live View</button>
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
