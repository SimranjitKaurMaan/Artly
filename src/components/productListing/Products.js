import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";
import { postToCart } from "../utils/requestUtils/CartRequestUtils";
import { fetchProductsByCategory } from "../utils/requestUtils/ProductListingRequestUtils";


export const Products = ({category}) => {
    const { state, dispatch} = useCart();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
        const products = await fetchProductsByCategory(category);
        setProducts(products);
        })();
    },[])

    // const AddToCartHandler = async (event) => {
    //    const selectedProduct = products.find(product => product._id === event.target.id);
    //    const response = await postToCart(selectedProduct);
    //    console.log(response);
    // }
    return <main>
            <div className="main-section">
                <div className="main-container flex-row-wrap-center">
                    {products.map(product => <div className="card-container card-icon-overlay-container">
                        <div className="card-wish-icon"><i className="far fa-heart fa-2x icon-unchecked"></i></div>
                        <Link to={`/product/${product._id}`}>
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
                        </Link>
                        <div className="card-footer">
                            <button className="btn btn-secondary" id={product._id} onClick={() => dispatch({ type: "ADD_TO_CART", payload: product})}>Add to Cart</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </main>
}