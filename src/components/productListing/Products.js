import { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { fetchProductsByCategory } from "../utils/requestUtils/ProductListingRequestUtils";


export const Products = ({category}) => {
    const [products, setProducts] = useState([]);
    const { cartState, dispatch, addToCartHandler} = useCart();
    const { wishlistState, addToWishlistHandler} = useWishlist();
    const {productsInCart} = cartState;
    const {productsInWishlist} = wishlistState;
    console.log(`Cart State in Products: ${JSON.stringify(cartState)}`);
    useEffect(() => {
        (async () => {
        const products = await fetchProductsByCategory(category);
        setProducts(products);
        })();
    },[])

    return <main>
            <div className="main-section">
                <div className="main-container flex-row-wrap-center">
                    {products.map(product => <div className="card-container card-icon-overlay-container">
                        <div className="card-wish-icon" onClick={()=> addToWishlistHandler(product)}><i className={"far fa-heart fa-2x " + (productsInWishlist.some(item => item._id === product._id)? 'icon-checked': 'icon-unchecked')}></i></div>
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
                           { productsInCart.some(item => item._id === product._id) ? <Link to={`/cart`}><button className="btn btn-secondary">Go to Cart</button></Link>:<button className="btn btn-secondary" id={product._id} onClick={() => addToCartHandler(product)}>Add to Cart</button>}
                        </div>
                    </div>)}
                </div>
            </div>
        </main>
}