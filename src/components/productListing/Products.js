import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { useProductList } from "../../contexts/productlist-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { fetchProductsByCategory } from "../utils/requestUtils/ProductListingRequestUtils";


export const Products = ({category}) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const {productlistState, addToProductListHandler} = useProductList();
    const {cartState, addToCartHandler} = useCart();
    const {wishlistState, addToWishlistHandler} = useWishlist();
    const {products, filteredProducts} = productlistState;
    const {productsInCart} = cartState;
    const {productsInWishlist} = wishlistState;
    useEffect(() => {
        (async () => {
        const products = await fetchProductsByCategory(category);
        addToProductListHandler(products);
        })();
    },[]);

    return <main>
            <div className="main-section">
                <div className="main-container flex-row-wrap-center">
                    {filteredProducts.map(product => <div className="card-container card-icon-overlay-container">
                        <div className="card-wish-icon" onClick={()=> { isLoggedIn ? addToWishlistHandler(product) : navigate('/signup', {replace: true, state: {from : location}});}}><i className={(productsInWishlist.find( ({ _id }) => _id === product._id )? 'fas': 'far') + " fa-heart fa-2x "}></i></div>
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
                           { productsInCart.some(item => item._id === product._id) ? <button className="btn btn-secondary"><Link to={`/cart`}>Go to Cart</Link></button>:<button className="btn btn-secondary" id={product._id} onClick={() => {isLoggedIn ? addToCartHandler(product): navigate('/signup', {replace: true, state: {from : location}});}}>Add to Cart</button>}
                        </div>
                    </div>)}
                </div>
            </div>
        </main>
}