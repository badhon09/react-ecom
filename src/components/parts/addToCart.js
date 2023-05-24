
import { toast } from 'react-toastify';

// function addCart(e){
    
// }

// export default function addToCart() {
    //const addToCart = document.getElementById('cart-btn');

   export const addCart=(e)=>{
       
        const productId = e.proid;
        const title = e.title;
        const price = e.price;
        const qty = 1
        const image = e.image;
        const product = { id: productId, title: title, price: price,image:image , qty:qty }; // Replace with actual product details
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER
        });        //setCartItems(cartItems)
        
    }

// }
