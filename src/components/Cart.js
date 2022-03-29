import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/cart-context";
import { HeaderNavBar } from "./customComponents/HeaderNavBar";
import { deleteFromCart, fetchCartItems } from "./utils/requestUtils/CartRequestUtils";

export const Cart = () => {
    //const [cartProducts, setCartProducts] = useState([]);
    // useEffect(() => {
    //     (async () => {
    //     const products = await fetchCartItems();
    //     console.log(`Cart: ${JSON.stringify(products.cart)}`)
    //     setCartProducts(products.cart);
    //     })();
    // },[]);
    // const DeleteFromCartHandler = async (event) => {
    //     const selectedProduct = cartProducts.find(product => product._id === event.target.id);
    //     const response = await deleteFromCart(selectedProduct._id);
    //     console.log(response);
    //  }

    const { state , dispatch } = useCart();
    const {itemsInCart} = state;
    console.log(`itemsInCart: ${JSON.stringify(itemsInCart)}`);
    return <>
    <HeaderNavBar/>
    <main>
            <div className="main-section">
                <div className="main-container flex-row-wrap-center">
                    {itemsInCart.map(product => 
                        <div className="card-container">
                                <div className="card-body card-body-compact">
                                    <div className="card-img-20w">
                                        <img src={product.imageUrl} alt="painting" sizes="(min-width: 600px) 200px,100px"/>
                                    </div>
                                    <div className="card-content-aside card-hz-content-aside">
                                            <div className="card-title">{product.title}</div>
                                            <div className="card-hz-subtitles">
                                                <div className="card-subtitle">${product.price}</div>
                                            </div>
                                            <div>
                                                <label className="quantity">Quantity: </label>    
                                                <button className="btn btn-primary" onClick={() => dispatch({type: 'INCREMENT_QTY_IN_CART', payload: product})}>+</button>
                                                <button className="btn btn-secondary" onClick={() => dispatch({type: 'DECREMENT_QTY_IN_CART', payload: product})}>-</button>
                                            </div>
                                            <div className="card-hz-actions">
                                                <button className="btn btn-primary" onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: product})}>Remove From Cart</button>
                                                <button className="btn btn-secondary" onClick={() => dispatch({type: 'ADD_TO_WISHLIST', payload: product})}>Move to Wishlist</button>
                                            </div>
                                    </div>
                               </div>
                        </div>)}
                </div>
            </div>
        </main>
        </>
}