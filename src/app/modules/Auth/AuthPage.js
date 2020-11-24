import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import Login from "./Login/Login";
import Signup from './Signup/Signup';

export default function AuthPage() {
    return (
        <Switch>
            <Route path="/auth/login" component={Login}/>
            <Route path="/auth/signup" component={Signup}/>
            <Route
                path="/auth/forgot-password"
                component={ForgotPassword}
            />
            <Redirect from="/auth" exact={true} to="/auth/login"/>
            <Redirect to="/auth/login"/>
        </Switch>
    )
}
