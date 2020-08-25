import { combineReducers } from "redux";
import auth from "../modules/Admin/Auth/reducers/";
import { ResourceReducer as resources, UserReducer as user, CategoryReducer as categories } from "../modules/Admin/Dashboard/Resources/reducers";

export default combineReducers({
    auth,
    resources,
    user,
    categories
})