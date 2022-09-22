import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <>
      <AppBar sx={{backgroundColor:"lightblue"}}>
        <Toolbar>
          <ShoppingCart/>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
