export const ADD_PRIVATE_VIDEOS = 'ADD_PRIVATE_VIDEOS';
export const ADD_PRIVATE_VIDEOS_SUCCESS = 'ADD_PRIVATE_VIDEOS_SUCCESS';
export const ADD_PRIVATE_VIDEOS_ERROR = 'ADD_PRIVATE_VIDEOS_ERROR';

export const GET_PRIVATE_VIDEOS = 'GET_PRIVATE_VIDEOS';
export const GET_PRIVATE_VIDEOS_SUCCESS = 'GET_PRIVATE_VIDEOS_SUCCESS';
export const GET_PRIVATE_VIDEOS_ERROR = 'GET_PRIVATE_VIDEOS_ERROR';

export const SEARCH_PRIVATE_VIDEOS = 'SEARCH_PRIVATE_VIDEOS';
export const SEARCH_PRIVATE_VIDEOS_SUCCESS = 'SEARCH_PRIVATE_VIDEOS_SUCCESS';
export const SEARCH_PRIVATE_VIDEOS_ERROR = 'SEARCH_PRIVATE_VIDEOS_ERROR';

export const FILTER_PRIVATE_VIDEOS = 'FILTER_PRIVATE_VIDEOS';
export const FILTER_PRIVATE_VIDEOS_SUCCESS = 'FILTER_PRIVATE_VIDEOS_SUCCESS';
export const FILTER_PRIVATE_VIDEOS_ERROR = 'FILTER_PRIVATE_VIDEOS_ERROR';

export const DELETE_PRIVATE_VIDEOS = 'DELETE_PRIVATE_VIDEOS';
export const DELETE_PRIVATE_VIDEOS_SUCCESS = 'DELETE_PRIVATE_VIDEOS_SUCCESS';
export const DELETE_PRIVATE_VIDEOS_ERROR = 'DELETE_PRIVATE_VIDEOS_ERROR';

export const MAKE_VIDEOS_PUBLIC_OR_PRIVATE = 'MAKE_VIDEOS_PUBLIC_OR_PRIVATE';
export const MAKE_VIDEOS_PUBLIC_OR_PRIVATE_SUCCESS = 'MAKE_VIDEOS_PUBLIC_OR_PRIVATE_SUCCESS';
export const MAKE_VIDEOS_PUBLIC_OR_PRIVATE_ERROR = 'MAKE_VIDEOS_PUBLIC_OR_PRIVATE_ERROR';


export const addPrivateVideosAction = (resource,token) => {
    return {
      type:ADD_PRIVATE_VIDEOS,
      resource,
      token
    }
};


export const getPrivateVideosAction = token => {
  return {
    type:GET_PRIVATE_VIDEOS,
    token
  }
};

export const searchPrivateVideosAction = (searchText,token,resourceType) => {
  return {
    type:SEARCH_PRIVATE_VIDEOS,
    searchText,
    token,
    resourceType
  }
};

export const filterPrivateVideosAction = (category,token,resourceType) => {
  return {
    type:FILTER_PRIVATE_VIDEOS,
    category,
    token,
    resourceType
  }
};

export const deletePrivateVideosAction = (id,resourceId,token) =>{
  return {
    type :DELETE_PRIVATE_VIDEOS,
    id,
    resourceId,
    token
  }
}

export const makeVideosPublicOrPrivateAction = (data,token) =>{
  return {
    type : MAKE_VIDEOS_PUBLIC_OR_PRIVATE,
    data,
    token
  }
}
