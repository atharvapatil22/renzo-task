import React from "react";
import styles from "./PageLoader.module.css";

function PageLoader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.shadow}></div>
      <div className={styles.shadow}></div>
      <div className={styles.shadow}></div>
      <span>Loading</span>
    </div>
  );
}

export default PageLoader;
