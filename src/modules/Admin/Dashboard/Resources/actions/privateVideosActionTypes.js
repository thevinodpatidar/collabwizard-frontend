export const ADD_PRIVATE_VIDEOS = 'ADD_PRIVATE_VIDEOS';
export const ADD_PRIVATE_VIDEOS_SUCCESS = 'ADD_PRIVATE_VIDEOS_SUCCESS';
export const ADD_PRIVATE_VIDEOS_ERROR = 'ADD_PRIVATE_VIDEOS_ERROR';

export const GET_PRIVATE_VIDEOS = 'GET_PRIVATE_VIDEOS';
export const GET_PRIVATE_VIDEOS_SUCCESS = 'GET_PRIVATE_VIDEOS_SUCCESS';
export const GET_PRIVATE_VIDEOS_ERROR = 'GET_PRIVATE_VIDEOS_ERROR';

export const SEARCH_PRIVATE_VIDEOS = 'SEARCH_PRIVATE_VIDEOS';
export const SEARCH_PRIVATE_VIDEOS_SUCCESS = 'SEARCH_PRIVATE_VIDEOS_SUCCESS';
export const SEARCH_PRIVATE_VIDEOS_ERROR = 'SEARCH_PRIVATE_VIDEOS_ERROR';

export const DELETE_PRIVATE_VIDEOS = 'DELETE_PRIVATE_VIDEOS';
export const DELETE_PRIVATE_VIDEOS_SUCCESS = 'DELETE_PRIVATE_VIDEOS_SUCCESS';
export const DELETE_PRIVATE_VIDEOS_ERROR = 'DELETE_PRIVATE_VIDEOS_ERROR';



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

export const searchPrivateVideosAction = (searchText,token) => {
  return {
    type:SEARCH_PRIVATE_VIDEOS,
    searchText,
    token
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