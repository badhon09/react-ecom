import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { addCart } from './addToCart';

export const Products = (item) => {

  const {data,loading,error} = useFetch('https://fakestoreapi.com/products');
   

  return (
   <>
    {data.map(item => (
      <div className="col-6 col-md-4 col-lg-4 col-xl-3">
      <div className="product product-7 text-center">
        <figure className="product-media">
          <a href="product.html">
            <img
              src={item.image}
              alt="Product image"
              className="product-image"
            />
          </a>
          <div className="product-action-vertical">
            <a
              href="#"
              className="btn-product-icon btn-wishlist btn-expandable"

            >
              <span>add to wishlist</span>
            </a>
            <a
              href="popup/quickView.html"
              className="btn-product-icon btn-quickview"
              title="Quick view"
            >
              <span>Quick view</span>
            </a>
            <a
              href="#"
              className="btn-product-icon btn-compare"
              title="Compare"
            >
              <span> ssss </span>
            </a>
          </div>
          {/* End .product-action-vertical */}
          <div className="product-action">
            <a  href="#" id="cart-btn" className="btn-product btn-cart" 
            proid={item.id} title={item.title} image={item.image} price={item.price} 
            onClick={(e) => addCart(item)}>
              <span>add to cart</span>
            </a>
          </div>
          {/* End .product-action */}
        </figure>
        {/* End .product-media */}
        <div className="product-body">
          <div className="product-cat">
            <a href="#">Dresses</a>
          </div>
          {/* End .product-cat */}
          <h3 className="product-title">
          <Link to={'/product-details/'+item.id} >{item.title}</Link>
          </h3>
          {/* End .product-title */}
          <div className="product-price">${item.price}</div>
          {/* End .product-price */}
          <div className="ratings-container">
            <div className="ratings">
              <div className="ratings-val" style={{ width: "0%" }} />
              {/* End .ratings-val */}
            </div>
            {/* End .ratings */}
            <span className="ratings-text">( 0 Reviews )</span>
          </div>
          {/* End .rating-container */}
          <div className="product-nav product-nav-thumbs">
            {/* <a href="#" className="active">
              <img
                src="assets/images/products/product-5-thumb.jpg"
                alt="product desc"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/products/product-5-2-thumb.jpg"
                alt="product desc"
              />
            </a> */}
          </div>
          {/* End .product-nav */}
        </div>
        {/* End .product-body */}
      </div>
   
   
    {/* End .product */}
  </div>
  ))}
  </>
  )
}
