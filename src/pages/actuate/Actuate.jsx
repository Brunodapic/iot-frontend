import React, { useEffect, useState } from "react";
import mqtt from "precompiled-mqtt";
import { Button, Typography } from "@mui/material";

const URL = "mqtt://n8a5e78d.eu-central-1.emqx.cloud:15207";

const Actuate = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const cli = mqtt.connect(URL);
    setClient(client);
    cli.on("connect", () => {
      console.log("CONNECTED to broker");
    });
  }, [client]);

  function handleActuationClick() {
    client.publish("test/1", "actuate");
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
