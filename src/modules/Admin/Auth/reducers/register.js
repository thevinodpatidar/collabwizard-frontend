import * as types from '../actions/actionTypes';

export default function(state = {
    response : {
        success : "",
        code : "",
        message : "",
        data : {}
      }
}, action) {
  let response = action.response;
  
  switch(action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { ...state, response };
    case types.REGISTER_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}