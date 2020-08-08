import { all } from 'redux-saga/effects';
import watchUserAuthentication from "../modules/Admin/Auth/sagas"
import watchResource from "../modules/Admin/Dashboard/Resources/sagas";

export default function* rootSaga() {
  yield all([
    watchUserAuthentication(),
    watchResource()
  ]);
}