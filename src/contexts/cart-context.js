import { createContext, useReducer, useContext } from "react";
import { toast } from 'react-toastify';
import { fetchCartItems,deleteFromCart, updateQuantityInCart } from "../components/utils/requestUtils/CartRequestUtils";
import { cartReducer } from "../reducers/cartReducer";
import { postToCart } from "../components/utils/requestUtils/CartRequestUtils";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
   const [state, dispatch] = useReducer(cartReducer, {
    productsInCart: [],
    totalPrice: 0
  });

    const addToCartHandler = async ({...product}) => {
        const response = await postToCart(product);
        const addedProduct = response.find(item => item._id === product._id);
        dispatch({type: 'ADD_TO_CART', payload: addedProduct});
        showCartSavedToast();
    }
    const deleteFromCartHandler = async ({...product}) => {
        const cartProducts = await fetchCartItems();
        const selectedProduct = cartProducts.find(item => item._id === product._id);
        await deleteFromCart(selectedProduct._id);
        dispatch({type: 'DELETE_FROM_CART', payload: selectedProduct});
        showCartDeletedToast();
     }
    
    const incrementCartItemHandler = async ({...product}) => {
        const cartProducts = await fetchCartItems();
        const selectedProduct = cartProducts.find(item => item._id === product._id);
        const updatedCartProducts = await updateQuantityInCart(selectedProduct._id , {type: 'increment'});
        const updatedProduct = updatedCartProducts.find(item => item._id === product._id);
        dispatch({type: 'INCREMENT_QTY_IN_CART', payload: {products: updatedCartProducts, price: updatedProduct.price}});
    }

    const decrementCartItemHandler = async ({...product}) => {
       const cartProducts = await fetchCartItems();
       const selectedProduct = cartProducts.find(item => item._id === product._id);
       const updatedCartProducts = await updateQuantityInCart(selectedProduct._id , {type: 'decrement'});
       const updatedProduct = updatedCartProducts.find(item => item._id === product._id);
       dispatch({type: 'DECREMENT_QTY_IN_CART', payload: {products: updatedCartProducts, price: updatedProduct.price }});
    }
    
    const showCartSavedToast = () => toast.success("Saved to Cart.");
    const showCartDeletedToast = () => toast.error("Deleted from Cart.");
     
  return (
    <CartContext.Provider value={{ cartState: state, dispatch, addToCartHandler, deleteFromCartHandler, decrementCartItemHandler, incrementCartItemHandler }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);