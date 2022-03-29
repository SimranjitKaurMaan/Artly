import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./contexts/cart-context";



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <Router>
      <App />
    </Router>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
