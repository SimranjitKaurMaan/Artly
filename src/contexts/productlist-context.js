import { createContext, useReducer, useContext} from "react";
import { productlistReducer } from "../reducers/productlistReducer";

const ProductlistContext = createContext();

export const ProductlistProvider = ({ children }) => {
   const [state, dispatch] = useReducer(productlistReducer, {
    products: [],
    filteredProducts: [],
    minPrice: 0,
    maxPrice: 0
  });

    const addToProductListHandler = (products) => {
        dispatch({type: 'ADD_TO_PRODUCT_LIST', payload: products});
    }
  
    const sortByHandler = (sortType) => {
      dispatch({type: 'SORT_BY', payload: sortType});
  }

  const filterByArtistHandler = (artist) => {
    dispatch({type: 'FILTER_BY_ARTIST', payload: artist});
  }

  const filterByRatingHandler = (rating) => {
    dispatch({type: 'FILTER_BY_RATING', payload: rating});
  }

  const clearFilters = () => {
    dispatch({type: 'CLEAR_FILTERS'});
  }


  return (
    <ProductlistContext.Provider value={{ productlistState: state, sortByHandler, filterByArtistHandler, filterByRatingHandler, clearFilters, addToProductListHandler }}>
      {children}
    </ProductlistContext.Provider>
  );
};

export const useProductList = () => useContext(ProductlistContext);