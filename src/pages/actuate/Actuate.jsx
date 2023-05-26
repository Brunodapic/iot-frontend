import React, { useEffect, useState } from "react";
import mqtt from "precompiled-mqtt";
import { Button, Typography } from "@mui/material";

//const URL = " wss://161.53.19.19:56183/";
const URL = "wss://test.mosquitto.org:8081/";

const Actuate = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    console.log("CONNECTing");
    const cli = mqtt.connect(URL);
    cli.on("connect", () => {
      console.log("CONNECTED to broker");
      setClient(cli);
    });
  }, []);

  function handleActuationClick() {
    console.log("client ", client);
    client.publish("grupa23", {
      led: "enabled",
    });
  }

  return (
    <div className="mt-20 grid">
      <Typography variant="h4" gutterBottom>
        If you want to trigger actuation, click on the button bellow!
      </Typography>
      <div className="flex justify-center mt-4">
        <Button size="large" variant="contained" onClick={handleActuationClick}>
          Actuate
        </Button>
      </div>
    </div>
  );
};

export default Actuate;
