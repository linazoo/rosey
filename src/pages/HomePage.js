import React, { useContext } from "react";
import GlobalContext from "../contexts/global";

import IntroSection from "../components/IntroSection";
import ListOfItems from "../components/ListOfItems";
import Search from "../components/Search";
import Button from "../components/Button";

import { Box, Container } from "@mui/system";
import { useNavigate, Link } from "react-router-dom";
import { StyledBox } from "../components/commonStyles";

const HomePage = () => {
  const { state } = useContext(GlobalContext);
  const { categories} = state;

  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/item/${id}`);
  };

  // Now that categories is an object, we get an array of all the category ids
  const categoryIds = Object.keys(categories);
  // then create an array of the category objects to pass into the components that were expecting arrays
  const arrayOfCategories = categoryIds.map(id => categories[id])

  return (
    <div>
      <IntroSection />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: "40px",
          pl: 2,
          pr: 2,
        }}
      >
        <Search items={arrayOfCategories} sx={{ maxWidth: "800px" }} />
      </Box>
      <Container maxWidth="md">
        <StyledBox>
          <ListOfItems items={arrayOfCategories} onClick={handleClick} />
          <Button
            //@ts-ignore
            component={Link}
            to="new"
            variant="contained"
            sx={{ width: "100%", mt: "20px" }}
          >
            Add Category
          </Button>
        </StyledBox>
      </Container>
    </div>
  );
};

export default HomePage;
