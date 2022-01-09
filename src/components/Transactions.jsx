import React from 'react'
import Info from './Info'
import TransactionList from './TransactionList'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((styles) => ({
    root : {
      marginTop: "10px",
      width: "80%",
      textAlign: "center",
      margin: "auto",
      color: "#444",
      "& p" : {
        fontSize: "1.2rem",
        fontWeight: 500
      }
    },
    logo : {
      height: "5rem"
    }
  }));

function Transactions() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <Info logoClass = {classes.logo}/>
           <TransactionList/>
        </div>
    )
}

export default Transactions
