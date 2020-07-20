import { fork } from 'redux-saga/effects';
import watchUserAuthentication from "../modules/Admin/Auth/sagas"

export default function* startForman() {
  yield fork(watchUserAuthentication);
}