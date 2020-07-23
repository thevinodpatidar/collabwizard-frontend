import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import SideBar from '../../shared/components/Sidebar/Sidebar';
import Navbar from '../../shared/components/Navbar/Navbar';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProtectedRoute from '../../../components/ProtectedRoute';
import Resources from './Resources';

const {Content,Sider,Header,Footer} = Layout;

function Dashboard({children}) {
    // const match = useRouteMatch();
    return (
        <Layout>
        <Sider>
            <SideBar />  
        </Sider>
        <Content >
        <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
            {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </Content>
      </Layout>
    )
}

export default Dashboard;
