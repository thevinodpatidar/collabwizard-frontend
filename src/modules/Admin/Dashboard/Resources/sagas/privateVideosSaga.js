import { put, call, takeLatest } from 'redux-saga/effects';

import * as types from '../actions/privateVideosActionTypes';

import { addResourceService,deleteResourceService,getPrivateVideosService, searchResourceService, filterResourceService, makeResourcePublicOrPrivateService } from '../../../../../api/resources';

export function* addResourceSaga(payload) {
    try {
        const response = yield call(addResourceService, payload);
        if (response.code >= 200 && response.code < 300) {
            // response  = response.data
            yield put({ type: types.ADD_PRIVATE_VIDEOS_SUCCESS, response : response.data});
          } else {
            throw response;
          }
      } catch(response) {
        yield put({ type: types.ADD_PRIVATE_VIDEOS_ERROR, response})
      }
}

export function* getPrivateVideosSaga(payload) {
  try {
      const response = yield call(getPrivateVideosService, payload);
      if (response.code >= 200 && response.code < 300) {
        yield put({ type: types.GET_PRIVATE_VIDEOS_SUCCESS, response : response.data});
        } else {
          throw response;
        }
    } catch(response) {
        yield put({ type: types.GET_PRIVATE_VIDEOS_ERROR, response})
    }
}

export function* searchPrivateVideosSaga(payload) {
    try {
        const response = yield call(searchResourceService, payload);
        if (response.code >= 200 && response.code < 300) {
          yield put({ type: types.SEARCH_PRIVATE_VIDEOS_SUCCESS, response : response.data});
          } else {
            throw response;
          }
      } catch(response) {
          yield put({ type: types.SEARCH_PRIVATE_VIDEOS_ERROR, response})
      }
  }

export function* filterPrivateVideosSaga(payload) {
  try {
      const response = yield call(filterResourceService, payload);
      if (response.code >= 200 && response.code < 300) {
        yield put({ type: types.FILTER_PRIVATE_VIDEOS_SUCCESS, response : response.data});
        } else {
          throw response;
        }
    } catch(response) {
        yield put({ type: types.FILTER_PRIVATE_VIDEOS_ERROR, response})
    }
}
  

export function* deleteResourceSaga(payload) {
  try {
      const deleteResponse = yield call(deleteResourceService, payload);
      const resourceResponse = yield call(getPrivateVideosService, payload);
      if (deleteResponse.code >= 200 && deleteResponse.code < 300) {
          yield put({ type: types.DELETE_PRIVATE_VIDEOS_SUCCESS, response : deleteResponse});
          yield put({ type: types.GET_PRIVATE_VIDEOS_SUCCESS, response : resourceResponse.data});
        } else {
          throw deleteResponse;
        }
    } catch(response) {
      yield put({ type: types.DELETE_PRIVATE_VIDEOS_ERROR, response})
    }
}

export function* makeVideosPublicOrPrivateSaga(payload) {
  try {
      const response = yield call(makeResourcePublicOrPrivateService, payload);
      const resourceResponse = yield call(getPrivateVideosService, payload);
      if (response.code >= 200 && response.code < 300) {
          yield put({ type: types.MAKE_VIDEOS_PUBLIC_OR_PRIVATE_SUCCESS,response});
          yield put({ type: types.GET_PRIVATE_VIDEOS_SUCCESS, response : resourceResponse.data});
        } else {
          throw response;
        }
    } catch(response) {
      yield put({ type: types.MAKE_VIDEOS_PUBLIC_OR_PRIVATE_ERROR, response})
    }
}

export default function* watchResource() {
    yield takeLatest(types.ADD_PRIVATE_VIDEOS, addResourceSaga)
    yield takeLatest(types.GET_PRIVATE_VIDEOS, getPrivateVideosSaga)
    yield takeLatest(types.DELETE_PRIVATE_VIDEOS, deleteResourceSaga)
    yield takeLatest(types.SEARCH_PRIVATE_VIDEOS, searchPrivateVideosSaga)
    yield takeLatest(types.FILTER_PRIVATE_VIDEOS, filterPrivateVideosSaga)
    yield takeLatest(types.MAKE_VIDEOS_PUBLIC_OR_PRIVATE, makeVideosPublicOrPrivateSaga)
}