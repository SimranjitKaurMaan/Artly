import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./contexts/cart-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { ProductlistProvider } from "./contexts/productlist-context";




// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductlistProvider>
    <WishlistProvider>
    <CartProvider>
    <Router>
      <App />
    </Router>
    </CartProvider>
    </WishlistProvider>
    </ProductlistProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
