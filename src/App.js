import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import {Home} from './components/pages/Home';
import { ProductDetails } from "./components/pages/ProductDetails";
import { Login } from "./components/pages/Login";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { Checkout } from "./components/pages/Checkout";
import { AllProducts } from "./components/pages/AllProducts";
import { Cart } from "./components/pages/Cart";

function App() {


  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };



  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product-details/:id" element={<ProductDetails/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/all-products/:id?" element={<AllProducts/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<ProtectedRoute><Checkout/></ProtectedRoute>} />
    
     
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
