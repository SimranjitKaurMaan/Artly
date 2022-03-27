import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderNavBar } from "./customComponents/HeaderNavBar";
import { deleteFromCart, fetchCartItems } from "./utils/requestUtils/CartRequestUtils";

export const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        (async () => {
        const products = await fetchCartItems();
        console.log(`Cart: ${JSON.stringify(products.cart)}`)
        setCartProducts(products.cart);
        })();
    },[]);

    const DeleteFromCartHandler = async (event) => {
        const selectedProduct = cartProducts.find(product => product._id === event.target.id);
        const response = await deleteFromCart(selectedProduct._id);
        console.log(response);
     }
    return <>
    <HeaderNavBar/>
    <main>
            <div className="main-section">
                <div className="main-container flex-row-wrap-center">
                    {cartProducts.map(product => <div className="card-container card-icon-overlay-container">
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
                            <button className="btn btn-secondary" id={product._id} onClick={DeleteFromCartHandler}>Remove from Cart</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </main>
        </>
}