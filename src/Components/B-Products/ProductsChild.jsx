import React from "react";
import "./Redux.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export const ProductsChild = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img className="image" src={item.image} alt="" />
      <h3>{item.title.substr(0, 20) + "..."}</h3>
      <h4>Price:${item.price}</h4>
      <button onClick={() => dispatch({ type: "Add-Cart", data: item })}>
        Add To Cart
      </button>
      <Link to="/detail">
        <button
          onClick={() => dispatch({ type: "Selected-Product", data: item })}
        >
          View Details
        </button>
      </Link>
    </div>
  );
};
