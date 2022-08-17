import React from "react";
import styles from "./Card.module.css";

function Card({ data }) {
  return <div className={styles.wrapper}>{data.name}</div>;
}

export default Card;
