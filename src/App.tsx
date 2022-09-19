import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { GlobalProvider } from "./contexts/global";

import Navbar from "./components/Navbar";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ItemDetail from "./pages/itemDetail";

export interface Category {
  title: string;
  frequency: string;
}

export const homeCategories = [
  {
    title: "Kitchen",
    frequency: "weekly",
    description: "info about all that is kitchen stuff",
    id: 1,
    tasks: [
      {
        title: "How to do the dishes",
        description: "Info about how to do the dishes",
        id: 1,
      },
    ],
  },
  {
    title: "Garden",
    frequency: "daily",
    description: "info about all that is kitchen stuff",
    id: 2,
    tasks: [
      {
        title: "How to set up the garden",
        description: "Info about how to do set up the garden",
        id: 2,
      },
    ],
  },
];

const App = () => {
  const [state, setState] = React.useState({
    categories: homeCategories,
  });

  return (
    <GlobalProvider value={{ state, setState }}>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<DetailPage />} />
          <Route path="/item/:id/detail/:taskId" element={<ItemDetail />} />
          <Route path="/item/:id/edit" element={<EditPage />} />
          <Route path="/new" element={<AddPage />} />
        </Routes>
      </Box>
    </GlobalProvider>
  );
};

export default App;
