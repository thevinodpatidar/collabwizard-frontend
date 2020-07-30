import React, { useState } from 'react';
import { Layout, Menu} from 'antd';
import { TeamOutlined,FileOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
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
      <Layout style={{ height: '100%' }}>
        <Sider  style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }} theme="light" collapsible collapsed={collapsed} onCollapse={onCollapse}>
          {/* <div className="logo" /> */}
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined/>}>
              <Link to={`/dashboard`}>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <SubMenu key="sub1" icon={<TeamOutlined />} title="Community">
              <Menu.Item key="3">
                <a href="http://localhost:4567" target="blank">
                  Forum
                </a>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<FileOutlined />} onSelect={()=>{console.log("selected")}} >
              <Link to={`/resources`}>
                Resources
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  }

export default SideBar;