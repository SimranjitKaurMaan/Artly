export const EmptyCart = () => {
    return <div className="empty-cart-container">
            <img className="img hero-img" src="https://res.cloudinary.com/duddwta8d/image/upload/v1650109226/cart-empty_pr5rey.png"></img>
            <div className="empty-cart-content">
                <h2>Your Shopping Cart is Empty :(</h2>
                <div>There is nothing in your bag.Let's add some items.</div>
            </div>
        </div>
}