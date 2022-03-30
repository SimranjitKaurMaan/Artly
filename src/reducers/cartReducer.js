import { deleteFromCart, postToCart, updateQuantityInCart } from "../components/utils/requestUtils/CartRequestUtils";

export const cartReducer = (state, action) => {
    console.log(action);
    console.log(`${JSON.stringify(state)}`);
    switch (action.type) {
      case "INCREMENT_QTY_IN_CART":
        // TODO: increment in backend and if successful change in frontend.
        (async () => await updateQuantityInCart(action.payload._id , {type: 'increment'})
        )(); 
        return {
          ...state,
          productsInCart: [...state.productsInCart.filter((item) => item._id !== action.payload._id) , {...action.payload, qty: action.payload.qty + 1}],
          totalPrice: state.totalPrice + action.payload.price
        };
      case "DECREMENT_QTY_IN_CART":
        (async () => await updateQuantityInCart(action.payload._id , {type: 'decrement'})
        )();
        return {
          ...state,
          productsInCart: [...state.productsInCart.filter((item) => item._id !== action.payload._id) , {...action.payload, qty: action.payload.qty - 1}],
          totalPrice: state.totalPrice - action.payload.price
        };
      case "REMOVE_FROM_CART":
        (async () => await deleteFromCart(action.payload)
        )();
        return {
          ...state,
          totalPrice: state.totalPrice - action.payload.price,
          productsInCart: state.productsInCart.filter((item) => item._id !== action.payload._id)
        };
      case "ADD_TO_CART":
        (async () => {await postToCart(action.payload);
        })();
        return {
            ...state,
            totalPrice: state.totalPrice + action.payload.price,
            productsInCart: [...state.productsInCart , {...action.payload, qty: 1}]
        };
      default:
        return state;
    }
  };