import React from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';
// import LandingPage from '../../components/LandingPage';
import LoginPage from './Auth/Login';
import Signup from './Auth/Signup';
import ForgotPassword from './Auth/ForgotPassword';
import ProtectedRoute from '../../components/ProtectedRoute';   
import Resources from './Dashboard/Resources';
import Dashboard from './Dashboard/Dashboard';
import RouteWithSubRoutes from '../../components/RouterWithSubRoutes';
import Home from './Dashboard/Home';

export default function AdminModule({routes}) { 
    const match = useRouteMatch();
    return (
        <Switch>
            {/* <Route exact path={`${match.path}`} component={LandingPage} /> */}
            <Route exact path={`${match.path}login`} component={LoginPage} />
            <Route exact path={`${match.path}signup`} component={Signup} />
            <Route exact path={`${match.path}forgotPassword`} component={ForgotPassword} />
            <Dashboard>
                <ProtectedRoute exact path={`${match.path}dashboard`} component={Home} />
                <ProtectedRoute exact path={`${match.path}resources`} component={Resources} />
            </Dashboard>
        </Switch>
    )
}
