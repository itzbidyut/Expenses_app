import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import ExpenseList from "../components/ExpenseList";
import { searchExpense } from "../redux/actions/expensesAction";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInputValue(e.target.value);
    dispatch(searchExpense(e.target.value));
  };

  return (
    <div>
      <div className="InputSection">
        <div className="container">
          <div className="inputbox">
            <input
              value={inputValue}
              onChange={(e) => handleInput(e)}
              placeholder="Search expense"
            />
          </div>
          <Link to="/add-expenses">
            <button className="addButton"> ADD </button>
          </Link>
        </div>
      </div>
      <div className="container mb-5 pb-5">
        <ExpenseList />
      </div>
    </div>
  );
}
