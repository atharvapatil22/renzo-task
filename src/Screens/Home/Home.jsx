import React from "react";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>People from the Star Wars universe</h2>
        <button>refresh List</button>
      </div>

      <div className={styles.list}>
        {peopleList.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;

const peopleList = [
  { id: 1, name: "abcd" },
  { id: 2, name: "idsa" },
  { id: 3, name: "vhi" },
  { id: 4, name: "bois" },
  { id: 5, name: "fodsai" },
  { id: 6, name: "ioas" },
];
