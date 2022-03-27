import { Config } from "../../../Config";
import { postData, postDataWithToken } from "../../../services/APIHandler";
import { RequestType } from "../../../services/APIHandler";

export const signupUser = async ({...userData}) => {
    const url = `${Config.apiHost}/auth/signup`
    console.log(url);
    const response = await postData(RequestType.POST, url, userData );
    return response;
}

export const loginUser = async ({...userData}) => {
    const url = `${Config.apiHost}/auth/login`
    console.log(url);
    const encodedToken = localStorage.getItem("_login_id");
    const response = await postDataWithToken(RequestType.POST, url, userData, encodedToken );
    return response;
}