// import { put, call, takeLatest } from 'redux-saga/effects';

// import * as types from '../actions/actionTypes'
// import { searchResourceService } from '../../../../../api/resources';



// export function* searchResourceSaga(payload) {
//   try {
//       const response = yield call(searchResourceService, payload);
//       if (response.code >= 200 && response.code < 300) {
          
//           yield put({ type: types.SEARCH_RESOURCE_SUCCESS,response});
//         } else {
//           throw response;
//         }
//     } catch(response) {
//       yield put({ type: types.SEARCH_RESOURCE_ERROR, response})
//     }
// }


// export default function* watchSearch() {
//     yield takeLatest(types.SEARCH_RESOURCE, searchResourceSaga)
// }