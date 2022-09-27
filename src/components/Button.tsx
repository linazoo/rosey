import { purple, grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[200]),
  paddingTop: "16px",
  paddingBottom: "16px",
  borderRadius: "16px",
  backgroundColor: "white",
  textTransform: "none",
  "&:hover": {
    backgroundColor: grey[100],
  },
}));

export default ColorButton;
