import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { addCart } from './addToCart';
import { CartContext } from '../../context/cart/CartContext';

export const Products = (item) => {

  const {data,loading,error} = useFetch('https://fakestoreapi.com/products');

  const {addToCart} =  useContext(CartContext);
  let itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Logic to calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Logic to handle page navigation
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers based on the number of items and items per page
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
   

  return (
   <>
   
    {currentItems.map(item => (
      <div className="col-6 col-md-4 col-lg-4 col-xl-3">
      <div className="product product-7 text-center">
        <figure className="product-media">
          <a href="product.html">
            <img
            style={{ height: "250px" }} 
              src={item.image}
              alt="Product image"
              className="product-image"
            />
          </a>
          <div className="product-action-vertical">
      
            <Link
              to={'/product-details/'+item.id} 
              className="btn-product-icon btn-quickview"
              title="Quick view"
            >
              <span>Quick view</span>
            </Link>
           
          </div>
          {/* End .product-action-vertical */}
          <div className="product-action">
            <a  href="#" id="cart-btn" className="btn-product btn-cart" 
            proid={item.id} title={item.title} image={item.image} price={item.price} 
            onClick={(e) => addToCart(item)}>
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
          
        </div>
        {/* End .product-body */}
      </div>
   
   
    {/* End .product */}
  </div>
  ))}

<nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
           
              <li className="page-item disabled">
                <a
                  className="page-link page-link-prev"
                  href="#"
                  aria-label="Previous"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  <span aria-hidden="true">
                    <i className="icon-long-arrow-left" />
                  </span>
                  Prev
                </a>
              </li>
              {pageNumbers.map((pageNumber) => (
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#" key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={currentPage === pageNumber}>
                 {pageNumber}
                </a>
              </li>
               ))}
              
              
              <li className="page-item">
                <a
                  className="page-link page-link-next"
                  href="#"
                  aria-label="Next"
                >
                  Next{" "}
                  <span aria-hidden="true">
                    <i className="icon-long-arrow-right" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
  </>
  )
}
