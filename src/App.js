import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import {Home} from './components/pages/Home';
import { ProductDetails } from "./components/pages/ProductDetails";
import { Login } from "./components/pages/Login";
import { AuthContext } from "./context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { Checkout } from "./components/pages/Checkout";
import { AllProducts } from "./components/pages/AllProducts";
import { Cart } from "./components/pages/Cart";
import { CartContext } from "./context/cart/CartContext";
import { CartContextProvider } from "./context/cart/CartContextProvider";

function App() {


  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  let [cartItems,setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  let [count, setCount] = useState(cartItems.length)




  return (
    <>


    
<CartContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product-details/:id" element={<ProductDetails/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/all-products/:id?" element={<AllProducts/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout/:details" element={<ProtectedRoute><Checkout/></ProtectedRoute>} />
    
     
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
 

    </>
  );
}

export default App;
