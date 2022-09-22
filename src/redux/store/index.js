import { createStore, combineReducers } from "redux";
import { expensesReducer } from "../reducers/expensesReducer";

export const reducer = combineReducers({
  expenses: expensesReducer,
});

const initialState = {};

const store = createStore(reducer, initialState);

export default store;
