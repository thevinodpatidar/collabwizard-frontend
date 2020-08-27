import React, { useEffect } from 'react';
import css from './navbar.module.scss'
import Logo from './Logo/Logo';
import { Button, Drawer } from 'antd'
import {  MenuOutlined } from '@ant-design/icons';
import { useState } from 'react'
import NavigationLinks from './NavigationLinks';
import { connect } from 'react-redux';
import { logoutUserAction } from '../../../Admin/Auth/actions';
import { getUserDetailAction } from '../../../Admin/Dashboard/Resources/actions';
import { getToken, removeToken } from '../../../../utils/localStorage';

const Navbar = (props) => {

  const [isVisibile, setIsVisibile] = useState(false)
  const [isAuthenticated, setisAuthenticated] = useState(true);
  let token = getToken("token")
  // let auth = props.auth;
  useEffect(()=>{
          if(getToken("token") !== null){
              setisAuthenticated(false);
              props.userDetail(getToken("token"))        
            }   
  },[props.auth,token]);

  const logout = () =>{
    const token = getToken("token");
    props.logout(token);
    removeToken("token");
    setisAuthenticated(false);
    window.location.href = "/";
  }

  const showDrawer = () => {
    setIsVisibile(true)
  };
  const onClose = () => {
    setIsVisibile(false)
  };

  return (
    <nav className={css.nav} >
      <div>
        <Logo />
      </div>
      <div className={css.desktop}>
        <NavigationLinks authentication={isAuthenticated} logout={logout} user={props.user}/>
      </div>
      <div className={css.mobile}>
        <Button className="barsMenu" onClick={showDrawer}>
          <MenuOutlined style={{ color: '#08c' }} />
        </Button>
        <Drawer
          placement="right"
          closable={true}
          onClose={onClose}
          visible={isVisibile}
          onClick={onClose}
        >
          <div className={css.drawer}>
            <NavigationLinks authentication={isAuthenticated} onclick={onClose} logout={logout} user={props.user}/>
          </div>
        </Drawer>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
      auth : state.auth,
      // data : state.resources.data,
      user : state.user.data
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    logout : (token) => dispatch(logoutUserAction(token)),
    userDetail : (token) => dispatch(getUserDetailAction(token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
