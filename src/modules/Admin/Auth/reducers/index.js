import * as types from '../actions/actionTypes';


export default function(state = {
      isAuthenticate : false,
      isLoading : false, 
      error : {},
      response : {}
}
, action) {
  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isAuthenticate : true, isLoading: true, response : response };
    case types.LOGIN_USER_ERROR:
      return { ...state, isLoading : false, error : response };
    case types.REGISTER_USER_SUCCESS:
      return { ...state, isLoading : true, response : response };
    case types.REGISTER_USER_ERROR:
      return { ...state, isLoading : false, error : response };
    case types.LOGOUT_USER_SUCCESS:
      return { ...state, isAuthenticate : false, response: response };
    case types.LOGOUT_USER_ERROR:
      return { ...state, isLoading : false,  error : response };
    default:
      return state;
  }
};