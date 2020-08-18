import React from 'react'
import { Layout } from 'antd';
import SideBar from '../../shared/components/Sidebar/Sidebar';
import { getToken } from '../../../utils/localStorage';

const {Content,Sider} = Layout;

function Dashboard({children}) {
    // const match = useRouteMatch();
    const isAuthenticated = getToken("token");
    return (
        // <Layout>
        //     { 
        //         isAuthenticated &&
        //     <Sider>
        //         <SideBar />  
        //     </Sider>
        //     }
        //     <Layout>
        //         <Content style={{ margin: '16px 16px' }}>
                    <div>{children}</div>
    //             </Content>
    //         </Layout>
    //   </Layout>
    )
}

export default Dashboard;
