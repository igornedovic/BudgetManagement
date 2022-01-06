import { Button, Typography, Divider, Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexiGrow: 1,
    color: "black",
    backgroundColor: "aquamarine",
  },
  aboutText: {
    fontFamily: "Montserrat",
    padding: "20px",
    textAlign: "center",
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
    position: "sticky",
  },
  list: {
    width: 300,
  },
}));

function Payment({ toggleDrawer, state, isDeposit }) {
  const classes = useStyles();

  const sideList = () => (
    <div className={classes.list}>
      {isDeposit === true ? <h3>UPLATE</h3> : <h3>ISPLATE</h3>}

      <Typography className={classes.aboutText} component="div" gutterBottom>
        {isDeposit === true ? (
          <span>Broj uplata:</span>
        ) : (
          <span>Broj isplata:</span>
        )}
      </Typography>
      <Divider variant="middle" />
      <Typography className={classes.aboutText} component="div" gutterBottom>
        <h3>Linkovi</h3>
        <ul>
          <li>
            <a
              href="https://material-ui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material UI
            </a>
          </li>
          <li>
            <a
              href="https://openweathermap.org/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenWeatherMap API
            </a>
          </li>
          <li>
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              React dokumentacija
            </a>
          </li>
          <li>
            <a
              href="https://www.react-simple-maps.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ugradnja mapa na sajt
            </a>
          </li>
        </ul>
      </Typography>
    </div>
  );

  return (
    <div>
      <Button
        color="inherit"
        onClick={toggleDrawer("left", true, true)}
        data-testid="toggle"
      >
        Deposits
      </Button>
      <Button
        color="inherit"
        onClick={toggleDrawer("right", true, false)}
        data-testid="toggle"
      >
        Withdrawals
      </Button>
      {isDeposit === true ? (
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer("left", false, true)}
        >
          {sideList()}
        </Drawer>
      ) : (
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false, false)}
        >
          {sideList()}
        </Drawer>
      )}
    </div>
  );
}

export default Payment;
