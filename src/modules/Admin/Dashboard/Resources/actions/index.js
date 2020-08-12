import * as types from "./actionTypes";

export const addResourceAction = (resource,token) => {
    return {
      type: types.ADD_RESOURCE,
      resource,
      token
    }
};

export const getResourceAction = token => {
    return {
      type: types.GET_RESOURCE,
      token
    }
};

export const deleteResourceAction = (resourceId,token) =>{
  return {
    type : types.DELETE_RESOURCE,
    resourceId,
    token
  }
}