import React from "react";
import { ColorButton } from "./Directory";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

const InputDetail = () => {
  const [value, setValue] = React.useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: boolean) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TextField
        id="standard-textarea"
        label="Title"
        multiline
        variant="outlined"
      />
      <TextField
        id="standard-multiline-static"
        label="Description"
        multiline
        rows={4}
        defaultValue=""
        variant="outlined"
      />

      <Tabs
        centered
        variant="fullWidth"
        onChange={handleChange}
        value={value}
        aria-label="Tabs where each tab needs to be selected manually"
      >
        <Tab label="daily" />
        <Tab label="weekly" />
        <Tab label="monthly" />
        <Tab label="yearly" />
      </Tabs>

      <ColorButton variant="contained" sx={{ width: "100%", mt: "20px" }}>
        Confirm
      </ColorButton>
    </Container>
  );
};

export default InputDetail;
