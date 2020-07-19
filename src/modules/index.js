import React from 'react';
import  AdminModule  from './Admin/index';
import { Switch, Route } from 'react-router-dom';
const Module = () => {

  return (
    <Switch>
      <Route path="/" component={AdminModule} />
    </Switch>
  )
};

export default Module;
