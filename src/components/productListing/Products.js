import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProductsByCategory } from "../utils/requestUtils/ProductListingRequestUtils";


export const Products = ({category}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
        const products = await fetchProductsByCategory(category);
        setProducts(products);
        })();
    },[])

    return <>
        <div>Category: {category}</div>
        <main>
            <div class="main-section">
                <div class="main-container flex-row-wrap-center">
                    {products.map(product => <Link to={`/product/${product._id}`}><div className="card-container card-icon-overlay-container">
                        <div className="card-wish-icon"><i className="far fa-heart fa-2x icon-unchecked"></i></div>
                        <div className="card-body card-vertical-body">
                            <img className="card-img card-vertical-img" alt="painting" src={product.imageUrl} sizes="(min-width: 600px) 200px,100px"/>
                            <div className="card-content-aside flex-col-wrap-start">
                                <div className="card-title">{product.title}</div>
                                <div className="card-subtitle">Artist: {product.artist}</div>
                                <div className="flex-row-wrap-start">
                                <div className="card-subtitle">${product.price} &nbsp;|&nbsp;</div> 
                                <div className="card-subtitle"><i className="fa fa-star icon-checked">&nbsp;{product.rating}</i></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-secondary">Go to Cart</button>
                        </div>
                    </div></Link>)}
                </div>
            </div>
        </main>
    </>
}