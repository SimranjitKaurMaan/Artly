import { createContext, useReducer, useContext} from "react";
import { productlistReducer } from "../reducers/productlistReducer";

const ProductlistContext = createContext();

export const ProductlistProvider = ({ children }) => {
   const [state, dispatch] = useReducer(productlistReducer, {
    products: [],
    filteredProducts: [],
    minPrice: 0,
    maxPrice: 0,
    sortBy: '',
    rating: 1,
    artists: [],
    selectedArtists: [],
    priceLimit: 0
  });

  const addToProductListHandler = (products) => {
      dispatch({type: 'ADD_TO_PRODUCT_LIST', payload: products});
  }
  
  const sortByHandler = (sortBy) => {
    dispatch({type: 'SORT_BY_PRICE', payload: sortBy});
  }

  const filterByArtistHandler = (artist) => {
    dispatch({type: 'FILTER_BY_ARTIST', payload: artist});
  }

  const filterByRatingHandler = (rating) => {
    dispatch({type: 'FILTER_BY_RATING', payload: rating});
  }

  const filterByPriceHandler = (priceLimit) => {
    dispatch({type: 'FILTER_BY_PRICE', payload: priceLimit});
  }

  const clearFilters = () => {
    dispatch({type: 'CLEAR_FILTERS'});
  }

  return (
    <ProductlistContext.Provider value={{ productlistState: state, sortByHandler, filterByArtistHandler, filterByRatingHandler, filterByPriceHandler, clearFilters, addToProductListHandler }}>
      {children}
    </ProductlistContext.Provider>
  );
};

export const useProductList = () => useContext(ProductlistContext);