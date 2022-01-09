import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transactions from "./components/Transactions.jsx";
import NewTransaction from "./components/NewTransaction.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

export const TransactionsContext = createContext([]);
export const BalanceContext = createContext(0);

function App() {
  const [state, setState] = useState({
    left: false,
    right: false,
  });
  const [isDeposit, setIsDeposit] = useState();

  const [transactionList] = useState([]);
  let [balance, setBalance] = useState({ amount: 0 });

  const toggleDrawer = (side, open, deposit) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
    setIsDeposit(deposit);
  };

  const newTransaction = function (data) {
    if (data) {
      transactionList.push(data);
    }

    let newBalance = transactionList.reduce((a, b) => {
      if (b.type === "Deposit") {
        return { amount: +a.amount + +b.amount };
      } else {
        return { amount: +a.amount - +b.amount };
      }
    });

    setBalance(newBalance);
  };

  return (
    <BrowserRouter>
      <TransactionsContext.Provider value={transactionList}>
        <BalanceContext.Provider value={balance}>
          <NavBar
            toggleDrawer={toggleDrawer}
            state={state}
            isDeposit={isDeposit}
          />
          <Routes>
            <Route path="/" element={<Transactions />} />
            <Route
              path="/newTransaction"
              element={<NewTransaction newTransaction={newTransaction} />}
            />
          </Routes>
          <Footer />
        </BalanceContext.Provider>
      </TransactionsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
