import { all } from 'redux-saga/effects';
import watchUserAuthentication from "../modules/Admin/Auth/sagas"
import watchResource from "../modules/Admin/Dashboard/Resources/sagas";
import watchUserDetail from '../modules/Admin/Dashboard/Resources/sagas/userSaga';
import watchCategory from "../modules/Admin/Dashboard/Resources/sagas/categorySaga";

export default function* rootSaga() {
  yield all([
    watchUserAuthentication(),
    watchResource(),
    watchUserDetail(),
    watchCategory()
  ]);
}