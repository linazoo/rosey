import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { GlobalProvider } from "./contexts/global";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Directory from "./components/Directory";
import EditDetail from "./components/EditDetail";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";

const data = {
  loading: false,
  user: {
    name: "john",
  },
  categories: {
    kitchen: {
      title: "the kitchen",
      description: "this is a description about the kitchen",
      notes: ["put the waters in the bottom", "keep baking soda in the back"],
    },
    gardening: {
      title: "gardening",
    },
  },
};
const App = () => {
  // TODO: make a context for our global state
  // we can make a context provider here and have the value be something like:
  const [state, setState] = React.useState({
    loading: true,
  });

  React.useEffect(() => {
    setTimeout(() => {
      setState(data);
    }, 1000);
  }, []);
  return (
    <GlobalProvider value={{ state, setState }}>
      <Box>
        <Navbar />
        <Routes>
          {/* home page, edit page, and detail page  
          /item/:id (detail page)
          /item/:id/edit (edit page)

          */}
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<DetailPage />} />
          <Route path="/item/:id/edit" element={<EditPage />} />
        </Routes>
      </Box>
    </GlobalProvider>
  );
};

export default App;
