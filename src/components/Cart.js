import { toast } from 'react-toastify';
import { useCart } from "../contexts/cart-context";
import { useWishlist } from "../contexts/wishlist-context";
import { EmptyCart } from "./customComponents/EmptyCart";

export const Cart = () => {
    const { cartState , incrementCartItemHandler, decrementCartItemHandler, deleteFromCartHandler} = useCart();
    const { wishlistState, addToWishlistHandler, deleteFromWishlistHandler} = useWishlist();
    const {productsInCart, totalPrice } = cartState;
    const {productsInWishlist} = wishlistState;
    const totalDiscount = totalPrice*0.2;
    const deliveryCharges = totalPrice*0.05;
    const amountToPay = totalPrice - totalDiscount + deliveryCharges;

    return <>
    <main>
            <div className="flex-col-wrap-center">
            <h1 className="highlight-text">Cart</h1>
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
                                                    <label className="quantity">Quantity:</label>    
                                                    <button className="btn btn-secondary btn-outlined btn-sm" disabled={product.qty < 2} onClick={() => decrementCartItemHandler(product)}>-</button>
                                                    {<span className="text-product-qty">{product.qty}</span>}
                                                    <button className="btn btn-primary btn-outlined btn-sm" onClick={() => incrementCartItemHandler(product)}>+</button>
                                                </div>
                                                <div className="card-hz-actions">
                                                    <button className="btn btn-primary" onClick={() => deleteFromCartHandler(product)}>Remove From Cart</button>
                                                    { productsInWishlist.some(item => item._id === product._id) ? <button className="btn btn-secondary" onClick={() => deleteFromWishlistHandler(product)}>Remove from Wishlist</button>:<button className="btn btn-secondary" onClick={() => addToWishlistHandler(product)}>Move to Wishlist</button>}
                                                </div>
                                        </div>
                                </div>
                            </div>)}
                    </div>
                    {productsInCart.length !== 0 ?
                    <div className="card-container price-container">
                        <div className="price-container-header">PRICE DETAILS</div>
                        <div className="amount-container flex-row-wrap-space-between">
                            <div>Price ({productsInCart.length} Items)</div>
                            <div>${totalPrice}</div>
                        </div>
                        <div className="amount-container flex-row-wrap-space-between">
                            <div>Discount</div>
                            <div>-${totalDiscount}</div>
                        </div>
                        <div className="amount-container flex-row-wrap-space-between">
                            <div>Delivery Charges</div>
                            <div>+${deliveryCharges}</div>
                        </div>
                        <div className="amount-container total-amount-container flex-row-wrap-space-between">
                            <div>TOTAL AMOUNT</div>
                            <div>${amountToPay}</div>
                        </div>
                        <div className="amount-container">You will save ${totalDiscount} on this order</div>
                        <button className="btn btn-primary" onClick={() => toast.success("Order is placed successfully.")}>Place Order</button>
                    </div> : <EmptyCart/>}
                </div>
            </div>
        </main>
        </>
}