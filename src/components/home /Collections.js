import { useEffect, useState } from "react"
import { fetchProducts } from "../utils/requestUtils/HomeRequestUtils"

export const Collection = () => {
    const [products , setProducts] = useState([]);
    useEffect(() => {
        (async () => {
        const products = await fetchProducts();
        console.log("inside collection ",JSON.stringify(products));
        setProducts(products);
        })();
    },[])
    return <><div>Collection</div>
    {products.map((product)=><div key={product.id}>{product.title}</div>)}</>
}