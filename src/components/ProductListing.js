import { useParams } from "react-router";
import { Footer } from "./customComponents/Footer";
import { HeaderNavBar } from "./customComponents/HeaderNavBar";
import { Products } from "./productListing/Products";

export const ProductListing = () => {
    const { category } = useParams();
    return <div>
        <HeaderNavBar/>
            <Products category={category}/>
        {/* <Footer/> */}
        </div>
}