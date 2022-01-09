
import { Grid } from "@mui/material";
import React, {useContext} from "react";
import logo from "../assets/img/logo.png";
import {BalanceContext} from "../App.js";

function Info({logoClass}) {
  const balance = useContext(BalanceContext);

  return (
    <div>
      <h1>Details</h1>
      <hr />
      <Grid container>
        <Grid item xs={4}>
          <p>Currency: RSD</p>
        </Grid>
        <Grid item xs={4}>
         <img src={logo} alt={"logo"} className={logoClass}/>
        </Grid>
        <Grid item xs={4}>
          <p>Current balance: {balance.amount}</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Info;
