import React from "react";
import "./Redux.css";
import { useSelector, useDispatch } from "react-redux";
export const ProductsDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.productReducer.selectedProd[0]
  );
  return (
    <div>
      <h1>Products Details</h1>
      <div className="card">
        <img className="image" src={cartItems.image} alt="" />
        <h3>{cartItems.title}</h3>
        <h4>Price:${cartItems.price}</h4>
        <button onClick={() => dispatch({ type: "Add-Cart", data: cartItems })}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
