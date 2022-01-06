import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transactions from "./components/Transactions.jsx";
import NewTransaction from "./components/NewTransaction.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      fontSize: 14,
      h5: {
        fontWeight: 600,
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <NavBar />
        <Routes>
          <Route path="/" element={<Transactions />} />
          <Route path="/newTransaction" element={<NewTransaction />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
