/** @format */

import React from "react";
import styles from "./portfolio.module.css";
import Projects from "./Projects";
import Image from "next/image";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

const Portfolio = () => {
  return (
    <div id='portfolio' className={styles.container}>
      <div>
        <h3 className='sectionTitle'>PORTFOLIO</h3>
        <h1 className={styles.heading}>MY RECENT WORKS</h1>
        <p className={styles.description}>
          Here&apos;s a glimpse of some of my recent and exciting projects.
        </p>
      </div>

      <div className={styles.projects}>
        {Projects.map((project, index) => {
          return (
            <div key={index} className={styles.project}>
              <div className={styles.projectImageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                />
              </div>

              <div className={styles.projectDetails}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
                <Link
                  href={project.URL}
                  target='_blank'
                  className={styles.viewLink}>
                  <i class="ri-link"></i>
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
