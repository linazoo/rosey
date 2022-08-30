import React, { useContext } from "react";
import {
  Container,
  Box,
  Stack,
  Typography,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import { purple, grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import GlobalContext from "../contexts/global";
import InputDetail from "./InputDetail";

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

const kitchenChores = [
  {
    title: "Cleaning the fridge",
    frequency: "weekly",
  },
  {
    title: "throwing out old food",
    frequency: "daily",
  },
];

const Directory = () => {
  const { state } = useContext(GlobalContext);
  const { categories, loading } = state;
  const [showInputDetail, setShowInputDetail] = React.useState(false);
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
            </Typography>
            {showInputDetail ? (
              <InputDetail />
            ) : (
              <>
                <Stack spacing={3}>
                  {kitchenChores.map((chore) => {
                    return (
                      <ColorButton
                        sx={{ justifyContent: "space-between" }}
                        variant="contained"
                      >
                        <p>{chore.title}</p>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Chip
                            label={chore.frequency}
                            variant="contained"
                            sx={{ mr: 2 }}
                          />
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                        </Box>
                      </ColorButton>
                    );
                  })}
                </Stack>
                <ColorButton
                  onClick={() => setShowInputDetail(true)}
                  variant="contained"
                  sx={{ width: "100%", mt: "20px" }}
                >
                  Add +
                </ColorButton>
              </>
            )}
          </StyledBox>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Directory;
