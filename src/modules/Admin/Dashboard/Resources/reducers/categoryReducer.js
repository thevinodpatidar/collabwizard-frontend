import * as types from '../actions/categoryActionTypes';


export default function(state = {
  isLoading : false,
  data : [],
  error : {}
 }
, action) {
  const response = action.response;

  switch(action.type) {
    case types.ADD_CATEGORY_SUCCESS:
      return { ...state, data : [...state.data, response] };
    case types.ADD_CATEGORY_ERROR:
      return { ...state, error : response };
    case types.GET_CATEGORY_SUCCESS:
      return { ...state, data : response } ;
    case types.GET_CATEGORY_ERROR:
      return { ...state,  error : response };
    case types.DELETE_CATEGORY_SUCCESS:
      let newState = [...state.data];
      newState.splice(action.id, 1);
      return { ...state , data : newState }
    case types.DELETE_CATEGORY_ERROR:
      return { ...state, error : response };
    default:
      return state;
  }
};