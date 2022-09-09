import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AppLogo from "./AppLogo";
import AddIcon from "@mui/icons-material/Add";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={{
      m: { lg: "40px", sm: "30px", xs: "20px" },
    }}
  >
    <Link to="/settings">
      <SettingsIcon fontSize="large" />
    </Link>
    <Link to="/" style={{ textDecoration: "none" }}>
      <AppLogo />
    </Link>
    <Link to="/new">
      <AddIcon fontSize="large" />
    </Link>
  </Stack>
);

export default Navbar;
