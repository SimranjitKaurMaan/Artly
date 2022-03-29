import { createContext, useState, useEffect, useReducer, useContext } from "react";

import { fetchCartItems } from "../components/utils/requestUtils/CartRequestUtils";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

// const itemsInCart = [
//     {
//       id: 1,
//       name: "kala chasma",
//       price: 1000
//     },
//     {
//       id: 2,
//       name: "laal chhadi",
//       price: 500
//     },
//     {
//       id: 3,
//       name: "jalebi",
//       price: 50
//     },
//     {
//       id: 4,
//       name: "japani joota",
//       price: 10000
//     }
//   ];

export const CartProvider = ({ children }) => {
   const [itemsInCart, setItemsInCart] = useState([]);

    //fetch the products from cart  
    useEffect(() => {
        (async () => {
        const products = await fetchCartItems();
        setItemsInCart(products);
        })();
    },[])
  const [state, dispatch] = useReducer(cartReducer, {
    itemsInCart,
    quantity: 0,
    totalPrice: 0
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);