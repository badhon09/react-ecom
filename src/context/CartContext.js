import React, { Children, createContext } from 'react'


export const CartContext = createContext();
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const CHECKOUT = "CHECKOUT";
export const CLEAR = "CLEAR";

export const CartContextProvider = ({Children}) => {
  return (
    <CartContext.Provider value={{}}>
        {Children}
    </CartContext.Provider>
  )
}