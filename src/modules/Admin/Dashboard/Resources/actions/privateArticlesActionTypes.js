export const ADD_PRIVATE_ARTICLES = 'ADD_PRIVATE_ARTICLES';
export const ADD_PRIVATE_ARTICLES_SUCCESS = 'ADD_PRIVATE_ARTICLES_SUCCESS';
export const ADD_PRIVATE_ARTICLES_ERROR = 'ADD_PRIVATE_ARTICLES_ERROR';

export const GET_PRIVATE_ARTICLES = 'GET_PRIVATE_ARTICLES';
export const GET_PRIVATE_ARTICLES_SUCCESS = 'GET_PRIVATE_ARTICLES_SUCCESS';
export const GET_PRIVATE_ARTICLES_ERROR = 'GET_PRIVATE_ARTICLES_ERROR';

export const SEARCH_PRIVATE_ARTICLES = 'SEARCH_PRIVATE_ARTICLES';
export const SEARCH_PRIVATE_ARTICLES_SUCCESS = 'SEARCH_PRIVATE_ARTICLES_SUCCESS';
export const SEARCH_PRIVATE_ARTICLES_ERROR = 'SEARCH_PRIVATE_ARTICLES_ERROR';

export const FILTER_PRIVATE_ARTICLES = 'FILTER_PRIVATE_ARTICLES';
export const FILTER_PRIVATE_ARTICLES_SUCCESS = 'FILTER_PRIVATE_ARTICLES_SUCCESS';
export const FILTER_PRIVATE_ARTICLES_ERROR = 'FILTER_PRIVATE_ARTICLES_ERROR';

export const DELETE_PRIVATE_ARTICLES = 'DELETE_PRIVATE_ARTICLES';
export const DELETE_PRIVATE_ARTICLES_SUCCESS = 'DELETE_PRIVATE_ARTICLES_SUCCESS';
export const DELETE_PRIVATE_ARTICLES_ERROR = 'DELETE_RESOURCE_ERROR';

export const MAKE_ARTICLES_PUBLIC_OR_PRIVATE = 'MAKE_ARTICLES_PUBLIC_OR_PRIVATE';
export const MAKE_ARTICLES_PUBLIC_OR_PRIVATE_SUCCESS = 'MAKE_ARTICLES_PUBLIC_OR_PRIVATE_SUCCESS';
export const MAKE_ARTICLES_PUBLIC_OR_PRIVATE_ERROR = 'MAKE_ARTICLES_PUBLIC_OR_PRIVATE_ERROR';


export const addPrivateArticlesAction = (resource,token) => {
  return {
    type: ADD_PRIVATE_ARTICLES,
    resource,
    token
  }
};

export const getPrivateArticlesAction = token => {
  return {
    type: GET_PRIVATE_ARTICLES,
    token
  }
};

export const searchPrivateArticlesAction = (searchText,token,resourceType) => {
  return {
    type: SEARCH_PRIVATE_ARTICLES,
    searchText,
    token,
    resourceType
  }
};

export const filterPrivateArticlesAction = (category,token,resourceType) => {
  return {
    type:FILTER_PRIVATE_ARTICLES,
    category,
    token,
    resourceType
  }
};

export const deletePrivateArticlesAction = (id,resourceId,token) =>{
  return {
    type : DELETE_PRIVATE_ARTICLES,
    id,
    resourceId,
    token
  }
}

export const makeArticlesPublicOrPrivateAction = (data,token) =>{
  return {
    type : MAKE_ARTICLES_PUBLIC_OR_PRIVATE,
    data,
    token
  }
}
