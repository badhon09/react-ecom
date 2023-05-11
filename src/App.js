import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Home} from './components/pages/Home';
import { ProductDetails } from "./components/pages/ProductDetails";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product-details/:id" element={<ProductDetails/>} />
     
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
