import { createContext, useReducer, useContext, useState } from "react";

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
    }
    const deleteFromCartHandler = async ({...product}) => {
        const cartProducts = await fetchCartItems();
        const selectedProduct = cartProducts.find(item => item._id === product._id);
        await deleteFromCart(selectedProduct._id);
        dispatch({type: 'DELETE_FROM_CART', payload: selectedProduct});
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
     
  return (
    <CartContext.Provider value={{ state, dispatch, addToCartHandler, deleteFromCartHandler, decrementCartItemHandler, incrementCartItemHandler }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);