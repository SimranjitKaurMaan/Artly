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
    console.log(filteredItems);
    return filteredItems;
} 

export const handleFilterByArtist = ( items, {artists}) => {
    console.log(`artists: ${artists}`);
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
const {
    products,
    sortBy,
    rating,
    artists
} = state;
const composedFunctions = functionalChaining(
    { sortBy, rating },
    handleSortByPrice,
    handleFilterByRating
);

const updatedList = composedFunctions(products);
return updatedList;
};