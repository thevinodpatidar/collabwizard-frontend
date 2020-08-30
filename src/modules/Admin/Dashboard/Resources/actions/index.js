import * as types from "./actionTypes";

// export const addResourceAction = (resource,token) => {
//     return {
//       type: types.ADD_RESOURCE,
//       resource,
//       token
//     }
// };

// export const getPrivateArticlesAction = token => {
//   return {
//     type: types.GET_PRIVATE_ARTICLES,
//     token
//   }
// };

// export const getPrivateVideosAction = token => {
//   return {
//     type: types.GET_PRIVATE_VIDEOS,
//     token
//   }
// };

// export const searchResourceAction = (searchText,token) => {
//   return {
//     type: types.SEARCH_RESOURCE,
//     searchText,
//     token
//   }
// };

export const makeResourcePublicOrPrivateAction = (id,check) =>{
  return {
    type : types.MAKE_RESOURCE_PUBLIC_OR_PRIVATE,
    check,
    id
  }
}

export const getUserDetailAction = token => {
  return {
    type: types.USER_DETAIL,
    token
  }
};