import { Config } from "../../../Config";
import { fetchData, RequestType } from "../../../services/APIHandler";

export const fetchProducts = async () => {
    const url = `${Config.apiHost}/products`
    console.log(url);
    const response = await fetchData(RequestType.GET, url);
    const products = response.products;
    return products;
}