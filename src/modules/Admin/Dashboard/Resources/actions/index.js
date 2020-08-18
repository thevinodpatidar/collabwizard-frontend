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

export const deleteResourceAction = (id,resourceId,token) =>{
  return {
    type : types.DELETE_RESOURCE,
    id,
    resourceId,
    token
  }
}

export const getUserDetailAction = token => {
  return {
    type: types.USER_DETAIL,
    token
  }
};