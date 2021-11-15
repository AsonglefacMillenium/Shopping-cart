import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Cart from "./Cart";


import Products from "../Products/products";

const Routers = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCardClearance }) =>{
    return(
        <div>
        <Routes>
        <Route path="/"  element={<Products handleAddProduct={handleAddProduct}/>}>
          
            </Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCardClearance={handleCardClearance}/>}></Route>
        </Routes>

       
        
        
        
    </div>

    );
      
};

export default Routers;