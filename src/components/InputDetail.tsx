import React from "react";
import { ColorButton } from "./Directory";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./inputDetailStyles.css";

const InputDetail = () => {
  return (
    <form className="input">
      <h3>Title</h3>
      <input type="input" placeholder="enter a task"></input>
      <h3>Description</h3>
      <input type="input" placeholder="enter a task"></input>
      <ColorButton variant="contained" sx={{ width: "100%", mt: "20px" }}>
        Confirm
      </ColorButton>
    </form>
  );
};

export default InputDetail;
