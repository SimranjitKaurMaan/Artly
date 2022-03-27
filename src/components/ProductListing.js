import { useParams } from "react-router";

export const ProductListing = () => {
    const { category } = useParams();
    return <div>ProductListing for {category}</div>
}