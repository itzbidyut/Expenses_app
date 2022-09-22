import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="Navbar  navbar-expand-lg">
      <div className="container">
        <p className="Navbar-brand">
          <Link to="/">Expenses</Link>
        </p>

        <p className="Details">
          <Link to="/expenses-details">Expenses Details</Link>
        </p>
      </div>
    </div>
  );
}
