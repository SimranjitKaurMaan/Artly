import { useEffect, useState } from "react"
import { fetchCategories, fetchProductsImageUrlByCategory } from "../utils/requestUtils/HomeRequestUtils"

export const Collection = () => {
    const [categories , setCategories] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState({});
    useEffect(() => {
        (async () => {
        const categories = await fetchCategories();
        setCategories(categories);
        categories.map(async (category) => {
            const products = await fetchProductsImageUrlByCategory(category.categoryName);
            setCategoryProducts(c => ({...c, [category.categoryName]: products}));
        })
        })();
    },[])
    return (
    <div>
        <div className="collections-header">Collections</div>
        <div className="collections-container flex-row-wrap-center">
            { Object.keys(categoryProducts).length === categories.length && categories.map(category =>
            <div className="collection flex-col-wrap-start">
                <div className="grid-4">
                    <a href="./products-vertical.html"><img className="collection-left-top-img img-sm" src={categoryProducts[category.categoryName][0]} alt="artworks"/></a> 
                    <a href="./products-vertical.html"><img className="collection-right-top-img img-sm" src={categoryProducts[category.categoryName][1]} alt="artworks"/></a>
                    <a href="./products-vertical.html"><img className="collection-left-bottom-img img-sm" src={categoryProducts[category.categoryName][2]} alt="artworks"/></a>
                    <a href="./products-vertical.html"><img className="collection-right-bottom-img img-sm" src={categoryProducts[category.categoryName][3]} alt="artworks"/></a>
                </div>
                <div className="collection-header">{category.categoryName}</div>
                <div className="collection-subheader">{category.artworksCount} Artworks</div>
            </div>
            )}
        </div>
    </div>)
}