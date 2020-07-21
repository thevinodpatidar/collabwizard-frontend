import React from 'react';

import Dashboard from './Dashboard/Dashboard';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import LandingPage from '../../components/LandingPage';
import LoginPage from './Auth/Login';
import Signup from './Auth/Signup';
import ForgotPassword from './Auth/ForgotPassword';
import ProtectedRoute from '../../components/ProtectedRoute';   

export default function AdminModule() { 
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.path}`} component={LandingPage} />
            <Route exact path={`${match.path}login`} component={LoginPage} />
            <Route exact path={`${match.path}signup`} component={Signup} />
            <Route exact path={`${match.path}forgotPassword`} component={ForgotPassword} />
            <ProtectedRoute exact path={`${match.path}dashboard`} component={Dashboard} />
        </Switch>
    )
}
