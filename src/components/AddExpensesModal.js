import { useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { addExpense } from "../redux/actions/expensesAction";

export default function AddExpenses({ closeModal }) {
  const [title, setTitle] = useState("");
  const [expence, setExpence] = useState();
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setMessage("");
    setTitle(e.target.value);
  };
  const handleExpence = (e) => {
    setMessage("");
    setExpence(e.target.value);
  };
  const handleCategory = (e) => {
    setMessage("");
    setCategory(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > 0 && expence.length > 0 && category.length > 0) {
      const data = {
        id: Math.floor(Math.random() * 10000),
        title,
        expence: parseInt(expence),
        category,
        createdAt: new Date(),
      };
      dispatch(addExpense(data));
      setMessage("Expense added successfully");
      setTitle("");
      setExpence("");
      setCategory("");
      closeModal();
    } else {
      setMessage("Please fill all the input");
    }
  };
  return (
    <div className="addExpenses">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Add new expence</h2>
        <div className="form-input mt-5">
          <label className="mb-2">Title</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter expense title"
            value={title}
            onChange={(e) => handleTitle(e)}
            required
          />
        </div>
        <div className="form-input mt-3">
          <label className="mb-2">Expense in $</label>
          <input
            className="form-control"
            type="number"
            placeholder="Enter expense amount"
            value={expence}
            onChange={(e) => handleExpence(e)}
            required
          />
        </div>
        <div className="form-input mt-3">
          <label className="mb-2">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => handleCategory(e)}
            required
          >
            <option defaultValue="">Select expense Category</option>
            <option defaultValue="Food">Food</option>
            <option defaultValue="Entertenment">Entertenment</option>
            <option defaultValue="Education">Education</option>
            <option defaultValue="Travel">Travel</option>
            <option defaultValue="Health">Health</option>
            <option defaultValue="Loan">Loan</option>
          </select>
        </div>
        <p className="my-3 message">{message}</p>
        <button className="btn btn-primary mt-3" type="submit">
          ADD EXPENCE
        </button>
      </form>
    </div>
  );
}
