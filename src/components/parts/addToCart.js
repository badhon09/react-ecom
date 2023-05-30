
import { useContext } from 'react';
import { toast } from 'react-toastify';

   export const addCart=(e)=>{
    
       
        const productId = e.proid;
        const title = e.title;
        const price = e.price;
        const qty = 1
        const image = e.image;
        const product = { id: productId, title: title, price: price,image:image , qty:qty }; // Replace with actual product details
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if(isItemInCart(product.title)){
            toast.warning("Already in cart!", {
                position: toast.POSITION.TOP_CENTER
            });
        }else{
            cartItems.push(product);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            toast.success("Added in cart !", {
                position: toast.POSITION.TOP_CENTER
            });

        }
        
        
    }

    export const isItemInCart = (itemId) => {
        
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        return cartItems.some((item) => item.title === itemId);
      };
    
    
      

// }
