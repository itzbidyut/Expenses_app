import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
  FILTER_BY_CATEGORY,
} from "../action-types/expenses";

const initialList = () => {
  const list = localStorage.getItem("bid-expense-list");
  let expenses = [];
  if (list) {
    expenses = JSON.parse(list);
  }
  return expenses;
};
const initialState = {
  expenseList: initialList(),

  query: "",
};

export const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      localStorage.setItem(
        "bid-expense-list",
        JSON.stringify([...state.expenseList, action.data])
      );
      return {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };
    }
    case DELETE_EXPENSE: {
      const updatedList = state.expenseList.filter(
        (item) => item.id !== action.data.id
      );
      localStorage.setItem("bid-expense-list", JSON.stringify(updatedList));
      return {
        ...state,
        expenseList: updatedList,
      };
    }
    case SEARCH_EXPENSE: {
      const { query } = action;
      return {
        ...state,
        query,
      };
    }
    case FILTER_BY_CATEGORY: {
      const { cat } = action;
      return {
        ...state,
        cat,
      };
    }

    default:
      return state;
  }
};
