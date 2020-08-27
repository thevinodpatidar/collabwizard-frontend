import * as types from '../actions/publicResourceActionTypes';


export default function(state = {
  isLoading : false,
  data : [],
  error : {}
 }
, action) {
  const response = action.response;

  switch(action.type) {
    case types.PUBLIC_RESOURCE_SUCCESS:
      return { ...state, data : response } ;
    case types.PUBLIC_RESOURCE_ERROR:
      return { ...state, error : response };
    default:
      return state;
  }
};