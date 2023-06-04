import { toast } from "react-toastify";
import { ADD_TO_CART, REMOVE_ITEM , INCREASE ,DECREASE,CHECKOUT,CLEAR} from "./CartType";
import { useState } from "react";


// Save the cartItems to local storage
const Storage = (cartItems) => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.length > 0 ? cartItems : [])
    );
  };

  export const shippingPrice = (value) => {
    
    return value;
  }

// Export function to calculate the total price of the cart and the total quantity of the cart
export const sumItems = (cartItems) => {
    Storage(cartItems);
    let itemCount = cartItems.reduce(
        (total, product) => total + product.quantity,
        0
    );
    let total = cartItems
        .reduce((total, product) => total + product.price * product.quantity, 0)
        .toFixed(2);
    return { itemCount, total };
    };

    const RemovedNotify = () => {
        toast.warning("Removed from cart !", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
  
export const CartReducer = (state,action) => {
    switch (action.type) {
        // If the action type is ADD_TO_CART, we want to add the item to the cartItems array
        case ADD_TO_CART:
            if (!state.cartItems.find((item) => item.id === action.payload.id)) {
            state.cartItems.push({
                ...action.payload,
                quantity: action.payload.qty ?? 1,
            });
            toast.success("Added in cart !", {
                position: toast.POSITION.TOP_RIGHT
            });
            }
    
            return {
            ...state,
            ...sumItems(state.cartItems),
            cartItems: [...state.cartItems],
            };
        
        // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array
        case REMOVE_ITEM:

        RemovedNotify()
          
            return {
            ...state,
            ...sumItems(
                state.cartItems.filter((item) => item.id !== action.payload.id)
            ),
            
            cartItems: [
                ...state.cartItems.filter((item) => item.id !== action.payload.id),
            ],
            
            };
            
                
    
        default:
            break;
    }
}