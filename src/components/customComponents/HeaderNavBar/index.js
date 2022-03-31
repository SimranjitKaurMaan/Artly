import {Link} from 'react-router-dom';
import { useCart } from '../../../contexts/cart-context';

export const HeaderNavBar = () => {
    const { state } = useCart();
    const {productsInCart} = state;
    return <><header>
    <div className="logo-container">
        <Link to="/">
            <h1>Artly<span className="logo-text">Store</span></h1>
        </Link>
    </div>
    <div className="search-wrapper">
        <form>
            <input type="text" name="search-bar" id="search-bar" placeholder="Search"/>
        </form>
        <i className="fa fa-search fa-2x highlight-text"></i>
    </div>
    <Link className="btn btn-primary btn-header-login" to="/login">Login</Link>
    <div className="header-nav">
        <nav>
            <ul>
                <li>
                    <div className="badge-container">
                        <span className="badge badge-md badge-text">0</span>
                        <Link to="/wishlist"> 
                            <img className="img-xs" src="https://res.cloudinary.com/duddwta8d/image/upload/v1648081716/heart_vhmlcf.svg" alt="wishlist"/>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="badge-container">
                        <span className="badge badge-md badge-text">{productsInCart.length}</span>
                        <Link to="/cart">
                            <img className="img-xs" src="https://res.cloudinary.com/duddwta8d/image/upload/v1648081714/cart_hxnyvn.svg" alt="shopping-cart"/>
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
        <Link to="/" className="user">
            <img className="avatar avatar-md rounded" src="https://res.cloudinary.com/duddwta8d/image/upload/v1648081722/avatar-1_q0h9ko.jpg" alt="avatar"/>
        </Link>
    </div>
</header></>
}