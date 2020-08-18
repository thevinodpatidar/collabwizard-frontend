import { put, call, takeLatest } from 'redux-saga/effects';

import * as types from '../actions/actionTypes'
import { getUserDetailService } from '../../../../../api/userDetail';

export function* getUserDetailSaga(payload) {
  try {
      const response = yield call(getUserDetailService, payload);

      if (response.code >= 200 && response.code < 300) {
        yield put({ type: types.USER_DETAIL_SUCCESS, response : response.data});
        } else {
          throw response;
        }
    } catch(response) {
        yield put({ type: types.USER_DETAIL_ERROR, response})
    }
}


export default function* watchUserDetail() {
    yield takeLatest(types.USER_DETAIL, getUserDetailSaga)
}