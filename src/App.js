import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transactions from "./components/Transactions.jsx";
import NewTransaction from "./components/NewTransaction.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

export const transactionsContext = createContext([]);

function App() {
  const [state, setState] = useState({
    left: false,
    right: false,
  });
  const [isDeposit, setIsDeposit] = useState();

  const [transactionList, setNewList] = useState([]);

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
  };

  return (
    <BrowserRouter>
      <transactionsContext.Provider value={transactionList}>
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
      </transactionsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
