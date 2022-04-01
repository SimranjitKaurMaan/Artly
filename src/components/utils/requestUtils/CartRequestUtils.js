import { Config as config } from "../../../Config";
import { fetchDataWithToken, postDataWithParams, postDataWithToken } from "../../../services/APIHandler";
import { RequestType } from "../../../services/APIHandler";

export const fetchCartItems = async () => {
    const url = `${config.apiHost}/user/cart`;
    const response = await fetchDataWithToken(RequestType.GET, url);
    return response.cart;
 }

 export const postToCart = async ({...product}) => {
   const url = `${config.apiHost}/user/cart`;
   const response = await postDataWithToken(RequestType.POST, url, {product});
   return response.cart;
 }

 export const deleteFromCart = async (productId) => {
  const url = `${config.apiHost}/user/cart`;
  const response = await postDataWithParams(RequestType.DELETE, url, productId);
  return response;
}

export const updateQuantityInCart = async (productId, {...action}) => {
  const url = `${config.apiHost}/user/cart/${productId}`;
  const response = await postDataWithToken(RequestType.POST, url, {action});
  return response.cart;
}