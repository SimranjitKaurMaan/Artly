import { Config } from "../../../Config";
import { fetchData, RequestType, fetchDataWithParams } from "../../../services/APIHandler";

export const fetchCategories = async () => {
    const url = `${Config.apiHost}/categories`
    console.log(url);
    const response = await fetchData(RequestType.GET, url);
    const categories = response.categories;
    return categories;
}

export const fetchProducts = async () => {
    const url = `${Config.apiHost}/products`
    console.log(url);
    const response = await fetchData(RequestType.GET, url);
    const products = response.products;
    return products;
}

export const fetchProductsImageUrlByCategory = async (categoryName) => {
    const url = `${Config.apiHost}/category/${categoryName}/products`
    console.log(url);
    const response = await fetchData(RequestType.GET, url);
    const imageUrls = response.products.map(product => product.imageUrl);
    console.log(`fetchProductsImageUrlByCategory ${JSON.stringify(imageUrls)}`);
    return imageUrls;
}