import { handleFilterByArtist, handleFilterByRating, handleSortByPrice, handleFilterByPrice, applyFilterAndSorts } from "./FilterUtils";

export const productlistReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_PRODUCT_LIST":{
        let minPrice = [...action.payload][0].price;
        let maxPrice = [...action.payload][0].price;
        [...action.payload].map(product => {
           minPrice = product.price < minPrice ? product.price : minPrice;
           maxPrice = product.price > maxPrice ? product.price : maxPrice;
        });
        const distinctArtists = [...action.payload].reduce((acc, { artist }) => (acc.includes(artist) ? acc : [...acc, artist]),[]);
        return {
            ...state,
            products: [...action.payload],
            filteredProducts: [...action.payload],
            minPrice: minPrice,
            maxPrice: maxPrice,
            priceLimit: maxPrice,
            artists: distinctArtists
        }
      };
      case "SORT_BY_PRICE":{
        let result = [...state.products];
        const newState = {...state};
        newState.artists = newState.selectedArtists.length !== 0 ? newState.selectedArtists : newState.artists; 
        result = applyFilterAndSorts(newState);
        const sortType = action.payload;
        const sortedByPrice = handleSortByPrice([...result],{sortBy: sortType});
        return {
          ...state,
          filteredProducts: sortedByPrice,
          sortBy: action.payload
        }
      };
      case "FILTER_BY_ARTIST":{
        let result = [...state.products];
        result = applyFilterAndSorts(state);
        const selectedArtist = action.payload;
        const selectedArtists = state.selectedArtists.includes(selectedArtist) ? state.selectedArtists.filter(artist => artist !== selectedArtist) : [...state.selectedArtists , selectedArtist];
        const filteredByArtist = handleFilterByArtist([...result],{artists: selectedArtists})
        return {
          ...state,
          filteredProducts: filteredByArtist,
          selectedArtists: selectedArtists
      }
      };     
      case "FILTER_BY_RATING": {
        let result = [...state.products];
        // hack: to nullify the previously selected rating
        const newState = {...state, rating: 1};
        newState.artists = newState.selectedArtists.length !== 0 ? newState.selectedArtists : newState.artists; 
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
        const newState = {...state};
        newState.artists = newState.selectedArtists.length !== 0 ? newState.selectedArtists : newState.artists; 
        result = applyFilterAndSorts(newState);
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
          selectedArtists:[],
          priceLimit: state.maxPrice,
          filteredProducts: [...state.products]
       }
      };
      default:
        return state;
    }
  };