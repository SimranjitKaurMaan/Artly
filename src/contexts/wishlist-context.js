import { createContext, useReducer, useContext } from "react";
import { toast } from 'react-toastify';

import { wishlistReducer } from "../reducers/wishlistReducer";
import { fetchWishlistItems, postToWishlist, deleteFromWishlist } from "../components/utils/requestUtils/WishlistRequestUtils";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
   const [state, dispatch] = useReducer(wishlistReducer, {
    productsInWishlist: []
  });

    const addToWishlistHandler = async ({...product}) => {
        const response = await postToWishlist(product);
        const addedProduct = response.find(item => item._id === product._id);
        dispatch({type: 'ADD_TO_WISHLIST', payload: addedProduct});
        showWishlistSavedToast();

    }
    const deleteFromWishlistHandler = async ({...product}) => {
        const wishlistProducts = await fetchWishlistItems();
        const selectedProduct = wishlistProducts.find(item => item._id === product._id);
        await deleteFromWishlist(selectedProduct._id);
        dispatch({type: 'DELETE_FROM_WISHLIST', payload: selectedProduct});
        showWishlistDeleteToast();
     }
     
     const showWishlistSavedToast = () => toast.success("Saved to Wishlist.");
     const showWishlistDeleteToast = () => toast.error("Deleted from Wishlist.");

  return (
    <WishlistContext.Provider value={{ wishlistState: state, dispatch, addToWishlistHandler, deleteFromWishlistHandler }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);