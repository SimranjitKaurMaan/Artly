import { Link } from "react-router-dom";
import { useWishlist } from "../contexts/wishlist-context";
import { useCart } from "../contexts/cart-context";
import { HeaderNavBar } from "./customComponents/HeaderNavBar";

export const WishList = () => {
    const {wishlistState, deleteFromWishlistHandler} = useWishlist();
    const {state, addToCartHandler} = useCart();
    const {productsInCart} = state;
    const { productsInWishlist } = wishlistState;
    return <div className="wishlist-wrapper">
            <HeaderNavBar/>
            <main>
                <div className="flex-col-wrap-center">
                    <h1 className="highlight-text">My Wishlist</h1>
                    <div className="main-container flex-row-wrap-center">
                        {productsInWishlist.map(product => <div className="card-container card-icon-overlay-container">
                            <span className="card-wish-icon"><i className="fas fa-heart fa-2x icon-checked"></i></span>
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
                                <button className="btn btn-secondary" onClick={()=> deleteFromWishlistHandler(product)}>Remove From Wishlist</button>
                                { productsInCart.some(item => item._id === product._id) ? <Link to={`/cart`}><button className="btn btn-secondary">Go to Cart</button></Link>:<button className="btn btn-secondary" id={product._id} onClick={() => addToCartHandler(product)}>Add to Cart</button>}
                            </div>
                        </div>)}
                    </div>
                </div>                
            </main>
        </div>
}