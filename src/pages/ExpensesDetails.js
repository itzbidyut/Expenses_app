import React from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function ExpensesDetails() {
  const { expenseList: list } = useSelector((state) => state.expenses);

  const totalExpenses = list
    .map((item) => item.expence)
    .reduce((prev, curr) => prev + curr, 0);

  const totalEducation = list
    .filter((item) => item.category === "Education")
    .map((item) => item.expence)
    .reduce((prev, curr) => prev + curr, 0);
  const totalLoan = list
    .filter((item) => item.category === "Loan")
    .map((item) => item.expence)
    .reduce((prev, curr) => prev + curr, 0);
  const totalTravel = list
    .filter((item) => item.category === "Travel")
    .map((item) => item.expence)
    .reduce((prev, curr) => prev + curr, 0);
  const totalFood = list
    .filter((item) => item.category === "Food")
    .map((item) => item.expence)
    .reduce((prev, curr) => prev + curr, 0);
  const totalHealth = list
    .filter((item) => item.category === "Health")
    .map((item) => item.expence)
    .reduce((prev, curr) => prev + curr, 0);
  const totalEntertenment = list
    .filter((item) => item.category === "Entertenment")
    .map((item) => item.expence)
    .reduce((prev, curr) => prev + curr, 0);

  const labels = [
    "ALL",
    "Education",
    "Loan",
    "Travel",
    "Food",
    "Health",
    "Entertenment",
  ];

  const expencesData = [
    totalExpenses,
    totalEducation,
    totalLoan,
    totalTravel,
    totalFood,
    totalHealth,
    totalEntertenment,
  ];

  const data = {
    labels,
    datasets: [
      {
        data: expencesData.map((item) => item),
        backgroundColor: "#81f587",
      },
    ],
  };
  return (
    <div className="container mt-5 ">
      {list.length ? (
        <div>
          <h2 className="mb-4"> Your Total Expenses - $ {totalExpenses}</h2>
          <div className="bar-chaart mt-5">
            <div className="bar">
              <Bar options={options} data={data} />
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-center mt-5 pt-5">
          For expenses details you must add few expenses
        </h2>
      )}
    </div>
  );
}
