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

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container direction={"row"} spacing={15} alignItems="center" justifyContent="center" color="white">
        <Grid item>
          <Typography variant="p">Broj transakcija:</Typography>
        </Grid>
        <Grid item>
          <Typography variant="p">Broj uplata:</Typography>
        </Grid>
        <Grid item>
          <Typography variant="p">Broj isplata:</Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
