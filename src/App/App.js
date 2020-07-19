import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Module from '../modules/index';
// import UserModule from '../modules/index';

const Error = () => {
  return <div>Error</div>
}
function App() {
  return (
      <div className='App'>
        <Switch>
          <Route path='/' component={Module} />
          {/* <Route path='/admin' component={AdminModule} /> */}
          <Route path="*" component={Error} />
        </Switch>
      </div>
  );
}

export default App;
