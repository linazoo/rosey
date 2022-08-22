import React from "react";
import { Link } from "react-router-dom";
import { Stack, Avatar } from "@mui/material";
import AppLogo from "./AppLogo";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "100px", xs: "50px" },
      mt: { sm: "30px", xs: "20px" },
      justifyContent: "none",
    }}
  >
    <Link to="/" gap="40px">
      <Avatar />
    </Link>
    <Link to="/" gap="40px" style={{ textDecoration: "none" }}>
      <AppLogo />
    </Link>
    <Link to="/" gap="40px">
      Menu
    </Link>
  </Stack>
);

export default Navbar;
