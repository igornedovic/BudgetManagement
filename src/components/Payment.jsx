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
        <ul>
          <li>
            <p>Placanje 1</p>
          </li>
          <li>
            <p>Placanje 2</p>
          </li>
          <li>
            <p>Placanje 3</p>
          </li>
          <li>
            <p>Placanje 4</p>
          </li>
        </ul>
      </Typography>
    </div>
  );

  return (
    <div>
      <Button color="inherit" onClick={toggleDrawer("left", true, true)}>
        Deposits
      </Button>
      <Button color="inherit" onClick={toggleDrawer("right", true, false)}>
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
