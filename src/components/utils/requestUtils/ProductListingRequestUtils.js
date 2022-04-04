import { Config as config} from "../../../Config";
import { fetchData, RequestType } from "../../../services/APIHandler";

export const fetchProductsByCategory = async (categoryName) => {
    const url = `${config.apiHost}/category/${categoryName}/products`;
    const response = await fetchData(RequestType.GET, url);
    const products = response.products;
    return products;
}

export const fetchProduct = async (productId) => {
    const url = `${config.apiHost}/products/${productId}`
    const response = await fetchData(RequestType.GET, url);
    const product = response.product;
    return product;
}