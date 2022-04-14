import { Routes, Route } from "react-router-dom";
import { Cart } from "../Cart";
import { Product } from "../Product";
import { ProductListing } from "../ProductListing";
import { WishList } from "../Wishlist";
import { SignUp } from "../Signup";
import {Login} from '../Login';
import { MockAPI } from "../../mockAPI";
import { Main } from "../Main";
import { RequiresAuth } from "../customComponents/RequiresAuth";

export const Router = () => {
    return (
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:category" element={<ProductListing />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/wishlist" element={<RequiresAuth><WishList /></RequiresAuth>} />
        <Route path="/cart" element={<RequiresAuth><Cart /></RequiresAuth>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    )
}