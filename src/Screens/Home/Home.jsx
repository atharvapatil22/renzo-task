import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.css";
import PageLoader from "../../Components/PageLoader/PageLoader";

function Home() {
  const [list, setList] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    fetchData();
    window.addEventListener("focus", () => fetchData());

    return () => {
      window.removeEventListener("focus", () => fetchData());
    };
  }, []);

  const fetchData = () => {
    const page = Math.floor(Math.random() * 3 + 1);

    setShowLoader(true);
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((res) => {
        setList(res.data.results);
      })
      .catch((err) => {
        console.log("Error: ", err);
      })
      .finally(() => setShowLoader(false));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Starships from a Galaxy Far Far Away</h2>
        <button onClick={fetchData}>Refresh List</button>
      </div>

      {!!showLoader ? (
        <PageLoader />
      ) : (
        <div className={styles.grid_container}>
          <div>
            {list.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
