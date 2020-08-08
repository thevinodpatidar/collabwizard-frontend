import React from 'react';

import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import LandingPage from '../../components/LandingPage';
import { Login, Signup, ForgotPassword } from './Auth';
import ProtectedRoute from '../../components/ProtectedRoute';   
import Resources from './Dashboard/Resources';
import Dashboard from './Dashboard/Dashboard';
import Home from './Dashboard/Home';

export default function AdminModule({routes}) { 
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.path}`} component={LandingPage} />
            <Route exact path={`${match.path}login`} component={Login} />
            <Route exact path={`${match.path}signup`} component={Signup} />
            <Route exact path={`${match.path}forgotPassword`} component={ForgotPassword} />
            {/* <Route path="*" > <Redirect to="/" /></Route> */}
            <Dashboard>
                <ProtectedRoute exact path={`${match.path}dashboard`} component={Home} />
                <ProtectedRoute exact path={`${match.path}resources`} component={Resources} />
                <Route path="/" ><Redirect to="/dashboard" /></Route>
                <Route path="*" ><Redirect to="/dashboard" /></Route>
            </Dashboard>
        </Switch>
    )
}
