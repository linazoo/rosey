import React, { useContext } from "react";
import GlobalContext from "../contexts/global";
import IntroSection from "../components/IntroSection";
import ListOfItems from "../components/ListOfItems";
import Search from "../components/Search";
import { Box } from "@mui/system";

const HomePage = () => {
  const { state } = useContext(GlobalContext);
  const { categories } = state;

  return (
    <div>
      <IntroSection />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Search items={categories} />
      </Box>
      <ListOfItems items={categories} />
    </div>
  );
};

export default HomePage;
