import React, { useEffect, useState } from 'react'

export const MiniCart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(storedCartItems);
      console.log(cartItems);
    }, []);

  return (
    <div className="dropdown-menu dropdown-menu-right">
    <div className="dropdown-cart-products">
        {cartItems.map((items)=>(
        <div className="product">
            <div className="product-cart-details">
                <h4 className="product-title">
                    <a href="product.html">{items.title}</a>
                </h4>

                <span className="cart-product-info">
                    <span className="cart-product-qty">1</span>
                    x ${items.price}
                </span>
            </div>

            <figure className="product-image-container">
                <a href="product.html" className="product-image">
                    <img src={items.image} alt="product"/>
                </a>
            </figure>
            <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
        </div>
         ))}

    </div>

    <div className="dropdown-cart-total">
        <span>Total</span>

        <span className="cart-total-price">$160.00</span>
    </div>

    <div className="dropdown-cart-action">
        <a href="cart.html" className="btn btn-primary">View Cart</a>
        <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></a>
    </div>
</div>
  )
}
