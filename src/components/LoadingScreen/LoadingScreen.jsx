/** @format */

import React from "react";
import styles from "./loadingsreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.waviy}>
        <span style={{"--i":"1"}}>T</span>
        <span style={{"--i":"1"}}>O</span>
        <span style={{"--i":"1"}}>B</span>
        <span style={{"--i":"1"}}>I</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
