import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavBar = ({ setSearch }) => {
  const cartItems = useSelector((state) => state.productReducer.cart);
  return (
    <div className="nav">
      <Link to="/">ClassRedux</Link>
      <input
        className="input"
        onChange={(e) => setSearch(e.target.value)}
        type="search"
      />
      <button>Search</button>
      <Link to="/cart">Cart:{cartItems.length}</Link>
    </div>
  );
};
