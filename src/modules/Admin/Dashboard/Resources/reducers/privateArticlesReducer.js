import * as types from '../actions/privateArticlesActionTypes';


export default function(state = {
  isLoading : false,
  data : [],
  error : {}
 }
, action) {
  const response = action.response;

  switch(action.type) {
    case types.ADD_PRIVATE_ARTICLES_SUCCESS:
      return { ...state, data : [...state.data, response] };
    case types.ADD_PRIVATE_ARTICLES_ERROR:
      return { ...state, error : response };
    case types.GET_PRIVATE_ARTICLES_SUCCESS:
      return { ...state, data : response } ;
    case types.GET_PRIVATE_ARTICLES_ERROR:
      return { ...state,  error : response };
    case types.SEARCH_PRIVATE_ARTICLES_SUCCESS:
      return { ...state, data : response } ;
    case types.SEARCH_PRIVATE_ARTICLES_ERROR:
      return { ...state,  error : response };
    case types.FILTER_PRIVATE_ARTICLES_SUCCESS:
      return { ...state, data : response } ;
    case types.FILTER_PRIVATE_ARTICLES_ERROR:
      return { ...state,  error : response };
    case types.DELETE_PRIVATE_ARTICLES_SUCCESS:
      let newState = state.data.slice();
      newState.splice(action.id, 1);
      return { ...state , data : newState }
    default:
      return state;
  }
};