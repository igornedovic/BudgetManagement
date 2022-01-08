import React from 'react'
import Info from './Info'
import TransactionList from './TransactionList'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((styles) => ({
    details : {
      marginTop: "10px",
      width: "80%",
      textAlign: "center",
      margin: "auto",
      color: "rgb(36, 39, 46)",
    },
  }));

function Transactions() {
    const classes = useStyles();
    return (
        <div className={classes.details}>
           <Info/>
           <TransactionList/>
        </div>
    )
}

export default Transactions
