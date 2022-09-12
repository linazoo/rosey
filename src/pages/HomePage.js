import React, { useContext } from "react";
import GlobalContext from "../contexts/global";
import IntroSection from "../components/IntroSection";
import ListOfItems from "../components/ListOfItems";
import Search from "../components/Search";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { state } = useContext(GlobalContext);
  const { categories } = state;
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/item/${id}`);
  };
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
        <Search items={categories} sx={{ maxWidth: "800px" }} />
      </Box>
      <ListOfItems items={categories} onClick={handleClick} />
    </div>
  );
};

export default HomePage;
