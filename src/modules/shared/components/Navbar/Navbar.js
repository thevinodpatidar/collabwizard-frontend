import React, { useState, useEffect } from 'react'
import "./Navbar.scss";
import { Link, Redirect } from 'react-router-dom';
import { Row, Col, Drawer, Button } from 'antd';
import { MenuOutlined, UserAddOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { logoutUserAction } from '../../../Admin/Auth/actions';

const Navbar = (props) =>{

    const [isVisibile, setIsVisibile] = useState(false)
    const [isAuthenticated, setisAuthenticated] = useState(true);
    let token = false;
    
    useEffect(()=>{
            if(localStorage.getItem("token")){
                setisAuthenticated(false);
            }
    },[props.state,token]);
    
    const showDrawer = () => {
      setIsVisibile(true)
    };
    const onClose = () => {
      setIsVisibile(false)
    };

    console.log(isAuthenticated);

    const logout = () =>{
        const token = localStorage.getItem("token");
        localStorage.removeItem("token");
        setisAuthenticated(false);
        props.dispatch(logoutUserAction({token}));
        window.history.go(0);
    }

    if(!isAuthenticated){

        return (
            <nav className="navbar">
            <Link to="/" >
                <h2>School Tribe</h2>
                {/* <img src="" alt="" /> */}
            </Link> 
        <div className="desktop">
            <Row className="buttons" gutter={24}>
                <Button onClick={logout} type="primary"  className="signup-form-button link" ><Col>
                    <UserOutlined style={{ color: '#fff' }} /> Logout
                </Col>
                </Button>
            </Row>
        </div>
        <div className="mobile">
        <Button className="barsMenu" onClick={showDrawer}>
          <MenuOutlined style={{ color: '#08c',outline :"none" }} />
        </Button>
        <Drawer 
          placement="right"
          closable={false}
          onClose={onClose}
          visible={isVisibile}
          onClick={onClose}

        >
          <div className="links">
          <Row className="row" gutter={24}>
                <Col className="col" span={24} >
                <LogoutOutlined style={{ color: '#08c' }} /> 
                <Link onClick={logout} to="/login"  className="link">
                    Logout
                </Link>
                </Col>
            </Row>
          </div>
        </Drawer>
        </div>
        </nav>
        )
    }else{
    return (
        <nav className="navbar">
            <Redirect to="/login" />
            <Link to="/" >
                <h2>School Tribe</h2>
                {/* <img src="" alt="" /> */}
            </Link> 
        <div className="desktop">
            <Row className="buttons" gutter={24}>
                <Link style={{color :"#fff"}} to="/login" > <Col className="button">
                    <UserOutlined style={{ color: '#fff' }} /> Login
                </Col>
                </Link>
                <Link style={{color :"#fff"}}to="/signup" ><Col className="button" >
                    <UserAddOutlined style={{ color: '#fff' }} /> Signup
                </Col>
                </Link>
            </Row>
        </div>
        <div className="mobile">
        <Button className="barsMenu" onClick={showDrawer}>
          <MenuOutlined style={{ color: '#08c',outline :"none" }} />
        </Button>
        <Drawer 
          placement="right"
          closable={false}
          onClose={onClose}
          visible={isVisibile}
          onClick={onClose}

        >
          <div className="links">
          <Row className="row" gutter={24}>
                <Col className="col" span={24} >
                <UserOutlined style={{ color: '#08c' }} /> 
                <Link className="link" to="/login">
                    Login
                </Link>
                </Col>
                <Col className="col" span={24} >
                    <UserAddOutlined style={{ color: '#08c' }} />
                    <Link className="link" to="/signup" >Signup</Link>
                </Col>
            </Row>
          </div>
        </Drawer>
        </div>
        </nav>
    )
    }
}

const mapStateToProps = (state) => ({state});


export default connect(mapStateToProps,null)(Navbar)
