import { put, call, takeLatest } from 'redux-saga/effects';
import { registerUserService, loginUserService, logoutUserService } from "../../../../api/authentication";

import * as types from '../actions/actionTypes'

export function* registerSaga(payload) {
    try {
        const response = yield call(registerUserService, payload);
        
        if (response.code >= 200 && response.code < 300) {
            // const response  = yield response.json();
      
            yield put({ type: types.REGISTER_USER_SUCCESS, response });
          } else {
            throw response;
          }
      } catch(response) {
        yield put({ type: types.REGISTER_USER_ERROR, response})
      }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    if (response.code >= 200 && response.code < 300) {
        yield put({ type: types.LOGIN_USER_SUCCESS, response });
      } else {
        throw response;
      }
  } catch(response) {
    yield put({ type: types.LOGIN_USER_ERROR, response})
  }
}

export function* logoutSaga(payload) {
  try {
    const serverResponse = yield call(logoutUserService, payload);

    if (serverResponse.code >= 200 && serverResponse.code< 300) {
        const response  = yield serverResponse.json();
        localStorage.removeItem("token");
        yield put({ type: types.LOGOUT_USER_SUCCESS, response });
      } else {
        throw serverResponse;
      }
  } catch(response) {
    yield put({ type: types.LOGOUT_USER_ERROR, response})
  }
}


export default function* watchUserAuthentication() {
    yield takeLatest(types.REGISTER_USER, registerSaga);
    yield takeLatest(types.LOGIN_USER, loginSaga);
    yield takeLatest(types.LOGOUT_USER, logoutSaga);
}