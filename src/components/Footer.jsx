import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((footer) => ({
  footer: {
    marginTop: 0,
    padding: "0.5rem",
    backgroundColor: "rgb(56, 89, 235)",
    position: "fixed",
    bottom: 0,
    left: 0,
    textAlign: "center",
    width: "100%",
  },
}));

function Footer({ totalTransactions, totalDeposits, totalWithdrawals }) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
        color="white"
      >
        <Grid item>
          <Typography variant="p">
            Total transactions: {totalTransactions}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="p">Total deposits: {totalDeposits}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="p">
            Total withdrawals: {totalWithdrawals}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
