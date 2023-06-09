import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext, CartContextProvider } from '../../context/cart/CartContext';
import { sumItems } from '../../context/cart/CartReducer';

export const MiniCart = () => {
    const {cartItems, removeFromCart} = useContext(CartContext);
    let {itemCount , total} = sumItems(cartItems)
  return (
    
    <div className="dropdown-menu dropdown-menu-right">
    <div className="dropdown-cart-products">
        {cartItems.map((items)=>(
        <div className="product" key={items.id}>
            <div className="product-cart-details" key={items.id}>
                <h4 className="product-title">
                <Link to={'/product-details/'+items.id} >{items.title}</Link>
                </h4>

                <span className="cart-product-info">
                    <span className="cart-product-qty">{items.quantity}</span>
                    x ${items.price}
                </span>
            </div>

            <figure className="product-image-container">
                <a href="product.html" className="product-image">
                    <img src={items.image} alt="product"/>
                </a>
            </figure>
            <a href="#" className="btn-remove" title="Remove Product" onClick={()=>removeFromCart(items)}><i className="icon-close"></i></a>
        </div>
         ))}

    </div>

    <div className="dropdown-cart-total">
        <span>Total</span>
        
        <span className="cart-total-price">${total}</span>
    </div>

    <div className="dropdown-cart-action">
        <Link to={'/cart'} className="btn btn-primary">View Cart</Link>
        <Link to={'/checkout'} className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></Link>
    </div>
</div>

  )
}
