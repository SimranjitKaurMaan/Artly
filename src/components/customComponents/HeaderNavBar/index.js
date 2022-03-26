export const HeaderNavBar = () => {
    return <><header>
    <div className="logo-container">
        <a href="./index.html">
            <h1>Artly<span className="logo-text">Store</span></h1>
        </a>
    </div>
    <div className="search-wrapper">
        <form>
            <input type="text" name="search-bar" id="search-bar" placeholder="Search"/>
        </form>
        <i class="fa fa-search fa-2x highlight-text"></i>
    </div>
    <a className="btn btn-primary btn-header-login" href="./login.html">Login</a>
    <div className="header-nav">
        <nav>
            <ul>
                <li>
                    <div className="badge-container">
                        <span className="badge badge-md badge-text">1</span>
                        <a href="./wishlist.html"> 
                            <img className="img-xs" src="https://res.cloudinary.com/duddwta8d/image/upload/v1648081716/heart_vhmlcf.svg" alt="wishlist"/>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="badge-container">
                        <span className="badge badge-md badge-text">11</span>
                        <a href="./cart.html">
                            <img className="img-xs" src="https://res.cloudinary.com/duddwta8d/image/upload/v1648081714/cart_hxnyvn.svg" alt="shopping-cart"/>
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
        <a href="#" className="user">
            <img className="avatar avatar-md rounded" src="https://res.cloudinary.com/duddwta8d/image/upload/v1648081722/avatar-1_q0h9ko.jpg" alt="avatar"/>
        </a>
    </div>
</header></>
}