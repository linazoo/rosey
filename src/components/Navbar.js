import React from "react";
import { Link } from "react-router-dom";
import { Stack, Avatar } from "@mui/material";
import AppLogo from "./AppLogo";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    sx={{
      m: { lg: "40px", sm: "30px", xs: "20px" },
    }}
  >
    <Link to="/">
      <Avatar />
    </Link>
    <Link to="/" style={{ textDecoration: "none" }}>
      <AppLogo />
    </Link>
    <Link to="/directory">
      <MenuIcon fontSize="large" />
    </Link>
  </Stack>
);

export default Navbar;
