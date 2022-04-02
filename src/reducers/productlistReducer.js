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
            minPrice: minPrice,
            maxPrice: maxPrice
        };
      default:
        return state;
    }
  };