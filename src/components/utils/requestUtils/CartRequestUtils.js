import { fetchData, postDataWithToken } from "../../../services/APIHandler";

export const fetchCart = async () => {
    const url = `${Config.apiHost}/user/cart`;
    console.log(url);
    const response = await fetchData(RequestType.GET, url);
    console.log(response);
    return response;
 }