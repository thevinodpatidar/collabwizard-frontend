import { put, call, takeLatest } from 'redux-saga/effects';

import * as types from '../actions/categoryActionTypes'
import { addCategoryService, getCategoryService, deleteCategoryService } from '../../../../../api/category';

export function* addCategorySaga(payload) {
    try {
        const response = yield call(addCategoryService, payload);
        if (response.code >= 200 && response.code < 300) {
            // response  = response.data
            yield put({ type: types.ADD_CATEGORY_SUCCESS, response : response.data});
          } else {
            throw response;
          }
      } catch(response) {
        yield put({ type: types.ADD_CATEGORY_ERROR, response})
      }
}

export function* getCategorySaga(payload) {
  try {
      const response = yield call(getCategoryService, payload);
      if (response.code >= 200 && response.code < 300) {
        yield put({ type: types.GET_CATEGORY_SUCCESS, response : response.data});
        } else {
          throw response;
        }
    } catch(response) {
        yield put({ type: types.GET_CATEGORY_ERROR, response})
    }
}

export function* deleteCategorySaga(payload) {
  try {
      const response = yield call(deleteCategoryService, payload);
      if (response.code >= 200 && response.code < 300) {
          
          yield put({ type: types.DELETE_CATEGORY_SUCCESS,response});
        } else {
          throw response;
        }
    } catch(response) {
      yield put({ type: types.DELETE_CATEGORY_ERROR, response})
    }
}


export default function* watchCategory() {
    yield takeLatest(types.ADD_CATEGORY, addCategorySaga)
    yield takeLatest(types.GET_CATEGORY, getCategorySaga)
    yield takeLatest(types.DELETE_CATEGORY, deleteCategorySaga)
}