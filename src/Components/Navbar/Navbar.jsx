import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <h2>Renzo Task</h2>
        <h2>Link</h2>
      </div>
    </header>
  );
}

export default Navbar;
