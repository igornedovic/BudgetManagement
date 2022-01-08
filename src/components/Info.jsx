
import { Grid } from "@mui/material";
import React from "react";

function Info() {
  return (
    <div>
      <h1>Details</h1>
      <hr />
      <Grid container>
        <Grid item xs={4}>
          <p>Currency: RSD</p>
        </Grid>
        <Grid item xs={4}>
          <p>Image</p>
        </Grid>
        <Grid item xs={4}>
          <p>Balance: 10000 RSD</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Info;
