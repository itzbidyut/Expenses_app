import React, { useState } from "react";
import Modal from "react-modal";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import ExpenseList from "../components/ExpenseList";
import { searchExpense } from "../redux/actions/expensesAction";
import AddExpensesModal from "../components/AddExpensesModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#addModal");

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInputValue(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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

          <button className="addButton" onClick={openModal}>
            ADD
          </button>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle closeBtn"
              viewBox="0 0 16 16"
              onClick={closeModal}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>

            <AddExpensesModal closeModal={closeModal} />
          </Modal>
        </div>
      </div>
      <div className="container mb-5 pb-5">
        <ExpenseList />
      </div>
    </div>
  );
}
