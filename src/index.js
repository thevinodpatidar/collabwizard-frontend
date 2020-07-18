import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App/App';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  document.getElementById('root')
);
