import React, { useEffect , useState } from 'react'
import { Layout } from '../layouts/Layout'
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { Product } from '../parts/Product';

export const Home = () => {
  const {data,loading,error} = useFetch('https://fakestoreapi.com/products');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);


  const handleAddToCart = (product) => {
      //alert(product);
      console.log(product)
    //   const updatedCartItems = [...cartItems, product];
    //   setCartItems(updatedCartItems);
    //   localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

  return (

    <Layout>
      <div className="container for-you">


      <>
  <div className="intro-slider-container mb-5">
    <div
      className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light"
      data-toggle="owl"
      data-owl-options='{
                  "dots": true,
                  "nav": false, 
                  "responsive": {
                      "1200": {
                          "nav": true,
                          "dots": false
                      }
                  }
              }'
    >
      <div
        className="intro-slide"
        style={{
          backgroundImage: "url(assets/images/demos/demo-4/slider/slide-1.png)"
        }}
      >
        <div className="container intro-content">
          <div className="row justify-content-end">
            <div className="col-auto col-sm-7 col-md-6 col-lg-5">
              <h3 className="intro-subtitle text-third">
                Deals and Promotions
              </h3>
              {/* End .h3 intro-subtitle */}
              <h1 className="intro-title">Beats by</h1>
              <h1 className="intro-title">Dre Studio 3</h1>
              {/* End .intro-title */}
              <div className="intro-price">
                <sup className="intro-old-price">$349,95</sup>
                <span className="text-third">
                  $279<sup>.99</sup>
                </span>
              </div>
              {/* End .intro-price */}
              <a href="category.html" className="btn btn-primary btn-round">
                <span>Shop More</span>
                <i className="icon-long-arrow-right" />
              </a>
            </div>
            {/* End .col-lg-11 offset-lg-1 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .intro-content */}
      </div>
      {/* End .intro-slide */}
      <div
        className="intro-slide"
        style={{
          backgroundImage: "url(assets/images/demos/demo-4/slider/slide-2.png)"
        }}
      >
        <div className="container intro-content">
          <div className="row justify-content-end">
            <div className="col-auto col-sm-7 col-md-6 col-lg-5">
              <h3 className="intro-subtitle text-primary">New Arrival</h3>
              {/* End .h3 intro-subtitle */}
              <h1 className="intro-title">
                Apple iPad Pro <br />
                12.9 Inch, 64GB{" "}
              </h1>
              {/* End .intro-title */}
              <div className="intro-price">
                <sup>Today:</sup>
                <span className="text-primary">
                  $999<sup>.99</sup>
                </span>
              </div>
              {/* End .intro-price */}
              <a href="category.html" className="btn btn-primary btn-round">
                <span>Shop More</span>
                <i className="icon-long-arrow-right" />
              </a>
            </div>
            {/* End .col-md-6 offset-md-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .intro-content */}
      </div>
      {/* End .intro-slide */}
    </div>
    {/* End .intro-slider owl-carousel owl-simple */}
    <span className="slider-loader" />
    {/* End .slider-loader */}
  </div>
  {/* End .intro-slider-container */}
  <div className="container">
    <h2 className="title text-center mb-4">Explore Popular Categories</h2>
    {/* End .title text-center */}
    <div className="cat-blocks-container">
      <div className="row">
        <div className="col-6 col-sm-4 col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img
                  src="assets/images/demos/demo-4/cats/1.png"
                  alt="Category image"
                />
              </span>
            </figure>
            <h3 className="cat-block-title">Computer &amp; Laptop</h3>
            {/* End .cat-block-title */}
          </a>
        </div>
        {/* End .col-sm-4 col-lg-2 */}
        <div className="col-6 col-sm-4 col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img
                  src="assets/images/demos/demo-4/cats/2.png"
                  alt="Category image"
                />
              </span>
            </figure>
            <h3 className="cat-block-title">Digital Cameras</h3>
            {/* End .cat-block-title */}
          </a>
        </div>
        {/* End .col-sm-4 col-lg-2 */}
        <div className="col-6 col-sm-4 col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img
                  src="assets/images/demos/demo-4/cats/3.png"
                  alt="Category image"
                />
              </span>
            </figure>
            <h3 className="cat-block-title">Smart Phones</h3>
            {/* End .cat-block-title */}
          </a>
        </div>
        {/* End .col-sm-4 col-lg-2 */}
        <div className="col-6 col-sm-4 col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img
                  src="assets/images/demos/demo-4/cats/4.png"
                  alt="Category image"
                />
              </span>
            </figure>
            <h3 className="cat-block-title">Televisions</h3>
            {/* End .cat-block-title */}
          </a>
        </div>
        {/* End .col-sm-4 col-lg-2 */}
        <div className="col-6 col-sm-4 col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img
                  src="assets/images/demos/demo-4/cats/5.png"
                  alt="Category image"
                />
              </span>
            </figure>
            <h3 className="cat-block-title">Audio</h3>
            {/* End .cat-block-title */}
          </a>
        </div>
        {/* End .col-sm-4 col-lg-2 */}
        <div className="col-6 col-sm-4 col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img
                  src="assets/images/demos/demo-4/cats/6.png"
                  alt="Category image"
                />
              </span>
            </figure>
            <h3 className="cat-block-title">Smart Watches</h3>
            {/* End .cat-block-title */}
          </a>
        </div>
        {/* End .col-sm-4 col-lg-2 */}
      </div>
      {/* End .row */}
    </div>
    {/* End .cat-blocks-container */}
  </div>
  {/* End .container */}
</>




                <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                        <h2 className="title">Recommendation For You</h2>
                    </div>

                   <div className="heading-right">
                        <a href="#" className="title-link">View All Recommendadion <i className="icon-long-arrow-right"></i></a>
                   </div>
                </div>

                <div className="products">
                    <div className="row justify-content-center">
                      {data.map(item => (
                         <Product item={item}/>

                      ))}

                    </div>
                </div>
            </div>
    </Layout>
  )
}
