import "./App.css";
import MockAPI from "./mockAPI";
import { HeaderNavBar } from "./components/customComponents/HeaderNavBar";
import { Footer } from "./components/customComponents/Footer";
import {Main} from "./components/Main";
import { ProductListing } from "./components/ProductListing";
import { WishList } from "./components/Wishlist";
import { Cart } from "./components/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mockman" element={<MockAPI/>} />
      </Routes>
    </div>
  );
}

export default App;
