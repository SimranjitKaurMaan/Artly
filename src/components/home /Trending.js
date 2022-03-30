import { useState , useEffect} from "react";
import {Link} from 'react-router-dom';

import { fetchProducts } from "../utils/requestUtils/HomeRequestUtils";

export const Trending = () => {
    const [trendingProducts , setTrendingProducts] = useState([]);
    useEffect(() => {
        (async () => {
        const products = await fetchProducts();
        //console.log("inside trending ",JSON.stringify(products));
        const trendingProducts = products.filter(product => product.rating > 4)
        setTrendingProducts(trendingProducts);
        })();
    },[])
    return <>
    <div className="collections-header">Trending</div>
    <div className="collections-container flex-row-wrap-center">
        {
            trendingProducts.map((product)=>
            <>
                <div className="collection flex-col-wrap-start">
                    <div className="trending-img-container">
                        <Link to={`/product/${product._id}`}><img className="img-10" src={product.imageUrl} alt="artworks"/></Link>
                        <div className="collection-header">{product.categoryName}</div>
                    </div>
                </div>
            </>)
        }
    </div>
    </>
}