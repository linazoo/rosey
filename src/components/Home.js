import { Typography } from "@mui/material";
import React from "react";
import Directory from "./Directory";

const Home = () => {
  return (
    <React.Fragment>
      <Typography variant="h5" display="flex" justifyContent="center">
        Hello John!
      </Typography>
      <Directory />
    </React.Fragment>
  );
};

export default Home;
