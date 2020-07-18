import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from './Login';

// const baseRoute = '/school/:schoolIdentifier';

const AuthModule = () => {
  <Switch>
    <Route path={`login`} component={Login} />
  </Switch>;
};

export default AuthModule;
 