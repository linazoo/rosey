import { styled, Box } from "@mui/system";
import { purple, grey } from "@mui/material/colors";
import { Button } from "@mui/material";

export const StyledBox = styled(Box)({
  backgroundColor: "#F6EFFF",
  height: "100vh",
  borderRadius: "32px",
  padding: "50px",
});

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
