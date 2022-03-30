import { Config as config } from "../../../Config";
import { fetchDataWithToken, postData, postDataWithParams, postDataWithToken } from "../../../services/APIHandler";
import { RequestType } from "../../../services/APIHandler";

export const fetchCartItems = async () => {
    const url = `${config.apiHost}/user/cart`;
    console.log(url);
    const response = await fetchDataWithToken(RequestType.GET, url);
    console.log(`fetchCartItems: ${JSON.stringify(response)}`);
    return response;
 }

 export const postToCart = async ({...product}) => {
   const url = `${config.apiHost}/user/cart`;
   console.log(url);
   const response = await postDataWithToken(RequestType.POST, url, {product});
   console.log(`postToCart: ${JSON.stringify(response)}`);
   return response;
 }

 export const deleteFromCart = async (productId) => {
  const url = `${config.apiHost}/user/cart`;
  console.log(url);
  const response = await postDataWithParams(RequestType.DELETE, url, productId);
  console.log(`deleteFromCart: ${JSON.stringify(response)}`);
  return response;
}

export const updateQuantityInCart = async (productId, {...action}) => {
  const url = `${config.apiHost}/user/cart/${productId}`;
  console.log(url);
  const response = await postDataWithParams(RequestType.POST, url, {action});
  console.log(`updateQuantityInCart: ${JSON.stringify(response)}`);
  return response;
}