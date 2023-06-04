import React, { useState } from "react";
import DataComponent from "../../components/DataComponent/DataComponent";
import styles from "./GraphPage.module.css";

function GraphPage() {
  const [page, setPage] = useState(0);

  const pages = [
    { name: "Temperature", url: "G23Temp" },
    { name: "Ph", url: "G23ph" },
    { name: "Humidity", url: "G23Hum" },
    { name: "Solids", url: "G23Solids" },
  ];
  console.log("rerendero sam ", page, pages[page]);
  return (
    <div>
      <div className={styles.buttonsDiv}>
        <button onClick={() => setPage(0)}>Temperature</button>
        <button onClick={() => setPage(1)}>Ph</button>
        <button onClick={() => setPage(2)}>Humidity</button>
        <button onClick={() => setPage(3)}>Solids</button>
      </div>
      <DataComponent data={pages[page]} />
    </div>
  );
}

export default GraphPage;
