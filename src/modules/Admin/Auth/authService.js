export const registerUserService = (request) => {
    const REGISTER_API_ENDPOINT = 'http://localhost:4000/api/signup';
    
    const parameters = {
      method: 'POST',
      headers: {
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
    const LOGIN_API_ENDPOINT = 'http://localhost:4000/api/login';
  
    const parameters = {
      method: 'POST',
      headers: {
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
    const LOGOUT_API_ENDPOINT = 'http://localhost:4000/api/logout';
  
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + request.token
      },
      body: JSON.stringify(request.token)
    };
  
    return fetch(LOGOUT_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
  };