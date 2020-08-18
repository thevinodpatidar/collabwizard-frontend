import * as types from '../actions/actionTypes';


export default function(state = {
  isLoading : false,
  data : {},
  error : {}
 }
, action) {
  const response = action.response;
 
  switch(action.type) {
    case types.USER_DETAIL_SUCCESS:
      return { ...state, data : response };
    case types.USER_DETAIL_ERROR:
      return { ...state, error : response };
    default:
      return state;
  }
};