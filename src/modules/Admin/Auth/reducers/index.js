import * as types from '../actions/actionTypes';


export default function(state = {
      isAuthenticate : false,
      isLoading : false, 
      signup: {
        error : {},
        response : {}
      },
      login : {
        error : {},
        response : {}
      },
      logout : {
        error : {},
        response : {}
      }
}
, action) {
  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isAuthenticate : true, isLoading: true, login : { response : response }};
    case types.LOGIN_USER_ERROR:
      return { ...state, isLoading : false,  login : { response : false, error : response }};
    case types.REGISTER_USER_SUCCESS:
      return { ...state, isLoading : true,  signup : {response : response } };
    case types.REGISTER_USER_ERROR:
      return { ...state, isLoading : false,  signup : {response : false, error : response } };
    case types.LOGOUT_USER_SUCCESS:
      return { ...state, isAuthenticate : false, logout : {response : response } };
    case types.LOGOUT_USER_ERROR:
      return { ...state, isLoading : false, logout : {response : false, error : response } };
    default:
      return state;
  }
};