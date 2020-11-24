import { combineReducers } from "redux";
import auth from "../app/modules/Auth/reducers";
import { 
    PrivateArticlesReducer as privateArticles,
    PrivateVideosReducer as privateVideos, 
    UserReducer as user, 
    CategoryReducer as categories, 
    // SearchReducer as search, 
    PublicResourceReducer as publicResource 
} from "../app/modules/Admin/Dashboard/Resources/reducers";

export default combineReducers({
    auth,
    privateArticles,
    privateVideos,
    publicResource,
    user,
    categories,
    // search
})