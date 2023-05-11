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
