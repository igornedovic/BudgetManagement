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
  // const [depositList, setDepositList] = useState([]); i korisiti filter i map metodu
  // svaki put kada ubacimo novu transakciju u transactionList pozvati metodu koja filtrira
  // transactionList po tipu i zatim na tom novodobijenom nizu primeniti map metodu tako da se
  // u novom nizu cuvaju samo datum i iznos koji ce se prikazivati na Drawer-u.
  // isto i za withdrawalList, a pomocu isDeposit upravljati sta ce se prikazati.
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalWithdrawals, setTotalWithdrawals] = useState(0);
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
      const index = transactionList.findIndex(
        (t) =>
          t.date === data.date &&
          t.type === data.type &&
          t.purpose === data.purpose
      );

      if (index === -1) {
        transactionList.push(data);
      } else {
        const amount = data.type === "Deposit" ? +data.amount : +-data.amount;
        transactionList[index].amount = +transactionList[index].amount + amount;
      }
    }

    setTotalTransactions(totalTransactions + 1);

    if (data.type === "Deposit") {
      setTotalDeposits(totalDeposits + 1);
    } else {
      setTotalWithdrawals(totalWithdrawals + 1);
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
          <Footer
            totalTransactions={totalTransactions}
            totalDeposits={totalDeposits}
            totalWithdrawals={totalWithdrawals}
          />
        </BalanceContext.Provider>
      </TransactionsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
