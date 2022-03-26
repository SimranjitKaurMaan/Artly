import "./App.css";
import MockAPI from "./mockAPI";
import {Main} from "./components/Main";
import { ProductListing } from "./components/ProductListing";
import { WishList } from "./components/Wishlist";
import { Cart } from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import { Product } from "./components/Product";
import { SignUp } from "./components/Signup";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:category" element={<ProductListing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<MockAPI/>} />
      </Routes>
    </div>
  );
}

export default App;
