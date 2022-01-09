import React, { useState, useContext } from "react";
import { makeStyles } from "@mui/styles";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";
import {BalanceContext} from "../App.js";

const useStyles = makeStyles((styles) => ({
  newTransaction: {
    marginTop: "10px",
    width: "80%",
    textAlign: "center",
    margin: "auto",
    color: "#444",
  },
}));

function NewTransaction({newTransaction}) {
  const classes = useStyles();

  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState(0);

  const balance = useContext(BalanceContext);

  function handleSubmit(event) {
    event.preventDefault();
    newTransaction({date,type,purpose,amount});
  }

  return (
    <div className={classes.newTransaction}>
      <h1>New Transaction</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5} mt={1}>
          <Grid item xs={6}>
            <TextField
              type="date"
              required={true}
              value={date}
              style={{ width: 220 }}
              onInput={(e) => setDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl style={{ width: 220 }}>
              <InputLabel>Type</InputLabel>
              <Select
                label="Type"
                required={true}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="Deposit">Deposit</MenuItem>
                <MenuItem value="Withdrawal">Withdrawal</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Purpose"
              required={true}
              value={purpose}
              onInput={(e) => setPurpose(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Amount"
              required={true}
              type="number"
              InputProps={type === "Deposit" ? { inputProps: { min: 1 } } : {inputProps: { min: 1, max: balance.amount}}}
              value={amount}
              style={{ width: 220 }}
              onInput={(e) => setAmount(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default NewTransaction;
