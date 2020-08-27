// import { put, call, takeLatest } from 'redux-saga/effects';

// import * as types from '../actions/actionTypes'
// import { addResourceService,deleteResourceService, getPrivateArticlesService, getPrivateVideosService } from '../../../../../api/resources';

// export function* addResourceSaga(payload) {
//     try {
//         const response = yield call(addResourceService, payload);
//         if (response.code >= 200 && response.code < 300) {
//             // response  = response.data
//             yield put({ type: types.ADD_RESOURCE_SUCCESS, response : response.data});
//           } else {
//             throw response;
//           }
//       } catch(response) {
//         yield put({ type: types.ADD_RESOURCE_ERROR, response})
//       }
// }

// export function* getPrivateArticlesSaga(payload) {
//   try {
//       const response = yield call(getPrivateArticlesService, payload);
//       if (response.code >= 200 && response.code < 300) {
//         yield put({ type: types.GET_RESOURCE_SUCCESS, response : response.data});
//         } else {
//           throw response;
//         }
//     } catch(response) {
//         yield put({ type: types.GET_RESOURCE_ERROR, response})
//     }
// }

// export function* getPrivateVideosSaga(payload) {
//   try {
//       const response = yield call(getPrivateVideosService, payload);
//       if (response.code >= 200 && response.code < 300) {
//         yield put({ type: types.GET_RESOURCE_SUCCESS, response : response.data});
//         } else {
//           throw response;
//         }
//     } catch(response) {
//         yield put({ type: types.GET_RESOURCE_ERROR, response})
//     }
// }

// export function* deleteResourceSaga(payload) {
//   try {
//       const response = yield call(deleteResourceService, payload);
//       if (response.code >= 200 && response.code < 300) {
          
//           yield put({ type: types.DELETE_RESOURCE_SUCCESS,response});
//         } else {
//           throw response;
//         }
//     } catch(response) {
//       yield put({ type: types.DELETE_RESOURCE_ERROR, response})
//     }
// }


// export default function* watchResource() {
//     yield takeLatest(types.ADD_RESOURCE, addResourceSaga)
//     yield takeLatest(types.GET_PRIVATE_ARTICLES_RESOURCE, getPrivateArticlesSaga)
//     yield takeLatest(types.GET_RESOURCE, getPrivateVideosSaga)
//     yield takeLatest(types.DELETE_RESOURCE, deleteResourceSaga)
// }