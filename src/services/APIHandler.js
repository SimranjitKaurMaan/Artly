import { toast } from "react-toastify";

export const RequestType = {
    GET : 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

/**
 * Fetches data from API 
 * @param {HTTP Request Type} requestType 
 * @param {The name of API to be called to fetch data} apiName 
 * @returns {response from the API}
 */
export const fetchData = async (requestType, apiName) => {
    const headers = {
        Accept: 'application/json'
    }
    try
    {
        const response =  await fetch(apiName, {
                method: requestType,
                headers
            })
        const jsonResponse = await response.json();
        return jsonResponse;    
    } catch(error) {
       toast.error(`Error while fetching data ${error}`);
       throw error;
    }
}

/**
 * Fetches data from API 
 * @param {HTTP Request Type} requestType
 * @param {Param object to pass} paramData
 * @param {The url of API to be called to fetch data} apiUrl 
 * @returns {response from the API}
 */
 export const fetchDataWithParamsWithToken = async (requestType, apiUrl, paramData) => {
    const encodedToken = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
    const headers = {
        Accept: 'application/json',
        authorization: encodedToken
    }
    try
    {
        const response =  await fetch(`${apiUrl}?${toQueryString(paramData)}`, {
                method: requestType,
                headers
            })
        const jsonResponse = await response.json();
        return jsonResponse;    
    } catch(error) {
        toast.error(`Error while fetching data ${error}`);
       throw error;
    }
}

const toQueryString = (obj) => {
   const queryString =  Object.keys(obj)
    .sort()
    .map(key => {
        const val = obj[key];
        return `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
    }).join('&');
  return queryString;  
}

/**
 * Post data to API 
 * @param {HTTP Request Type} requestType
 * @param {Param object to pass} paramData
 * @param {The url of API to be called to post data} apiUrl 
 * @returns {response from the API}
 */
 export const postDataWithParams = async (requestType, apiUrl, paramData) => {
    const encodedToken = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
    const headers = {
        Accept: 'application/json',
        authorization: encodedToken
    }
    try
    {
        const response =  await fetch(`${apiUrl}/${paramData}`, {
                method: requestType,
                headers
            })
        const jsonResponse = await response.json();
        return jsonResponse;    
    } catch(error) {
        toast.error(`Error while posting data ${error}`);
       throw error;
    }
}

export const postData = async (requestType, apiUrl, data) => {
    const headers = {
        Accept: 'application/json'
    }
    try
    {
        const response =  await fetch(apiUrl, {
                method: requestType,
                headers,
                body: JSON.stringify(data)
            })
        const jsonResponse = await response.json();
        return jsonResponse;    
    } catch(error) {
        toast.error(`Error while posting data ${error}`);
       throw error;
    }
}

export const postDataWithToken = async (requestType, apiUrl, data) => {
    const encodedToken = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
    const headers = {
        Accept: 'application/json',
        authorization: encodedToken
    }
    try
    {
        const response =  await fetch(apiUrl, {
                method: requestType,
                headers,
                body: JSON.stringify(data)
            })
        const jsonResponse = await response.json();
        return jsonResponse;    
    } catch(error) {
        toast.error(`Error while posting data ${error}`);
       throw error;
    }
}

export const fetchDataWithToken = async (requestType, apiUrl) => {
    const encodedToken = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
    const headers = {
        Accept: 'application/json',
        authorization: encodedToken
    }
    try
    {
        const response =  await fetch(apiUrl, {
                method: requestType,
                headers
            })
        const jsonResponse = await response.json();
        return jsonResponse;    
    } catch(error) {
        toast.error(`Error while fetching data ${error}`);
       throw error;
    }
}