import * as types from "./actionTypes";

export const registerUserAction = (user) => {
    return {
      type: types.REGISTER_USER,
      user
    }
  };
  
  export const loginUserAction = (user) => {
    return {
      type: types.LOGIN_USER,
      user
    }
  };

  export const logoutUserAction = (token) =>{
    return {
        type : types.LOGOUT_USER,
        token
    }
  }