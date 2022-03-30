import { createContext, useState, useEffect, useReducer, useContext } from "react";

import { fetchCartItems } from "../components/utils/requestUtils/CartRequestUtils";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
   const [productsInCart, setProductsInCart] = useState([]);
   const [state, dispatch] = useReducer(cartReducer, {
    productsInCart: productsInCart,
    totalPrice: 0
  });
    //fetch the products from cart  
    // useEffect(() => {
    //     (async () => {
    //     const productStateInCart = await fetchCartItems();
    //     console.log(`productStateInCart in CartProvider: ${JSON.stringify(productStateInCart)}`)
    //     dispatch({ type: "RELOAD_CART", payload: productStateInCart})
    //     })();
    // },[])
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);