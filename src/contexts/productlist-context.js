import { createContext, useReducer, useContext} from "react";
import { productlistReducer } from "../reducers/productlistReducer";

const ProductlistContext = createContext();

export const ProductlistProvider = ({ children }) => {
   const [state, dispatch] = useReducer(productlistReducer, {
    products: [],
    minPrice: 0,
    maxPrice: 0
  });

    const addToProductListHandler = async (products) => {
        dispatch({type: 'ADD_TO_PRODUCT_LIST', payload: products});
    }
  
  return (
    <ProductlistContext.Provider value={{ productlistState: state, dispatch, addToProductListHandler }}>
      {children}
    </ProductlistContext.Provider>
  );
};

export const useProductList = () => useContext(ProductlistContext);