import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import Module from '../modules/index';
import Layout from '../components/Layout';
import { Col } from 'antd';

// import UserModule from '../modules/index';

const Error = () => {
  return <div>Error</div>
}
function App() {
  return (
      <Col span={24} >
        <Layout>
          <Switch>
              <Route path='/' component={Module} />
              {/* <Route path='/admin' component={AdminModule} /> */}
              <Route path="*" component={Error} />
          </Switch>
        </Layout>
      </Col>
  );
}

export default App;
