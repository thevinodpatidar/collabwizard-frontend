import React from 'react'
import { Layout } from 'antd';
import SideBar from '../../shared/components/Sidebar/Sidebar';

const {Content,Sider,Footer} = Layout;

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
