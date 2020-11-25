import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import FeedPage from "./modules/Feed/FeedPage";
import UserProfilePage from "./modules/UserProfile/UserProfilePage";
import FriendPage from "./modules/Friends/FriendPage";


export default function BasePage() {
  return (
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
           <Redirect exact from="/" to="/feed" />
        }
        <Route path="/feed" component={FeedPage} />
        <Route path="/user-profile" component={UserProfilePage} />
        <Route path="/friends" component={FriendPage} />
        {/* <Route path="/user-profile" component={ProfilePage} /> */}
        <Redirect to="error/error-v1" />
      </Switch>
  );
}