import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Graph from "../../components/Graph/Graph";
import axios from "axios";

function GraphPage() {
  const rawData = {
    contentNodes: [
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "G23D5",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 23.45,
        type: "double",
        time: "2023-05-17T17:51:51.748Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "G23D5",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 23.45,
        type: "double",
        time: "2023-05-17T17:44:32.256Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "G23D5",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 23.45,
        type: "double",
        time: "2023-05-17T17:23:06.314Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceHum",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 23.33,
        type: "double",
        time: "2023-05-17T18:35:40.794Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceHum",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 11,
        type: "integer",
        time: "2023-05-17T18:09:24.850Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceHum",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 11,
        type: "integer",
        time: "2023-05-17T18:04:43.353Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceHum",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 11,
        type: "integer",
        time: "2023-05-17T18:01:49.855Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceHum",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 23.45,
        type: "double",
        time: "2023-05-17T17:56:37.336Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceHum",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 23.45,
        type: "double",
        time: "2023-05-17T17:53:49.929Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceHum",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 2,
        type: "integer",
        time: "2017-02-27T19:14:18Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceHum",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 14,
        type: "integer",
        time: "2017-02-27T19:14:18Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceHum",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 69,
        type: "integer",
        time: "1970-01-20T12:01:12.342Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceHum",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 1,
        type: "integer",
        time: "1970-01-20T12:01:12.342Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceVirtual",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 11,
        type: "integer",
        time: "2023-05-24T16:57:05.581Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceVirtual",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 55,
        type: "integer",
        time: "2023-05-20T18:16:41.497Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceVirtual",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 11,
        type: "integer",
        time: "2023-05-20T18:14:18.896Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceVirtual",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 11,
        type: "integer",
        time: "2023-05-17T18:37:15.318Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceVirtual",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 11,
        type: "integer",
        time: "2023-05-17T18:04:29.680Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceVirtual",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 11,
        type: "integer",
        time: "2023-05-17T18:01:28.180Z",
      },
      {
        source: {
          operator: "IoTGrupa23",
          domainApplication: "IoTGrupa23App",
          enterpriseCustomer: "IoTGrupa23Organization",
          gatewayGroup: "Grupa23DeviceVirtual",
          gatewayGroupSpec: "G23ESP32",
          gatewaySpec: "G23HTTP",
          sensorSpec: "G23DHT",
          resourceSpec: "G23Temp",
        },
        value: 23.45,
        type: "double",
        time: "2023-05-17T17:57:40.694Z",
      },
    ],
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  function createData2(time, value) {
    return { time, value };
  }


  var newData = [];
  rawData.contentNodes.forEach((element) => {
    newData.push(createData2(element.time, element.value));
  });

  console.log(newData);
  newData.sort((a, b) => (a.time > b.time) ? 1 : -1)


  const getData = async () => {
    axios
      .get('https://161.53.19.19:56443/m2m/data?resourceSpec=G23Temp', {
        headers: {
          Accept: "application/vnd.ericsson.m2m.output+json;version=1.1",
        },
        auth: {
            username: 'IoTGrupa23',
            password: 'IoTProject123'
          }
      })
      .then(function (response) {
        console.log(response);
      });
  };

  useEffect(() => {
    //getData();
  }, []);

  return (
    <div style={{ width: "600px" }}>
      <Graph data={newData}/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Value</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newData.map((row) => (
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
    </div>
  );
}

export default GraphPage;
