import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { MiniCart } from '../parts/MiniCart';

export const Navbar = () => {

   
    const {data, loading ,error} = useFetch("https://fakestoreapi.com/products/categories");




  return (
    <>
       
       <header className="header header-intro-clearance header-4">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a>
                    </div>

                    <div className="header-right">

                        <ul className="top-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                    <li>
                                        <div className="header-dropdown">
                                            <a href="#">USD</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li><a href="#">Eur</a></li>
                                                    <li><a href="#">Usd</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="header-dropdown">
                                            <a href="#">English</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li><a href="#">English</a></li>
                                                    <li><a href="#">French</a></li>
                                                    <li><a href="#">Spanish</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to={'/login'} >Sign in / Sign up</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="header-middle">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>
                        
                        <a href="index.html" className="logo">
                            <img src="assets/images/demos/demo-4/logo.png" alt="Molla Logo" width="105" height="25"/>
                        </a>
                    </div>

                    <div className="header-center">
                        <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                            <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper search-wrapper-wide">
                                    <label for="q" className="sr-only">Search</label>
                                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required/>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="header-right">
                        <div className="dropdown compare-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                                <div className="icon">
                                    <i className="icon-random"></i>
                                </div>
                                <p>Compare</p>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <ul className="compare-products">
                                    <li className="compare-product">
                                        <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                        <h4 className="compare-product-title"><a href="product.html">Blue Night Dress</a></h4>
                                    </li>
                                    <li className="compare-product">
                                        <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                        <h4 className="compare-product-title"><a href="product.html">White Long Skirt</a></h4>
                                    </li>
                                </ul>

                                <div className="compare-actions">
                                    <a href="#" className="action-link">Clear All</a>
                                    <a href="#" className="btn btn-outline-primary-2"><span>Compare</span><i className="icon-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="wishlist">
                            <a href="wishlist.html" title="Wishlist">
                                <div className="icon">
                                    <i className="icon-heart-o"></i>
                                    <span className="wishlist-count badge">3</span>
                                </div>
                                <p>Wishlist</p>
                            </a>
                        </div>

                        <div className="dropdown cart-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <div className="icon">
                                    <i className="icon-shopping-cart"></i>
                                    {/* <span className="cart-count">{cartItems.length ?? 0}</span> */}
                                </div>
                                <p>Cart</p>
                            </a>

                           <MiniCart/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header">
                <div className="container">
                    <div className="header-left">
                        <div className="dropdown category-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                                Browse Categories <i className="icon-angle-down"></i>
                            </a>

                            <div className="dropdown-menu">
                                <nav className="side-nav">
                                    <ul className="menu-vertical sf-arrows">
                                    {data.map(item => (
                                        <li className="item-lead" key={item}><a href="#">{item}</a></li>
                                    ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="header-center">
                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="megamenu-container active">
                                    <a href="index.html" className="sf-with-ul">Home</a>

                                    
                                </li>
                                
                                   
                    
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <i className="la la-lightbulb-o"></i><p>Clearance<span className="highlight">&nbsp;Up to 30% Off</span></p>
                    </div>
                </div>
            </div>
        </header>
    
    </>
  )

  
}
