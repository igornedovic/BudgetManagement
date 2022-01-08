import React, { useState } from "react";
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

const useStyles = makeStyles((styles) => ({
  newTransaction: {
    marginTop: "10px",
    width: "80%",
    textAlign: "center",
    margin: "auto",
    color: "rgb(36, 39, 46)",
  },
}));

function NewTransaction() {
  const classes = useStyles();
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(date, type, purpose, amount);
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
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="deposit">Deposit</MenuItem>
                <MenuItem value="withdrawal">Withdrawal</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Purpose"
              value={purpose}
              onInput={(e) => setPurpose(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Amount"
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              value={amount}
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
