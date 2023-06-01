import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Graph from "../../components/Graph/Graph";
import axios from "axios";
import styles from "./DataComponents.module.css";



function DataComponent(props) {

    console.log(props)

  function createData2(time, value) {
    return { time, value };
  }

  const [data, setData] = useState([]);

  const getData = async () => {
    axios
      .get("http://161.53.19.19:56200/m2m/data?resourceSpec="+props.data.url, {
        headers: {
          Accept: "application/vnd.ericsson.m2m.output+json;version=1.1",
        },
        auth: {
          username: "IoTGrupa23",
          password: "IoTProject123",
        },
      })
      .then(function (response) {
        console.log(response);
        var newData = [];
        response.data.contentNodes.forEach((element) => {
          newData.push(createData2(element.time, element.value));
        });
        newData.sort((a, b) => (a.time > b.time ? 1 : -1));

        setData(newData);
      });
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <div style={{ width: "600px" }}>
      {data && data.length>1 ?
      <>
      <h1 className={styles.title} >{props.data.name}</h1>
      <Graph data={data} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Value</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.time + row.value}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.value}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
      :
      ''}
    </div>
  );
}

export default DataComponent;


