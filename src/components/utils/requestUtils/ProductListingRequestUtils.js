import { Config } from "../../../Config";
import { fetchData, RequestType } from "../../../services/APIHandler";

export const fetchProductsByCategory = async (categoryName) => {
    const url = `${Config.apiHost}/category/${categoryName}/products`
    console.log(url);
    const response = await fetchData(RequestType.GET, url);
    const products = response.products;
    return products;
}