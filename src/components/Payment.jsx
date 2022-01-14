import { Button, Typography, Divider, Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext, useState } from "react";
import { TransactionsContext } from "../App";

const useStyles = makeStyles((theme) => ({
  aboutText: {
    fontFamily: "Montserrat",
    padding: "20px",
    color: "#444",
    textAlign: "center",
    fontSize: "1.2rem",
  },
  list: {
    width: 300,
  },
}));

function Payment({ toggleDrawer, state, isDeposit }) {
  const classes = useStyles();

  const transactionList = useContext(TransactionsContext);

  const depositList = transactionList.filter((t) => t.type === "Deposit");
  const withdrawalList = transactionList.filter((t) => t.type !== "Deposit");

  const sideList = () => (
    <div className={classes.list}>
      <Typography className={classes.aboutText} component="div" gutterBottom>
        {isDeposit === true ? <h3>DEPOSITS</h3> : <h3>WITHDRAWALS</h3>}
      </Typography>
      <Divider variant="middle" />
      <Typography className={classes.aboutText} component="div" gutterBottom>
        {isDeposit === true
          ? depositList?.map((row, i) => {
              return (
                <div key={i} style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ color: "#444" }}>{row?.date}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ color: "#1bc431"}}>
                      +{row?.amount}
                    </span>
                  </div>
                </div>
              );
            })
          : withdrawalList?.map((row, i) => {
              return (
                <div key={i} style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ color: "#444" }}>{row?.date}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ color: "#ee0e2c"}}>
                      -{row?.amount}
                    </span>
                  </div>
                </div>
              );
            })}
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
