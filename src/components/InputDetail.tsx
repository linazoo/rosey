import React from "react";
import { ColorButton, StyledBox } from "./commonStyles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { useTheme } from "@mui/material";

interface Props {
  addTask: string;
  setAddTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  setTaskDescription: React.Dispatch<React.SetStateAction<string>>;
  setTaskFrequency: React.Dispatch<React.SetStateAction<string>>;
}
const frequencies = ["daily", "weekly", "monthly", "yearly"];

const InputDetail: React.FC<Props> = ({ addTask, setAddTask, handleAdd }) => {
  const [value, setValue] = React.useState(0);

  let theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, selectedIndex: number) => {
    setValue(selectedIndex);
    const frequency = frequencies[selectedIndex];
    console.log({ frequency });
  };

  return (
    <StyledBox>
      <Stack sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TextField
          id="standard-textarea"
          label="Title"
          multiline
          variant="outlined"
          value={addTask}
          onChange={(e) => setAddTask(e.target.value)}
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
          {frequencies.map((item) => (
            <Tab label={item} />
          ))}
          {/* <Tab label="daily" />
          <Tab label="weekly" />
          <Tab label="monthly" />
          <Tab label="yearly" /> */}
        </Tabs>

        <ColorButton
          onSubmit={handleAdd}
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
