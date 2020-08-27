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

// export const deleteResourceAction = (id,resourceId,token) =>{
//   return {
//     type : types.DELETE_RESOURCE,
//     id,
//     resourceId,
//     token
//   }
// }

export const getUserDetailAction = token => {
  return {
    type: types.USER_DETAIL,
    token
  }
};