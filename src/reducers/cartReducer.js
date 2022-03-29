export const cartReducer = (state, action) => {
    console.log(action);
    console.log(`${JSON.stringify(state)}`);
    switch (action.type) {
      case "INCREMENT_QTY_IN_CART":
        // increment in cart in backend  
        return {
          ...state,
          quantity: state.quantity + 1,
          totalPrice: state.totalPrice + action.payload.price
        };
      case "DECREMENT_QTY_IN_CART":
        // decrease from cart in backend  
        return {
          ...state,
          quantity: state.quantity - 1,
          totalPrice: state.totalPrice - action.payload.price
        };
      case "REMOVE_FROM_CART":
        // remove from cart in backend  
        return {
          ...state,
          quantity: state.quantity - 1,
          totalPrice: state.totalPrice - action.payload.price,
          itemsInCart: state.itemsInCart.filter((item) => item !== action.payload)
        };
      case "ADD_TO_CART":
        // add to cart in backend
        return {
            ...state,
            quantity: state.quantity + 1,
            totalPrice: state.totalPrice + action.payload.price,
            itemsInCart: [...state.itemsInCart , action.payload]
        };
      default:
        return state;
    }
  };