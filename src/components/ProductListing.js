import { useParams } from "react-router";
import { HeaderNavBar } from "./customComponents/HeaderNavBar";
import { Filter } from "./productListing/Filter";
import { Products } from "./productListing/Products";

export const ProductListing = () => {
    const { category } = useParams();
    return <div className="wrapper">
            <Products category={category}/>
            <Filter/>
        </div>    
}