import React from 'react'
import { Col, Row, Button, Drawer } from 'antd'
import { Link } from 'react-router-dom'
import { MenuOutlined, LogoutOutlined } from '@ant-design/icons'

function LoggedIn({showDrawer,logout,onClose,Visible,props}) {
    return (
        <nav className="navbar">
        <Link to="/dashboard" >
            <h2>School Tribe</h2>
            {/* <img src="" alt="" /> */}
        </Link> 
    <div className="desktop">
        <Row className="buttons" gutter={24}>
            <Link to="/login" onClick={logout} className="signup-form-button link" ><Col>
                Logout <LogoutOutlined style={{ color: '#08c' }} />
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
      visible={Visible}
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
}

export default LoggedIn
