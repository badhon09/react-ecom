import React from 'react'
import { Link } from 'react-router-dom'

export const Product = (item) => {
  return (
    <>
    <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                         <div className="product product-2">
                             <figure className="product-media">
                                 <span className="product-label label-circle label-sale">Sale</span>
                                 <a href="product.html">
                                     <img src={item.image} alt="Product image" width="200px" className="product-image"/>
                                 </a>

                                 <div className="product-action-vertical">
                                     <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                 </div>

                                 <div className="product-action">
                                     <a href="#" className="btn-product btn-cart" id={item.id} title={item.title} image={item.image} price={item.price} onClick={handleAddToCart(item)}><span>add to cart</span></a>
                                     <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                 </div>
                             </figure>

                             <div className="product-body">
                                 <div className="product-cat">
                                     <a href="#">Headphones</a>
                                 </div>
                                 <h3 className="product-title"><Link to={'/product-details/'+item.id} >{item.title}</Link></h3>
                                 <div className="product-price">
                                     <span className="new-price">${item.price}</span>
                                     <span className="old-price">Was $349.99</span>
                                 </div>
                                 <div className="ratings-container">
                                     <div className="ratings">
                                         <div className="ratings-val" ></div>
                                     </div>
                                     <span className="ratings-text">( {item.rating[0]} )</span>
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
