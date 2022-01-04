import React, { useState, useEffect } from "react"; //(for naming export   {rafc})
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ProductsChild } from "./ProductsChild";
import "./Redux.css";
export const ProductsParent = ({ search }) => {
  const stateProducts = useSelector((state) => state.productReducer.product);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const getApiData = async () => {
    const allProducts = await axios.get("products.json");
    setProducts(allProducts.data);
    console.log("All-product==>", allProducts.data);
    stateProducts.length <= 0 &&
      dispatch({ type: "Add-Product", data: allProducts.data });
  };
  useEffect(() => {
    getApiData();
  }, []);
  useEffect(() => {
    const filteredProducts = stateProducts.filter((item) =>
      item.title.toUpperCase().includes(search.toUpperCase())
    );
    setProducts(filteredProducts);
  }, [search]);
  return (
    <div>
      <h1> ProductsParent!</h1>
      <div className="cards-parent">
        {products.map((item) => {
          console.log("Check item==>", item);
          return <ProductsChild item={item} />;
        })}
      </div>
    </div>
  );
};
