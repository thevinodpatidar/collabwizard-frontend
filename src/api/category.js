// import url from "../config/apiendpoint";
import { baseURL } from "./baseurl";

export const addCategoryService = (request) => {
  const API_ENDPOINT = baseURL+'/categories';
  console.log("req",request.category);
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*",
      'Authorization': 'Bearer ' +request.token
    },
    body: JSON.stringify(request.category)
  };

  return fetch(API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .catch(error =>{ return error })
};

export const getCategoryService = (request) => {
  const API_ENDPOINT = baseURL+'/categories';

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*",
      'Authorization': 'Bearer '+request.token
    },
    // body: JSON.stringify(request.Category.values)
  };

  return fetch(API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    }).catch(error =>{ return error })
};

export const deleteCategoryService = (request) => {
  console.log(request.categoryId)
  const API_ENDPOINT = baseURL+'/categories/'+request.categoryId;

  const parameters = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*",
      'Authorization': 'Bearer '+request.token
    },
    // body: JSON.stringify(request.Category.values)
  };

  return fetch(API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    }).catch(error =>{ return error })
};