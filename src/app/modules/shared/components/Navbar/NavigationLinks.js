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
import { shallowEqual, useSelector } from 'react-redux';

const NavigationLinks = ({ }) => {
  const [current, setCurrent ] = useState("app");

  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );
  const handleClick = e => {
    // console.log('click ', e);
    setCurrent(e.key);
  };

  const menu = (
    <Menu className={css.menuItem}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to="/profile">My Account</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />}>
        <Link to="/logout" >Sign Out</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      {isAuthorized ? (
        <div className={css.profile}>
          {/* {user.username} */}
        <Space size="large">
          <Menu  defaultSelectedKeys={['home']} onClick={handleClick} mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/" >
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="community"icon={<TeamOutlined />}>
              <Link to="/friends" >
                Friends
              </Link>
            </Menu.Item>
            <Menu.Item key="profile">
              <Dropdown overlay={menu} placement="bottomCenter" >
                <Space size="small">
                <Avatar style={{ backgroundColor: '#aed9b4' }} size='default' icon={<UserOutlined />} />
                </Space>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </Space>
        </div>
      ) : (
        <div className={css.buttonContainer}>
          <div>
            <Link to="/auth/login">
              <Button size="middle">Login</Button>
            </Link>
          </div>
          <div>
            <Link to="/auth/signup">
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