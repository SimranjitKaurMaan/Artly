import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./contexts/cart-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { ProductlistProvider } from "./contexts/productlist-context";
import { AuthProvider } from "./contexts/auth-context";




// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <ProductlistProvider>
    <WishlistProvider>
    <CartProvider>
    <Router>
      <App />
    </Router>
    </CartProvider>
    </WishlistProvider>
    </ProductlistProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
