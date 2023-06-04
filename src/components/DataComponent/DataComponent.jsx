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
import mqtt from "precompiled-mqtt";

const URL = "ws://161.53.19.19:56183";

function DataComponent(props) {
  console.log("props aaaa ", props);
  const [time, setTime] = useState(new Date());
  const [data, setData] = useState([]);
  const [client, setClient] = useState(null);
  let cli;

  useEffect(() => {
    console.log("Connecting to broker from graph page");
    cli = mqtt.connect(URL);
    cli.on("connect", () => {
      console.log("Connected to broker from graph page");
      setClient(cli);
    });
    console.log("zovem get data");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function createData2(time, value) {
    return { time, value };
  }

  const getData = async () => {
    axios
      .get(
        "http://161.53.19.19:56200/m2m/data?resourceSpec=" + props.data.url,
        {
          headers: {
            Accept: "application/vnd.ericsson.m2m.output+json;version=1.1",
          },
          auth: {
            username: "IoTGrupa23",
            password: "IoTProject123",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        var newData = [];
        response.data.contentNodes.forEach((element) => {
          newData.push(createData2(element.time, element.value));
        });
        newData.sort((a, b) => (a.time > b.time ? 1 : -1));
        //data.pop();
        findNew(data, newData);

        setData(newData);
      });
  };

  function findNew(array1, array2) {
    console.log("in function values ", array1, array2);
    const array1Values = new Set(array1?.map((obj) => JSON.stringify(obj)));

    const diffValues = array2?.filter(
      (obj) => !array1Values.has(JSON.stringify(obj))
    );
    for (const value of diffValues) {
      if (props.data.url === "G23Temp") {
        if (value.value > 30) {
          //console.log("client ", client, cli);
          if (client !== null) {
            client.publish("grupa23", "enabled");
          } else cli.publish("grupa23", "enabled");
        }
      } else if (props.data.url === "G23ph") {
        if (value.value > 11) {
          //console.log("client ", client, cli);
          if (client !== null) {
            client.publish("grupa23", "enabled");
          } else cli.publish("grupa23", "enabled");
        }
      } else {
        if (value.value > 50000) {
          //console.log("client ", client, cli);
          if (client !== null) {
            client.publish("grupa23", "enabled");
          } else cli.publish("grupa23", "enabled");
        }
      }
    }
    console.log(
      "novi ",
      array2?.filter((obj) => !array1Values.has(JSON.stringify(obj)))
    );
  }

  useEffect(() => {
    console.log("tazim data!!!!!!!!!!!!!!!!!");
    getData();
  }, [time, props]);

  if (client !== null)
    return (
      <div style={{ width: "600px" }}>
        {data && data.length > 1 ? (
          <>
            <h1 className={styles.title}>{props.data.name}</h1>
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
        ) : (
          ""
        )}
      </div>
    );

  return <div className="text-black">Loading data...</div>;
}

export default DataComponent;
