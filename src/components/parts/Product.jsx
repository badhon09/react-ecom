import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Product = (item) => {

    const addToCart = document.getElementById('cart-btn');

    const addCart=(e)=>{
       
        const productId = e.proid;
        const title = e.title;
        const price = e.price;
        const qty = 1
        const image = e.image;
        const product = { id: productId, title: title, price: price,image:image , qty:qty }; // Replace with actual product details
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

   
  return (
    <>
    <h1>{item.item.id}</h1>
    <div className="col-6 col-md-4 col-lg-3" key={item.item.id}>
                         <div className="product product-2">
                             <figure className="product-media">
                                 <span className="product-label label-circle label-sale">Sale</span>
                                 <a href="product.html">
                                     <img src={item.item.image} alt="Product image" width="200px" className="product-image"/>
                                 </a>

                                 <div className="product-action-vertical">
                                     <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                 </div>

                                 <div className="product-action">
                                     <button id="cart-btn" className="btn-product btn-cart" proid={item.item.id} title={item.item.title} image={item.item.image} price={item.item.price} onClick={(e) => addCart(item.item)}><span>add to cart</span></button>
                                     <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                 </div>
                             </figure>

                             <div className="product-body">
                                 <div className="product-cat">
                                     <a href="#">Headphones</a>
                                 </div>
                                 <h3 className="product-title"><Link to={'/product-details/'+item.item.id} >{item.item.title}</Link></h3>
                                 <div className="product-price">
                                     <span className="new-price">${item.item.price}</span>
                                     <span className="old-price">Was $349.99</span>
                                 </div>
                                 <div className="ratings-container">
                                     <div className="ratings">
                                         <div className="ratings-val" ></div>
                                     </div>
                                     <span className="ratings-text">( {item.item.rating[0]} )</span>
                                 </div>

                                 <div className="product-nav product-nav-dots">
                                     {/* <a href="#" className="active" ><span className="sr-only">Color name</span></a>
                                     <a href="#" style="background: #ff887f;"><span className="sr-only">Color name</span></a>
                                     <a href="#" style="background: #6699cc;"><span className="sr-only">Color name</span></a>
                                     <a href="#" style="background: #f3dbc1;"><span className="sr-only">Color name</span></a>
                                     <a href="#" style="background: #eaeaec;"><span className="sr-only">Color name</span></a> */}
                                 </div>
                             </div>
                         </div>
                     </div></>
  )
}
