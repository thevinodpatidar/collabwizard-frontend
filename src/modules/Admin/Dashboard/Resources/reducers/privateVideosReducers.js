import * as types from '../actions/privateVideosActionTypes';


export default function(state = {
  isLoading : false,
  data : [],
  error : {}
 }
, action) {
  const response = action.response;

  switch(action.type) {
    case types.ADD_PRIVATE_VIDEOS_SUCCESS:
      return { ...state, data : [...state.data, response] };
    case types.ADD_PRIVATE_VIDEOS_ERROR:
      return { ...state, error : response };
    case types.GET_PRIVATE_VIDEOS_SUCCESS:
      return { ...state, data : response } ;
    case types.GET_PRIVATE_VIDEOS_ERROR:
      return { ...state,  error : response };
    case types.SEARCH_PRIVATE_VIDEOS_SUCCESS:
      return { ...state, data : response } ;
    case types.SEARCH_PRIVATE_VIDEOS_ERROR:
      return { ...state,  error : response };
    case types.FILTER_PRIVATE_VIDEOS_SUCCESS:
      return { ...state, data : response } ;
    case types.FILTER_PRIVATE_VIDEOS_ERROR:
      return { ...state,  error : response };
    case types.MAKE_VIDEOS_PUBLIC_OR_PRIVATE_SUCCESS:
      return { ...state, data : response } ;
    case types.MAKE_VIDEOS_PUBLIC_OR_PRIVATE_ERROR:
      return { ...state,  error : response };
    case types.DELETE_PRIVATE_VIDEOS_SUCCESS:
      return { ...state , data : response }
    case types.DELETE_PRIVATE_VIDEOS_ERROR:
      return { ...state,  error : response };
    default:
      return state;
  }
};