import { Config } from "../../../Config";
import { fetchDataWithToken, postDataWithParams, postDataWithToken } from "../../../services/APIHandler";
import { RequestType } from "../../../services/APIHandler";

export const fetchCartItems = async () => {
    const url = `${Config.apiHost}/user/cart`;
    console.log(url);
    const response = await fetchDataWithToken(RequestType.GET, url);
    console.log(response);
    return response;
 }

 export const postToCart = async ({...product}) => {
   const url = `${Config.apiHost}/user/cart`;
   console.log(url);
   const response = await postDataWithToken(RequestType.POST, url, {product});
   console.log(response);
   return response;
 }

 export const deleteFromCart = async (productId) => {
  const url = `${Config.apiHost}/user/cart`;
  console.log(url);
  const response = await postDataWithParams(RequestType.DELETE, url, productId);
  console.log(response);
  return response;
}