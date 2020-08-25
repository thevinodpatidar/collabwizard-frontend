export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_ERROR = 'ADD_CATEGORY_ERROR';

export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_ERROR = 'GET_CATEGORY_ERROR';

export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR';

export const addCategoryAction = (category,token) => {
    return {
      type: ADD_CATEGORY,
      category,
      token
    }
};

export const getCategoryAction = token => {
    return {
      type: GET_CATEGORY,
      token
    }
};

export const deleteCategoryAction = (categoryId,token) =>{
  return {
    type : DELETE_CATEGORY,
    categoryId,
    token
  }
}