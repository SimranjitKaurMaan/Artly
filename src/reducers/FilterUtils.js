export const handleSortByPrice = (items, { sortBy }) => {
    switch (sortBy) {
      case "ascending":
        return items.sort(
          (firstItem, secondItem) => firstItem.price - secondItem.price
        );
      case "descending":
        return items.sort(
          (firstItem, secondItem) => secondItem.price - firstItem.price
        );
      default:
        return items;
    }
  };

export const handleFilterByRating = ( items , {rating}) =>  {
    const filteredItems = items.filter(product => product.rating >= rating);
    return filteredItems;
} 

export const handleFilterByPrice = ( items , {priceLimit}) =>  {
    const filteredItems = items.filter(product => product.price <= priceLimit);
    return filteredItems;
} 

export const handleFilterByArtist = ( items, {artists}) => {
    // console.log(` handleFilterByArtist items: ${JSON.stringify(items)}`)
    // console.log(` handleFilterByArtist artists: ${artists}`);
    const filteredItems = items.filter(product => artists.includes(product.artist));
    return filteredItems;
}

const functionalChaining =
(filterParams, ...functions) =>
(products) => {
    return functions.reduce(
    (accum, curr) => curr(accum, filterParams),
    products
    );
};

export const applyFilterAndSorts = (state) => {
  const { products, sortBy, rating, artists, priceLimit } = state;
  const composedFunctions = functionalChaining(
      { sortBy, rating, artists, priceLimit },
      handleSortByPrice,
      handleFilterByRating,
      handleFilterByArtist,
      handleFilterByPrice
  );

 const updatedList = composedFunctions(products);
 return updatedList;
};