import React, { useContext } from "react";
// import InputDetail from "./InputDetail";
import { StyledBox } from "./commonStyles";

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

interface Item {
  title: string;
  frequency?: string;
  description: string;
}

// interface Task {
//   title: string;
//   description: string;
// }

interface ListOfItemsProps {
  items: Array<Item>;
}

const ListOfItems = ({ items }: ListOfItemsProps) => {
  // const [showInputDetail, setShowInputDetail] = React.useState(false);
  // const [editInput, setEditInput] = React.useState(false);

  return (
    <Container maxWidth="md">
      <StyledBox>
        <>
          <Stack spacing={3}>
            {items.map((item) => {
              return (
                <ColorButton
                  sx={{ justifyContent: "space-between" }}
                  variant="contained"
                >
                  <div className="list_item">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {item.frequency ? (
                      <Chip label={item.frequency} sx={{ mr: 2 }} />
                    ) : null}

                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Box>
                </ColorButton>
              );
            })}
          </Stack>
          <ColorButton variant="contained" sx={{ width: "100%", mt: "20px" }}>
            Add +
          </ColorButton>
        </>
      </StyledBox>
    </Container>
  );
};

export default ListOfItems;
