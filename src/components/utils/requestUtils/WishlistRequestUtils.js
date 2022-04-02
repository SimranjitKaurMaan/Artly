import { Config as config } from "../../../Config";
import { fetchDataWithToken, postDataWithToken, postDataWithParams } from "../../../services/APIHandler";
import { RequestType } from "../../../services/APIHandler";

export const fetchWishlistItems = async () => {
    const url = `${config.apiHost}/user/wishlist`;
    console.log(url);
    const response = await fetchDataWithToken(RequestType.GET, url);
    console.log(`fetchWishlistItems: ${JSON.stringify(response)}`);
    return response.wishlist;
 }

export const postToWishlist = async ({...product}) => {
    const url = `${config.apiHost}/user/wishlist`;
    console.log(url);
    const response = await postDataWithToken(RequestType.POST, url, {product});
    console.log(`postToWishlist: ${JSON.stringify(response)}`);
    return response.wishlist;
  }

  export const deleteFromWishlist = async (productId) => {
    const url = `${config.apiHost}/user/cart`;
    console.log(url);
    const response = await postDataWithParams(RequestType.DELETE, url, productId);
    console.log(`deleteFromWishlist: ${JSON.stringify(response)}`);
    return response;
  }