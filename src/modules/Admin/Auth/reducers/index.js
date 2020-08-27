import * as types from '../actions/actionTypes';


export default function(state = {
      isAuthenticate : false,
      isLoading : false, 
      signup: {
        error : {},
        response : {success:false}
      },
      login : {
        error : {},
        response : {success:false}
      },
      logout : {
        error : {},
        response : {success:false}
      }
}
, action) {
  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isAuthenticate : true, isLoading: true, login : {response : response }};
    case types.LOGIN_USER_ERROR:
      return { ...state, isLoading : false,  login : { error : response }};
    case types.REGISTER_USER_SUCCESS:
      return { ...state, isLoading : true,  signup : {response : response } };
    case types.REGISTER_USER_ERROR:
      return { ...state, isLoading : false,  signup : {error : response } };
    case types.LOGOUT_USER_SUCCESS:
      return { ...state, isAuthenticate : false, logout : {response : response } };
    case types.LOGOUT_USER_ERROR:
      return { ...state, isLoading : false, logout : {error : response } };
    default:
      return state;
  }
};