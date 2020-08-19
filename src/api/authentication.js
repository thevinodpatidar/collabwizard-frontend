// import url from "../config/apiendpoint";
import { baseURL } from "./baseurl";

export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = baseURL+'/signup';
  
  const parameters = {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin' : "*",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = baseURL+'/login';

  const parameters = {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin' : "*",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
};

  export const logoutUserService = (request) => {
  const LOGOUT_API_ENDPOINT = baseURL+'/logout';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*",
      'Authorization': 'Bearer ' +request.token
    },
  };

  return fetch(LOGOUT_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
};