export const wishlistReducer = (state, action) => {
    switch (action.type) {
      case "DELETE_FROM_WISHLIST":
        return {
          ...state,
          productsInWishlist: state.productsInWishlist.filter((item) => item._id !== action.payload._id)
        };
      case "ADD_TO_WISHLIST":
        return {
            ...state,
            productsInWishlist: [...state.productsInWishlist , {...action.payload}]
        };
      default:
        return state;
    }
  };