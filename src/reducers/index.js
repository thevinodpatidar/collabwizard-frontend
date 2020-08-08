import { combineReducers } from "redux";
import auth from "../modules/Admin/Auth/reducers";
import resources from "../modules/Admin/Dashboard/Resources/reducers/resources";

export default combineReducers({
    auth,
    resources
})