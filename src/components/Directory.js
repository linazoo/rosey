import React, { useContext } from "react";
import { Container, Box, Stack, Typography, Button, Chip } from "@mui/material";
import { purple, grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GlobalContext from "../contexts/global";

const ColorButton = styled(Button)(({ theme }) => ({
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

const StyledBox = styled(Box)({
  backgroundColor: "#dfdfdf",
  height: "100vh",
  borderRadius: "42px",
  padding: "50px",
});

const Directory = () => {
  const { state, setState } = useContext(GlobalContext);
  const { categories, loading } = state;
  return (
    <React.Fragment>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Container maxWidth="md">
          <StyledBox>
            <Typography
              sx={{
                mb: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              variant="h4"
            >
              {categories?.kitchen?.title}
              <ColorButton variant="contained">Add +</ColorButton>
            </Typography>

            <Stack spacing={3}>
              <ColorButton
                sx={{ justifyContent: "space-between" }}
                variant="contained"
              >
                Cleaning the Fridge
                <Chip label="weekly" variant="contained" />
                <MoreVertIcon />
              </ColorButton>
              <ColorButton
                sx={{ justifyContent: "space-between" }}
                variant="contained"
              >
                Cleaning the Fridge
                <Chip label="weekly" variant="contained" />
                <MoreVertIcon />
              </ColorButton>
            </Stack>
          </StyledBox>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Directory;
