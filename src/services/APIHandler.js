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
        console.log(`API Response: ${JSON.stringify(jsonResponse)}`);
        return jsonResponse;    
    } catch(error) {
       console.warn(`API error ${error}`);
       throw error;
    }
}