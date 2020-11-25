import {all} from "redux-saga/effects";
import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import { skillSlice } from "../app/modules/UserProfile/_redux/skill/skillSlice";
import { interestSlice } from "../app/modules/UserProfile/_redux/interest/interestSlice";
import { educationSlice } from "../app/modules/UserProfile/_redux/education/educationSlice";
import { experienceSlice } from "../app/modules/UserProfile/_redux/experience/experienceSlice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  skills : skillSlice.reducer,
  interests : interestSlice.reducer,
  educations : educationSlice.reducer,
  experiences : experienceSlice.reducer
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
