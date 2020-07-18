import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Module from './modules';

const Error = () => {
  return <div>Error</div>
}
function App() {
  return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Module} />
          <Route component={Error} />
        </Switch>
      </div>
  );
}

export default App;
