export const productlistReducer = (state, action) => {
    console.log(action);
    console.log(`${JSON.stringify(state)}`);
    switch (action.type) {
      case "ADD_TO_PRODUCT_LIST":
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
            maxPrice: maxPrice
        };
      case "SORT_BY":
        const sortType = action.payload;
        switch (sortType) {
          case "ascending":
            return {
              ...state,
              filteredProducts: [...state.filteredProducts].sort(
              (firstProduct, secondProduct) => firstProduct.price - secondProduct.price)
            };
          case "descending":
            return {
              ...state,
              filteredProducts: [...state.filteredProducts].sort(
              (firstProduct, secondProduct) => secondProduct.price - firstProduct.price
            )};
        }
      case "FILTER_BY_ARTIST":
        const artist = action.payload;
        return {
          ...state,
          filteredProducts: [...state.products].filter(product => product.artist === artist)
      }     
      case "FILTER_BY_RATING":
        const rating = action.payload;
        return {
          ...state,
          filteredProducts: [...state.products].filter(product => product.rating >= rating)
      } 
      case "CLEAR_FILTERS" :
        return {
          ...state,
          filteredProducts: [...state.products]
      } 
      default:
        return state;
    }
  };