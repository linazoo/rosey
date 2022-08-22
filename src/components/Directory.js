import React from "react";
import { Container, Box, Stack, Typography, Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[200]),
  paddingTop: "16px",
  paddingBottom: "16px",
  borderRadius: "16px",
  backgroundColor: purple[200],
  "&:hover": {
    backgroundColor: purple[300],
  },
}));

const Directory = () => {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: "#dfdfdf",
            height: "100vh",
            borderRadius: "42px",
            padding: "50px",
          }}
        >
          <Typography variant="h5">Kitchen</Typography>
          <Stack spacing={2}>
            <ColorButton variant="contained">Custom CSS</ColorButton>
            <ColorButton variant="contained">Custom CSS</ColorButton>
            <ColorButton variant="contained">Custom CSS</ColorButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Directory;
