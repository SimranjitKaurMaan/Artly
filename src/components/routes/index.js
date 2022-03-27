import { Routes, Route } from "react-router-dom";
import { Cart } from "../Cart";
import { Product } from "../Product";
import { ProductListing } from "../ProductListing";
import { WishList } from "../Wishlist";
import { SignUp } from "../Signup";
import {Login} from '../Login';
import { MockAPI } from "../../mockAPI";
import { Main } from "../Main";

export const Router = () => {
    return (
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:category" element={<ProductListing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    )
}