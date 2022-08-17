import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.css";

function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const page = Math.floor(Math.random() * 3 + 1);

    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((res) => {
        setList(res.data.results);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Starships from a Galaxy Far Far Away</h2>
        <button onClick={fetchData}>refresh List</button>
      </div>

      <div className={styles.grid_container}>
        <div>
          {list.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
