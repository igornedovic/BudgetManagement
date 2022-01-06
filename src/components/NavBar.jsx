import React from "react";
import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { MdSavings } from "react-icons/md";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
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
          <Button color="inherit">Uplate</Button>
          <Button color="inherit">Isplate</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
