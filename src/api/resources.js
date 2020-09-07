// import url from "../config/apiendpoint";
import { baseURL } from "./baseurl";

export const addResourceService = (request) => {
  const API_ENDPOINT = baseURL+'/resource/private';
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
    .catch(error =>{ return error })
};

export const getPrivateArticlesService = (request) => {
  const API_ENDPOINT = baseURL+'/resource/private/articles';

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

export const getPrivateVideosService = (request) => {
  const API_ENDPOINT = baseURL+'/resource/private/videos';

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

export const getPublicResourceService = (request) => {
  console.log("req")
  const API_ENDPOINT = baseURL+'/resource/public';

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

export const searchResourceService = (request) => {
  const API_ENDPOINT = baseURL+'/resource/search?searchText='+request.searchText+'&resourceType='+request.resourceType;

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

export const filterResourceService = (request) => {
  const API_ENDPOINT = baseURL+'/resource/filter?category='+request.category+'&resourceType='+request.resourceType;

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

export const makeResourcePublicOrPrivateService = (request) => {
  const API_ENDPOINT = baseURL+'/resource/makeResourcePublicOrPrivate';
  console.log(request);

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*",
      'Authorization': 'Bearer '+request.token
    },
    body: JSON.stringify(request.data)
  };

  return fetch(API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    }).catch(error =>{ return error })
};

export const deleteResourceService = (request) => {
  const API_ENDPOINT = baseURL+'/resource/private/'+request.resourceId;

  const parameters = {
    method: 'DELETE',
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