import * as types from '../actions/actionTypes';


export default function(state = { }
, action) {
  const response = action.response;

  switch(action.type) {
    case types.ADD_RESOURCE_SUCCESS:
      return { ...state, response };
    case types.ADD_RESOURCE_ERROR:
      return { ...state, response };
    case types.GET_RESOURCE_SUCCESS:
      return { ...state, response };
    case types.GET_RESOURCE_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};