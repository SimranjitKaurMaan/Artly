import { useEffect, useState } from "react";
import { useProductList } from "../../contexts/productlist-context";

export const Filter = () => {
    const {productlistState, sortByHandler, filterByArtistHandler, filterByRatingHandler, clearFilters} = useProductList();
    const {products, minPrice, maxPrice} = productlistState;
    const [artists , setArtists] = useState([]);

    useEffect(() => {
      const artists = products.map(product => product.artist);  
      setArtists([...new Set(artists)]);
    },[products]);

    return (<aside>
    <div className="filter-container">
        <div className="filter-header">
            <h2>Filters</h2>
            <button className="btn btn-link" onClick={() => clearFilters()}>Clear</button>
        </div>
        <div className="slider-price-container">
            <h2>Price</h2>
            <input className="price-slider" type="range" name="price-range" min={minPrice} max={maxPrice}></input>
        </div>
        <div className="category-container flex-col-wrap-start">
            <h2>Artist</h2>
            {artists.map( artist =>
            <span className="check-group">
                <input type="checkbox" name="category" onChange={() => filterByArtistHandler(artist)}></input><label className="check-group-label">{artist}</label>
            </span>)}
            
        </div>
        <div className="rating-container flex-col-wrap-start">
            <h2>Rating</h2>
            <span className="check-group"><input type="radio" name="rating" onChange={() => filterByRatingHandler(4)}></input><label className="check-group-label">4 Stars & above</label></span>
            <span className="check-group"><input type="radio" name="rating" onChange={() => filterByRatingHandler(3)}></input><label className="check-group-label">3 Stars & above</label></span>
            <span className="check-group"><input type="radio" name="rating" onChange={() => filterByRatingHandler(2)}></input><label className="check-group-label">2 Stars & above</label></span>
            <span className="check-group"><input type="radio" name="rating" onChange={() => filterByRatingHandler(1)}></input><label className="check-group-label">1 Stars & above</label></span>
        </div>
        <div className="sortby-container flex-col-wrap-start">
            <h2>Sort by</h2>
            <span className="check-group"><input type="radio" name="sort-by" onChange={() => sortByHandler('ascending')}></input><label className="check-group-label">Price - Low to High</label></span>
            <span className="check-group"><input type="radio" name="sort-by" onChange={() => sortByHandler('descending')}></input><label className="check-group-label">Price - High to Low</label></span>
        </div>
    </div>
</aside>)
}