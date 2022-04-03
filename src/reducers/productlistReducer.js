import { handleFilterByArtist, handleFilterByRating, handleSortByPrice, handleFilterByPrice, applyFilterAndSorts } from "./FilterUtils";

export const productlistReducer = (state, action) => {
    console.log(action);
    //console.log(`${JSON.stringify(state)}`);
    switch (action.type) {
      case "ADD_TO_PRODUCT_LIST":{
        let minPrice = [...action.payload][0].price;
        let maxPrice = [...action.payload][0].price;
        [...action.payload].map(product => {
           minPrice = product.price < minPrice ? product.price : minPrice;
           maxPrice = product.price > maxPrice ? product.price : maxPrice;
        });
        return {
            ...state,
            products: [...action.payload],
            filteredProducts: [...action.payload],
            minPrice: minPrice,
            maxPrice: maxPrice,
            priceLimit: minPrice
        }
      };
      case "SORT_BY_PRICE":{
        let result = [...state.products];
        result = applyFilterAndSorts(state);
        const sortType = action.payload;
        const sortedByPrice = handleSortByPrice([...result],{sortBy: sortType});
        console.log(sortedByPrice);
        return {
          ...state,
          filteredProducts: sortedByPrice,
          sortBy: action.payload
        }
      };
      case "FILTER_BY_ARTIST":{
        let result = [...state.products];
        result = applyFilterAndSorts(state);
        const artist = action.payload;
        const filteredByArtist = handleFilterByArtist([...result],{artists: [...state.artists, artist]})
        return {
          ...state,
          filteredProducts: filteredByArtist,
          artists:[...state.artists, artist]
      }
      };     
      case "FILTER_BY_RATING": {
        let result = [...state.products];
        // hack: to nullify the previously selected rating
        const newState = {...state, rating: 1}
        result = applyFilterAndSorts(newState);
        const rating = action.payload;
        const filteredByRating = handleFilterByRating([...result],{rating: rating})
        return {
          ...state,
          filteredProducts: filteredByRating,
          rating: action.payload
        } 
       };
      case "FILTER_BY_PRICE": {
        let result = [...state.products];
        result = applyFilterAndSorts(state);
        const price = action.payload;
        const filteredByPrice = handleFilterByPrice([...result],{priceLimit: price})
        return {
          ...state,
          filteredProducts: filteredByPrice,
          priceLimit: price
        }
      } 
      case "CLEAR_FILTERS" :{
        return {
          ...state,
          sortBy: '',
          rating: 1,
          artists:[],
          priceLimit: state.minPrice,
          filteredProducts: [...state.products]
       }
      };
      default:
        return state;
    }
  };