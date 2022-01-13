import React from "react";
import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { MdSavings } from "react-icons/md";
import { Link } from "react-router-dom";
import Payment from "./Payment";

function NavBar({ toggleDrawer, state, isDeposit }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "rgb(56, 89, 235)" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <MdSavings />
          </IconButton>
          <Typography variant="p" component="div" sx={{ mr: 2 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Transactions
            </Link>
          </Typography>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/newTransaction"
              style={{ textDecoration: "none", color: "white" }}
            >
              New Transaction
            </Link>
          </Typography>
          <Payment
            toggleDrawer={toggleDrawer}
            state={state}
            isDeposit={isDeposit}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
