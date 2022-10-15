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
import NewTodoPage from "./pages/NewTodoPage";
import ItemDetail from "./pages/itemDetail";

export enum Frequency {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
  Yearly = "yearly",
};

export type Task = {
  id: number;
  title: string;
  description: string;
  frequency: Frequency;
};

export interface User {
  name: string;
  email: string;
  avatar: string;
};

export interface Category {
  id: number;
  title: string;
  frequency: string;
  description: string;
  tasks: Array<Task>;
};

export interface AppState {
  user: User;
  categories: {[key: string]: Category}
}

export const defaultState = {
  user: {
    name: "Lina Zoo",
    email: "lina@test.com",
    avatar: "path/to/src.jpeg",
  },
  categories: {
    kitchen: {
      id: 0,
      title: "Kitchen",
      frequency: "weekly",
      description: "info about all that is kitchen stuff",
      tasks: [
        {
          id: 0,
          title: "How to do the dishes",
          description: "Info about how to do the dishes",
          frequency: "weekly",
        },
      ],
    },
    garden: {
      id: 1,
      title: "Garden",
      frequency: "daily",
      description: "info about all that is kitchen stuff",
      tasks: [
        {
          id: 1,
          title: "How to set up the garden",
          description: "Info about how to do set up the garden",
          frequency: "weekly",
        },
      ],
    },
  },
};



const App = () => {
  const [state, setState] = React.useState(defaultState);

  return (
    <GlobalProvider value={{ state, setState }}>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<AddPage />} />
          <Route path="/item/:id" element={<DetailPage />} />
          <Route path="/item/:id/edit" element={<EditPage />} />
          <Route path="/item/:id/detail/:taskId" element={<ItemDetail />} />
          <Route path="/item/:id/new" element={<NewTodoPage />} />
          <Route path="/newtask" element={<AddPage />} />
        </Routes>
      </Box>
    </GlobalProvider>
  );
};

export default App;
