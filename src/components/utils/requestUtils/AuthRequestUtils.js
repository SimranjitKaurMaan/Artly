import { Config } from "../../../Config";
import { postData } from "../../../services/APIHandler";
import { RequestType } from "../../../services/APIHandler";

export const signupUser = async ({...userData}) => {
    const url = `${Config.apiHost}/auth/signup`
    console.log(url);
    const response = await postData(RequestType.POST, url, userData );
    const user = response;
    return user;
}