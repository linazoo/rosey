import React from "react";
import { ColorButton } from "./commonStyles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { StyledBox } from "./commonStyles";
import { Stack } from "@mui/system";
import { useTheme } from "@mui/material";

const InputDetail = () => {
  const [value, setValue] = React.useState(false);

  let theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: boolean) => {
    setValue(newValue);
  };

  return (
    <StyledBox>
      <Stack sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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

        <ColorButton
          theme={theme}
          variant="contained"
          sx={{ width: "100%", mt: "20px" }}
        >
          Confirm
        </ColorButton>
      </Stack>
    </StyledBox>
  );
};

export default InputDetail;
