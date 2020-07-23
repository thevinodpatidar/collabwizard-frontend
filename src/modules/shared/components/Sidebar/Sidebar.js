import React, { useState } from 'react';
import { Layout, Menu} from 'antd';
import { TeamOutlined, DesktopOutlined, PieChartOutlined, FileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = (props) =>{

  const [collapsed, setcollapsed] = useState(false);
  
  const onCollapse = collapsed => {
    console.log(collapsed);
    setcollapsed(collapsed);
  };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="light" breakpoint="lg"
        collapsedWidth="0" collapsible collapsed={collapsed} onCollapse={onCollapse}>
          {/* <div className="logo" /> */}
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined/>}>
              <Link to={`/dashboard`}>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Profile
            </Menu.Item>
            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="Community">
              <Menu.Item key="3">Forum</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu> */}
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Community">
              <Menu.Item key="6">Forum</Menu.Item>
              {/* <Menu.Item key="8"></Menu.Item> */}
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} onSelect={()=>{console.log("selected")}} >
              <Link to={`/resources`}>
                Resources
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        {/* <Switch>
            <ProtectedRoute exact path={`dashboard`} component={DashboardModule} />
            <ProtectedRoute exact path={`resources`} component={Resources} />
        </Switch> */}
      </Layout>
    );
  }

export default SideBar;