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

        <p>
          <MdPrecisionManufacturing /> Manufacturer: {data.manufacturer}
        </p>
        <p>
          <VscTypeHierarchySub /> Class: {data.starship_class.toUpperCase()}
        </p>
        <p>
          <FaCoins /> Cost: {data.cost_in_credits} credits
        </p>
        <p>
          <GrUserWorker /> Crew: {data.crew}
        </p>
        <p>
          <FaUsers /> Passengers: {data.passengers}
        </p>
      </div>
    </div>
  );
}

export default Card;
