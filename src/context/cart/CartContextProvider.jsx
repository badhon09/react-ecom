import { CartContext } from "./CartContext";
import React, { useReducer, useState } from "react";
import { CartReducer, sumItems } from "./CartReducer";
import { type } from "@testing-library/user-event/dist/type";


//Local Storage
const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];


export const CartContextProvider = ( {children} ) => {

  const initialState = {
    cartItems:storage,
    ...sumItems(storage),
    checkout:false,
  }

  const [state,dispatch] = useReducer(CartReducer,initialState);

  const addToCart = (payload) => {
    dispatch({type:"ADD_TO_CART",payload})
  }

   //Function to handle when an item that is in the cart is added again
   const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  //Function to handle when an item is removed from the cart
  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  //Function to remove an item from the cart
  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  //Function to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  //Function to handle when the user clicks the checkout button
  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };


  return (
    <CartContext.Provider value={{
      showCart: state.showCart,
      cartItems: state.cartItems,
      addToCart,
      removeFromCart,
      increase,
      decrease,
      handleCheckout,
      clearCart,
      // To access the total, we need to pass in the state
      ...state,
    }}>
        {children}
    </CartContext.Provider>
  )
}
