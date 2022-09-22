import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExpensesDetails from "./pages/ExpensesDetails";
import AddExpenses from "./pages/AddExpenses";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add-expenses" element={<AddExpenses />}></Route>
          <Route path="/expenses-details" element={<ExpensesDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
