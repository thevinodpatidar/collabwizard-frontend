import React, { useState } from "react";
import { Button, Dropdown, Menu, Avatar, Space } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  HomeOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import css from "./navbar.module.scss";
import { Link } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";

const NavigationLinks = ({ authentication,logout,user}) => {
  const [current, setCurrent ] = useState("app")

  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const menu = (
    <Menu className={css.menuItem}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to="/profile">My Account</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />}>
        <Link to="/" onClick={logout} >Sign Out</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      {!authentication ? (
        <div className={css.profile}>
          {/* {user.username} */}
        <Space size="large">
          <Menu onClick={handleClick} mode="horizontal">
            <Menu.Item key="app" icon={<HomeOutlined />}>
              <Link to="/dashboard" >
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="community"icon={<TeamOutlined />}>
            <a href="https://community.beta.schooltribe.co" target="blank">
                  Forum
                </a>
            </Menu.Item>
            <SubMenu key="resources" icon={<SettingOutlined />} title="Resources">
              <Menu.ItemGroup>
                <Menu.Item key="resources:1" icon={<EyeOutlined />} >
                  <Link to="/resources/public" >
                    Public
                  </Link>
                  </Menu.Item>
                <Menu.Item key="resources:2" icon={<EyeInvisibleOutlined />}>
                <Link to="/resources/private" >
                    Private
                  </Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
          <Dropdown overlay={menu} placement="bottomLeft" >
            <Space size="small">
            <Avatar style={{ backgroundColor: 'dodgerblue' }} size='default' icon={<UserOutlined />} />
            {user.username}
            </Space>
          </Dropdown>
        </Space>
        </div>
      ) : (
        <div className={css.buttonContainer}>
          <div>
            <Link to="/login">
              <Button size="middle">Login</Button>
            </Link>
          </div>
          <div>
            <Link to="/signup">
              <Button type="primary" size="middle" >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationLinks;
