import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Expenseitem from "../components/Expenseitem";
import { useDispatch } from "react-redux";

import { filterExpense } from "../redux/actions/expensesAction";

export default function ExpenseList() {
  const [filterTiger, setFilterTiger] = useState("All");
  const [filterDataList, setFilterDataList] = useState([]);
  const dispatch = useDispatch();
  const { expenseList: list, query } = useSelector((state) => state.expenses);

  const FilterCatList = [
    {
      name: "All",
    },
    {
      name: "Education",
    },
    {
      name: "Loan",
    },
    {
      name: "Travel",
    },
    {
      name: "Food",
    },
    {
      name: "Health",
    },
    {
      name: "Entertenment",
    },
  ];

  const totalExpenses = list
    .map((item) => item.expence)
    .reduce((prev, curr) => prev + curr, 0);

  useEffect(() => {
    setFilterDataList(list);
    const filterList = list.filter((item) => item.title.includes(query));
    setFilterDataList(filterList);
  }, [list, query]);

  const handleFilter = (cat) => {
    setFilterTiger(cat);
    dispatch(filterExpense(cat));
    if (cat === "All") {
      setFilterDataList(list);
    } else {
      const filterList = list.filter((item) => item.category === cat);
      setFilterDataList(filterList);
    }
  };

  return (
    <>
      {list.length ? (
        <div className="filterItems">
          {FilterCatList?.map((item) => (
            <button
              className={filterTiger === item.name ? "active" : ""}
              key={item.name}
              onClick={(e) => handleFilter(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>
      ) : (
        <></>
      )}

      <div className="ExpenseItems row">
        <h4 className="mb-4 total">Your Total Expenses = $ {totalExpenses}</h4>
        {filterDataList.length ? (
          filterDataList?.map((item) => <Expenseitem item={item} />)
        ) : (
          <p className="empty">Empty list</p>
        )}
      </div>
    </>
  );
}
