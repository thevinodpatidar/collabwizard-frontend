import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import Module from '../modules/index';
import AppLayout from '../components/Layout';
import { Col } from 'antd';
import AdminModule from '../modules/Admin';

// import UserModule from '../modules/index';

const Error = () => {
  return <div>Error</div>
}
function App() {
  return (
      <Col span={24} >
        <AppLayout>
          <Switch>
              <Route path="/" component={AdminModule} />
              {/* <Route path='/admin' component={AdminModule} /> */}
              <Route path="*" component={Error} />
          </Switch>
        </AppLayout>
      </Col>
  );
}

export default App;