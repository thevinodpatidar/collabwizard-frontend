import { getPublicResourceService } from "../../../../../api/resources";
import { put, call, takeLatest } from 'redux-saga/effects';

import * as types from '../actions/publicResourceActionTypes'

export function* getPublicResourceSaga(payload) {
    try {
        const response = yield call(getPublicResourceService, payload);
        if (response.code >= 200 && response.code < 300) {
          yield put({ type: types.PUBLIC_RESOURCE_SUCCESS, response : response.data});
          } else {
            throw response;
          }
      } catch(response) {
          yield put({ type: types.PUBLIC_RESOURCE_ERROR, response})
      }
  }

  export default function* watchPublicResource() {
    yield takeLatest(types.PUBLIC_RESOURCE, getPublicResourceSaga)
}