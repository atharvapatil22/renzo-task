import React from "react";
import styles from "./Navbar.module.css";
import { BsGithub } from "react-icons/bs";

function Navbar() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <h2>Renzo Task</h2>
        <p
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() =>
            window.open("https://github.com/atharvapatil22/renzo-task")
          }
        >
          <BsGithub />
          &nbsp;Source Code
        </p>
      </div>
    </header>
  );
}

export default Navbar;
