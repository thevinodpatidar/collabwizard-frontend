import * as types from '../actions/actionTypes';


export default function(state = {
    response : {
      isAuthenticate : false,
      success : "",
      code : "",
      message : "",
      data : {
        token : ""
      }
    }
}
, action) {
  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response };
    case types.LOGOUT_USER_SUCCESS:
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    case types.LOGOUT_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};