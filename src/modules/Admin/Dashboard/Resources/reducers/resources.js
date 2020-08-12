import * as types from '../actions/actionTypes';


export default function(state = {
  isLoading : false,
  data : [],
  error : {}
 }
, action) {
  const response = action.response;
  switch(action.type) {
    case types.ADD_RESOURCE_SUCCESS:
      return { ...state, data : [...state.data, response] };
    case types.ADD_RESOURCE_ERROR:
      return { ...state, error : response };
    case types.GET_RESOURCE_SUCCESS:
      return { ...state, data : response } ;
    case types.GET_RESOURCE_ERROR:
      return { ...state,  error : response };
    case types.DELETE_RESOURCE_SUCCESS:
      return { ...state, data : response}
    case types.DELETE_RESOURCE_ERROR:
      return { ...state, error : response };
    default:
      return state;
  }
};