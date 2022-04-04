import { useProductList } from "../../contexts/productlist-context";

export const Filter = () => {
    const {productlistState, sortByHandler, filterByArtistHandler, filterByRatingHandler, filterByPriceHandler, clearFilters} = useProductList();
    const {products, minPrice, maxPrice, sortBy, rating , artists, priceLimit} = productlistState;
    const distinctArtists = products.reduce((acc, { artist }) => (acc.includes(artist) ? acc : [...acc, artist]),[]);

    return (<aside>
    <div className="filter-container">
        <div className="filter-header">
            <h2>Filters</h2>
            <button className="btn btn-link" onClick={() => clearFilters()}>Clear</button>
        </div>
        <div className="slider-price-container flex-col-wrap-start">
            <h2>Price</h2>
            <span className="check-group"><input className="price-slider" type="range" name="price-range" value={priceLimit} min={minPrice} max={maxPrice} list="tickmarks" step="100" onChange={(e) => { const priceLimit = e.target.value; filterByPriceHandler(priceLimit)}}></input><label className="check-group-label">${priceLimit}</label></span>
        </div>
        <div className="category-container flex-col-wrap-start">
            <h2>Artist</h2>
            {distinctArtists.map( artist =>
            <span className="check-group">
                <input type="checkbox" name="category" checked={artists.includes(artist)} onChange={() => filterByArtistHandler(artist)}></input><label className="check-group-label">{artist}</label>
            </span>)}
            
        </div>
        <div className="rating-container flex-col-wrap-start">
            <h2>Rating</h2>
            {[4,3,2,1].map((_,index)=>{
                 return <span className="check-group"><input type="radio" name="rating" checked={rating === index+1} onChange={() => filterByRatingHandler(index+1)}></input><label className="check-group-label">{index+1} Stars & above</label></span>
            })}
        </div>
        <div className="sortby-container flex-col-wrap-start">
            <h2>Sort by</h2>
            <span className="check-group"><input type="radio" name="sort-by" checked={sortBy === 'ascending'} onChange={() => sortByHandler('ascending')}></input><label className="check-group-label">Price - Low to High</label></span>
            <span className="check-group"><input type="radio" name="sort-by"checked={sortBy === 'descending'} onChange={() => sortByHandler('descending')}></input><label className="check-group-label">Price - High to Low</label></span>
        </div>
    </div>
</aside>)
}