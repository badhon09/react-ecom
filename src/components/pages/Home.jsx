import React, { useEffect , useState } from 'react'
import { Layout } from '../layouts/Layout'
import useFetch from '../../hooks/useFetch';

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
                                 <h3 className="product-title"><a href="product.html">{item.title}</a></h3>
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
                     </div>

                      ))}

                    </div>
                </div>
            </div>
    </Layout>
  )
}
