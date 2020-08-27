import { all } from 'redux-saga/effects';
import watchUserAuthentication from "../modules/Admin/Auth/sagas"
import watchPrivateArticles from "../modules/Admin/Dashboard/Resources/sagas/privateArticlesSaga";
import watchPrivateVideos from "../modules/Admin/Dashboard/Resources/sagas/privateVideosSaga";
import watchUserDetail from '../modules/Admin/Dashboard/Resources/sagas/userSaga';
import watchCategory from "../modules/Admin/Dashboard/Resources/sagas/categorySaga";
import watchSearch from "../modules/Admin/Dashboard/Resources/sagas/searchSaga";
import watchPublicResource from '../modules/Admin/Dashboard/Resources/sagas/publicResourceSaga';

export default function* rootSaga() {
  yield all([
    watchUserAuthentication(),
    watchPrivateArticles(),
    watchPrivateVideos(),
    watchUserDetail(),
    watchCategory(),
    // watchSearch(),
    watchPublicResource()
  ]);
}