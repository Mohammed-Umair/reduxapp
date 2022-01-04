import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../A-Navigation/NavBar";
import { Cart } from "../B-Products/Cart";
import { ProductsDetails } from "../B-Products/ProductsDetails";
import { ProductsParent } from "../B-Products/ProductsParent";

export const Landing = () => {
  const[search,setSearch]=useState("")
  return (
    <div>
      <BrowserRouter>
        <NavBar setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<ProductsParent search={search} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<ProductsDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
