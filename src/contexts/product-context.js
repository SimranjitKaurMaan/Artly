// import { createContext, useContext, useReducer, useState, useEffect } from "react";

// const ProductContext = createContext();

// export const ProductProvider = ({children}) => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         (async () => {
//         const products = await fetchProductsByCategory(category);
//         setProducts(products);
//         })();
//     },[])
//     const [state, dispatch] = useReducer(productReducer, {
//         products: categoryProducts,
//         filteredProducts: categoryProducts
//     });
//     return (
//         <ProductContext.Provider value={{ state, dispatch}}>
//             {children}
//         </ProductContext.Provider>
//     );
// };

// export const useFilteredProducts = () => useContext(ProductContext);