import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.productReducer.cart);
  console.log("cart==>", cartItems);
  return (
    <div>
      <h1>Cart</h1>
      <div className="cards-parent">
        {cartItems.map((item) => {
          return (
            <div className="card">
              <img className="image" src={item.image} alt="" />
              <h3>{item.title.substr(0, 20) + "..."}</h3>
              <h4>Price:${item.price}</h4>
              <button
                onClick={() => dispatch({ type: "Remove-Product", data: item })}
              >
                Remove
              </button>
              <Link to="/detail">
                <button
                  onClick={() =>
                    dispatch({ type: "Selected-Product", data: item })
                  }
                >
                  View Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
