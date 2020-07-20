import { combineReducers } from "redux";
import login from "./login";
import signup from "./register";

export default combineReducers({
    login,
    signup
})