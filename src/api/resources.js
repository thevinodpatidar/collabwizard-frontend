import url from "../config/apiendpoint";

export const addResourceService = (request) => {
  const API_ENDPOINT = url.local+'/resource';
  // console.log("req",request.resource);
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*",
      'Authorization': 'Bearer ' +request.token
    },
    body: JSON.stringify(request.resource.values)
  };

  return fetch(API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const getResourceService = (request) => {
  const API_ENDPOINT = url.local+'/resource';

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
    })
};