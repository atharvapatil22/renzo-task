import React from "react";
import styles from "./Card.module.css";
import { GrUserWorker } from "react-icons/gr";
import { FaUsers, FaCoins } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import { VscTypeHierarchySub } from "react-icons/vsc";

function Card({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2>{data.name}</h2>

        <p className={styles.property}>
          <MdPrecisionManufacturing />
          &nbsp;Manufacturer: {data.manufacturer}
        </p>
        <p className={styles.property}>
          <VscTypeHierarchySub />
          &nbsp;Class: {data.starship_class}
        </p>
        <p className={styles.property}>
          <FaCoins />
          &nbsp;Cost: {data.cost_in_credits} credits
        </p>
        <p className={styles.property}>
          <GrUserWorker />
          &nbsp;Crew: {data.crew}
        </p>
        <p className={styles.property}>
          <FaUsers />
          &nbsp;Passengers: {data.passengers}
        </p>
      </div>
    </div>
  );
}

export default Card;
