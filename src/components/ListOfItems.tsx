import React, { useContext } from "react";
// import InputDetail from "./InputDetail";

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

export const StyledBox = styled(Box)({
  backgroundColor: "#dfdfdf",
  height: "100vh",
  borderRadius: "42px",
  padding: "50px",
});

export const categoriesList = [
  {
    title: "Kitchen",
    frequency: "weekly",
    description: "info about all that is kitchen stuff",
  },
  {
    title: "Garden",
    frequency: "daily",
    description: "info about all that is kitchen stuff",
  },
];

const ListOfItems = () => {
  const { state } = useContext(GlobalContext);
  const { categories, loading } = state;
  const [showInputDetail, setShowInputDetail] = React.useState(false);
  const [editInput, setEditInput] = React.useState(false);

  return (
    <Container maxWidth="md">
      <StyledBox>
        <>
          <Stack spacing={3}>
            {categoriesList.map((item) => {
              return (
                <ColorButton
                  sx={{ justifyContent: "space-between" }}
                  variant="contained"
                >
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Chip label={item.frequency} sx={{ mr: 2 }} />
                    <IconButton>
                      <EditIcon onClick={() => setEditInput(true)} />
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
      </StyledBox>
    </Container>
  );
};

export default ListOfItems;
