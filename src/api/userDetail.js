import url from "../config/apiendpoint";


export const getUserDetailService = (request) => {
    const API_ENDPOINT = url.development+'/user';
  
    const parameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : "*",
        'Authorization': 'Bearer '+request.token
      },
      // body: JSON.stringify(request.resource.values)
    };
  
    return fetch(API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      }).catch(error =>{ return error })
  };