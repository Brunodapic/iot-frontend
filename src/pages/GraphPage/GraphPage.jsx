import React, { useState } from "react";
import DataComponent from "../../components/DataComponent/DataComponent";
import styles from "./GraphPage.module.css";

function GraphPage() {
  const [page, setPage] = useState(0);

  const pages = [
    { name: "Temperature", url: "G23Temp" },
    { name: "Ph", url: "G23ph" },
    { name: "Solids", url: "G23Solids" },
  ];

  return (
    <div>
      <div className={styles.buttonsDiv}>
        <button onClick={()=>setPage(0)}>Temperature</button>
        <button onClick={()=>setPage(1)} >Ph</button>
        <button onClick={()=>setPage(2)} >Solids</button>

      </div>
      <DataComponent data={pages[page]} />
    </div>
  );
}

export default GraphPage;
