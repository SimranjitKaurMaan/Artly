import { Config } from "../../../Config";
import { fetchData, RequestType } from "../../../services/APIHandler";

export const fetchProductsByCategory = async (categoryName) => {
    const url = `${Config.apiHost}/category/${categoryName}/products`
    console.log(url);
    const response = await fetchData(RequestType.GET, url);
    const products = response.products;
    return products;
}


export const fetchProduct = async (productId) => {
    const url = `${Config.apiHost}/products/${productId}`
    console.log(url);
    const response = await fetchData(RequestType.GET, url);
    const product = response.product;
    return product;
}