import { deleteFromCart, postToCart, updateQuantityInCart } from "../components/utils/requestUtils/CartRequestUtils";

export const cartReducer = (state, action) => {
    console.log(action);
    console.log(`${JSON.stringify(state)}`);
    switch (action.type) {
      case "INCREMENT_QTY_IN_CART": 
        return {
          ...state,
          productsInCart: [...action.payload.products],
          totalPrice: state.totalPrice + action.payload.price
        };
      case "DECREMENT_QTY_IN_CART":
        return {
          ...state,
          productsInCart: [...action.payload.products],
          totalPrice: state.totalPrice - action.payload.price
        };
      case "DELETE_FROM_CART":
        return {
          ...state,
          totalPrice: state.totalPrice - action.payload.price,
          productsInCart: state.productsInCart.filter((item) => item._id !== action.payload._id)
        };
      case "ADD_TO_CART":
        return {
            ...state,
            totalPrice: state.totalPrice + action.payload.price,
            productsInCart: [...state.productsInCart , {...action.payload}]
        };
      default:
        return state;
    }
  };