import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Directory from "./components/Directory";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
      </Routes>
    </Box>
  );
};

export default App;
