import { useCart } from "../contexts/cart-context";
import { HeaderNavBar } from "./customComponents/HeaderNavBar";

export const Cart = () => {
    const { state , dispatch } = useCart();
    const {productsInCart, totalPrice } = state;
    console.log(`state in cart: ${JSON.stringify(state)}`);
    return <>
    <HeaderNavBar/>
    <main>
            <div className="main-section">
                <div className="main-container flex-row-wrap-center">
                    <div className="flex-col-wrap-center">
                        {productsInCart.map(product => 
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
                                                    <label className="quantity">Quantity: {product.qty}</label>    
                                                    <button className="btn btn-primary btn-outlined" onClick={() => dispatch({type: 'INCREMENT_QTY_IN_CART', payload: product})}>+</button>
                                                    <button className="btn btn-secondary btn-outlined" onClick={() => dispatch({type: 'DECREMENT_QTY_IN_CART', payload: product})}>-</button>
                                                </div>
                                                <div className="card-hz-actions">
                                                    <button className="btn btn-primary" onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: product})}>Remove From Cart</button>
                                                    <button className="btn btn-secondary" onClick={() => dispatch({type: 'ADD_TO_WISHLIST', payload: product})}>Move to Wishlist</button>
                                                </div>
                                        </div>
                                </div>
                            </div>)}
                    </div>
                    <div className="card-container price-container">
                        <div className="price-container-header">PRICE DETAILS</div>
                        <div className="amount-container flex-row-wrap-space-between">
                            <div>Price (Items)</div>
                            <div>${totalPrice}</div>
                        </div>
                        <div className="amount-container flex-row-wrap-space-between">
                            <div>Discount</div>
                            <div>${totalPrice*0.1}</div>
                        </div>
                        <div className="amount-container flex-row-wrap-space-between">
                            <div>Delivery Charges</div>
                            <div>${totalPrice*0.05}</div>
                        </div>
                        <div className="amount-container total-amount-container flex-row-wrap-space-between">
                            <div>TOTAL AMOUNT</div>
                            <div>${totalPrice}</div>
                        </div>
                        <div className="amount-container">You will save ${totalPrice} on this order</div>
                        <button className="btn btn-primary">Place Order</button>
                    </div>
                </div>
            </div>
        </main>
        </>
}